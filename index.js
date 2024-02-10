//LICENSED UNDER THE GNU GPLv3
//GIT REPO: https://github.com/gilwiljam/grimmbot
//CREATED BY GILWILJAM


//VARIABLES
const pagearray = ['https://rule34.xxx/index.php?page=post&s=list&tags=grimm_%28hollow_knight%29&pid=0', 'https://rule34.xxx/index.php?page=post&s=list&tags=grimm_%28hollow_knight%29&pid=42', 'https://rule34.xxx/index.php?page=post&s=list&tags=grimm_%28hollow_knight%29&pid=84', 'https://rule34.xxx/index.php?page=post&s=list&tags=grimm_%28hollow_knight%29&pid=126', 'https://rule34.xxx/index.php?page=post&s=list&tags=grimm_%28hollow_knight%29&pid=168']
const { Client, GatewayIntentBits, Partials, Events } = require('discord.js'); 
const client = new Client({ intents: [GatewayIntentBits.Guilds], partials: [Partials.Channel] });
const token =  ''  // PUT YOUR TOKEN HERE
const sleep = (waitTimeInMs) => new Promise(resolve => setTimeout(resolve, waitTimeInMs));


//FUNCTIONS 


function index(string, subString, index) {
  return string.split(subString, index).join(subString).length;
}   

  
async function data(){   
  let pagenumber = Math.floor(Math.random() * (4 - 0) + 1) //If you wish to add more page numbers,  
  let imgnumber = Math.floor(Math.random() * (42 - 1) + 1) //42 images per page.
  console.log(imgnumber) 
  const res = await fetch(pagearray.at(pagenumber))
  html = await res.text()   
  fetchnumber(imgnumber, html)
  function fetchnumber(number, html) { 
    let ind = html.substring(index(html,`<img src="https://us`, number)) 
    let ind2 = ind.substring(10, index(ind,`" `, 1)) 
    const channel = client.channels.cache.get('')  //PUT YOUR CHANNEL HERE! WILL NOT WORK IF YOU DO NOT DO THIS!
    channel.send(ind2)
    sleep(5000).then(() => {
      console.log('Fetched link', ind2)  
      process.exit()
    })    
    } 
  } 
  


client.on(Events.ClientReady, readyClient => { 
  console.log("READY!") 

  data()
    });

  


client.login(token);

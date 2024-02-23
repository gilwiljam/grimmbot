# grimmbot
If you wish to use this bot on your own machine, the instructions are as folows. 

Make sure you have Git, NodeJs and npm installed. 
If you are on Linux, look in your local package repository. Or you can download binaries directly from the NodeJS website. 

`Debian/Ubuntu:` 

`$ sudo apt-get install git nodejs npm` 

`Fedora/Red Hat` 

`$ sudo dnf install git nodejs` - NPM is packaged with Node JS in newer versions

Windows 10/11: 
Install NodeJS and Git from their respective websites. 

Instructions:

`$ git clone https://github.com/gilwiljam/grimmbot && cd grimmbot`  

`Replace const token with your token for your bot, and the channel ID on line 32.` 

`$ node index.js`

If you would like it to run a set period of time (on linux) use `$ watch -n <seconds> node index.js`

const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();

client.on('ready', () => {
   console.log(`----------------`);
   console.log(`Credit Farmm - Script By : Badr `);
   console.log(`----------------`);
   console.log(`Loadinng`);
   console.log(`Loadinng.`);
   console.log(`Loadinng..`);
   console.log(`Loadinng...`);
   console.log(`This Bots Online ' `);
   console.log(`----------------`);
});


client.on('message', message => {
    if(message.content === '-راتب'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
    if(message.content === '-مبلغ'){
        message.channel.send('#credits')
    }
});

client.on('message', message => {
    if(message.content === '-ريب'){
        message.channel.send('#rep')
    }
});

client2.on('message', message => {
    if(message.content === '-راتب'){
        message.channel.send('#daily')
    }
});

client2.on('message', message => {
    if(message.content === '-مبلغ'){
        message.channel.send('#credits')
    }
});

client2.on('message', message => {
    if(message.content === '-ريب'){
        message.channel.send('#rep')
    }
});



client.on('message', message => { // لا تغير شئ عشان ما تخرب الدنيا
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**Credit Spam , لا اللة الا اللة محمد رسول اللة لا اللة الا اللة محمد رسول اللة لا اللة الا اللة محمد رسول اللة لا اللة الا اللة محمد رسول اللة لا اللة الا اللة محمد رسول اللة لا اللة الا اللة محمد رسول اللة لا اللة الا اللة محمد رسول اللة لا اللة الا اللة محمد رسول اللة لا اللة الا اللة محمد رسول اللة لا اللة الا اللة محمد رسول اللة لا اللة الا اللة محمد رسول اللة لا اللة الا اللة محمد رسول اللة **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client2.on('message', message => { // لا تغير شئ عشان ما تخرب الدنيا
if (message.content === '.1') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**Credit Spam , لا اللة الا اللة محمد رسول اللة لا اللة الا اللة محمد رسول اللة لا اللة الا اللة محمد رسول اللة لا اللة الا اللة محمد رسول اللة لا اللة الا اللة محمد رسول اللة لا اللة الا اللة محمد رسول اللة لا اللة الا اللة محمد رسول اللة لا اللة الا اللة محمد رسول اللة لا اللة الا اللة محمد رسول اللة لا اللة الا اللة محمد رسول اللة لا اللة الا اللة محمد رسول اللة لا اللة الا اللة محمد رسول اللة **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});




client.login("NTE4NDQ5NTY1NzA0Mzg4NjI5.DuWfgQ.QVTN2CS7wWpWDzb1C6TG1vAjsBs");// لا تغير فيها شيء
client2.login("NTE4ODMyMzExNDg4MzQ4MTYz.DuWg0w.DZdG347xNdU7ragvzNSg1C-5iEY");// لا تغير فيها شيء

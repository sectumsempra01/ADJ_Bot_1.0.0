const { Client } =  require('discord.js');
const { play,stop } = require('./command');

const bot = new Client();
bot.login('NzkwMjkwNzYxMTQzODEyMTQ3.X9-doA.X7AO9JPRgid_uoByFcUtIl29J-M');

bot.on('ready',()=> console.log('ADJ Bot has logged in '));

bot.on('message',(msg)=>{
  if(msg.author.bot) return;

  const prefix = '.';
  if(!msg.content.startsWith(prefix)) return;

  const commandName = getCommandName(prefix,msg.content);

  const args =  getCommandArgs(prefix,msg.content);

  if (commandName === 'play')
  return play(msg,args);

  else if (commandName === 'stop')
  return stop(msg,args);
});

function getCommandName(prefix,content){
  return content//.play Gnatt
  .slice(prefix.length)//play Gnatt

  .split(' ')[0];

}

function getCommandArgs(prefix,content) {
  return content
  .split(' ')
  .slice(1);
}
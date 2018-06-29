const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {

  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('ready', () => {
  client.user.setStatus('Online')
  client.user.setPresence({
      game: {
        name: 'RocketBot',
        type: 0
      }
  });
  console.log('Development abdo ')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' RocketBot Online now by baba dook')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});





client.on('message', message => {
  var prefix = ".";

    if (!message.content.startsWith(prefix)) return;
    var args = message.content.split(' ').slice(1);
    var argresult = args.join(' ');
    if (message.author.id == 411564557027508235) return;


  if (message.content.startsWith(prefix + 'play')) {
  if (message.author.id !== '312545924952096769') return message.reply('This command just for the bot owner and thank you')
  client.user.setGame(argresult);
      message.channel.sendMessage(`**${argresult}done**`)
  } else


  if (message.content.startsWith(prefix + 'tw')) {
  if (message.author.id !== '312545924952096769') return message.reply('This command just for the bot owner and thank you')
  client.user.setGame(argresult, "http://twitch.tv/abdobenhamidou/");
      message.channel.sendMessage(`**${argresult}done**`)
  } else

  if (message.content.startsWith(prefix + 'name')) {
  if (message.author.id !== '312545924952096769') return message.reply('This command just for the bot owner and thank you')
    client.user.setUsername(argresult).then
        message.channel.sendMessage(`**${argresult}done**`)
    return message.reply("done");
  } else

  if (message.content.startsWith(prefix + 'photo')) {
  if (message.author.id !== '312545924952096769') return message.reply('This command just for the bot owner and thank you')
  client.user.setAvatar(argresult);
      message.channel.sendMessage(`**${argresult}done**`);
  }



   });





client.on('message', message => {
  var prefix = "!!";

    if (!message.content.startsWith(prefix)) return;
    var args = message.content.split(' ').slice(1);
    var argresult = args.join(' ');
    if (message.author.id == 411564557027508235) return;


  if (message.content.startsWith(prefix + 'play')) {
  if (message.author.id !== '279604584165670923') return message.reply('This command just for the bot owner and thank you')
  client.user.setGame(argresult);
      message.channel.sendMessage(`**${argresult}done**`)
  } else


  if (message.content.startsWith(prefix + 'tw')) {
  if (message.author.id !== '279604584165670923') return message.reply('This command just for the bot owner and thank you')
  client.user.setGame(argresult, "http://twitch.tv/abdobenhamidou/");
      message.channel.sendMessage(`**${argresult}done**`)
  } else

  if (message.content.startsWith(prefix + 'name')) {
  if (message.author.id !== '279604584165670923') return message.reply('This command just for the bot owner and thank you')
    client.user.setUsername(argresult).then
        message.channel.sendMessage(`**${argresult}done**`)
    return message.reply("done");
  } else

  if (message.content.startsWith(prefix + 'photo')) {
  if (message.author.id !== '279604584165670923') return message.reply('This command just for the bot owner and thank you')
  client.user.setAvatar(argresult);
      message.channel.sendMessage(`**${argresult}done**`);
  }



   });




   client.on('message', message => {
    if (message.content === ".babadook") {
           if(!message.channel.guild) return message.reply('** This command only for servers **');
    let embed = new Discord.RichEmbed()
 .setColor('RANDOM')
 .addField("⚠ this command just for babadook 💬 " , " . ")
 .addField("commands owner is ready. type tag {.}" , "if you want change name the bot .name>name you want | if you want make bot on streaming .tw | .play ")
 .addField("ty", '⚙')
 .setTimestamp()
 message.channel.sendEmbed(embed);
   }
 });


   client.on('message', message => {
    if (message.content === ".admin") {
           if(!message.channel.guild) return message.reply('** This command only for servers **');
    let embed = new Discord.RichEmbed()
 .setColor('RANDOM')
 .addField("⚠ this command just for the bot RocketDot 💬 " , " . ")
 .addField("commands owner is ready. type tag {!!}" , "if you want change name the bot !!name>name you want | if you want make bot on streaming !!tw | !!play ")
 .addField("ty", '⚙')
 .setTimestamp()
 message.channel.sendEmbed(embed);
   }
 });



client.on('message', message => {
  if (message.content === 'Привет') {
    message.react('👋')
     

  }
});








client.on('message', message => {
  if (message.content === 'Привет') {
    message.react('👋')
     

  }
});








client.on('message', message => {
  if (message.content === 'Привет вам') {
    message.react('👋')
     

  }
});
client.on('message', message => {
  if (message.content === 'hola') {
    message.react('👋')
     

  }
});
client.on('message', message => {
  if (message.content === 'Hola') {
    message.react('👋')
     

  }
});
client.on('message', message => {
  if (message.content === 'привет вам') {
    message.react('👋')
     

  }
});
client.on('message', message => {
  if (message.content === 'желанный') {
    message.react('👋')
     

  }
});

client.on('message', message => {
  if (message.content === 'Здравствуйте') {
    message.react('👋')
     

  }
});

client.on('message', message => {
  if (message.content === 'Привет как дела') {
    message.react('👋')
     

  }
});



client.on('message', message => {
  if (message.content === 'привет как дела') {
    message.react('👋')
     

  }
});


client.on('message', message => {
  if (message.content === 'привет') {
    message.react('👋')
     

  }
});




client.on('message', message => {
  if (message.content === 'hello') {
    message.react('👋')
     

  }
});








client.on('message', message => {
if (message.content === 'Hello') {
message.channel.send('**hello  :grinning: :wave::skin-tone-1: **');
message.react('👋')
}
});



client.on('message', message => {
if (message.content === 'bye') {
message.channel.send('**good bye**');

}
});




client.on('message', message => {
if (message.content === 'good bye') {
message.channel.send('**bye come back again**');

}
});





client.on('message', message => {
if (message.content === 'how are you') {
message.channel.send('**im fine and you :blush: **');

}
});






client.on('message', message => {
if (message.content === 'hi') {
message.channel.send('**hello**');

}
});


client.on('message', message => {
  if (message.content === 'Hi') {
  message.channel.send('**hello**');
  
  }
  });
  



client.on('message', message => {
if (message.content === 'fine') {
message.channel.send('**:innocent: **');

}
});





client.on('message', message => {
if (message.content === 'good') {
message.channel.send('**:stuck_out_tongue_winking_eye:  **');

}
});


client.login("NDYwNTAyMTk5NzUxOTMzOTUy.DhFuVQ.1lebYnR6-xOXjMQU9pCJj2qMwPE");

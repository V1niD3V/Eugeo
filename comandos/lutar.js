const Discord = require("discord.js")
exports.run = (client, message) => {
    let user = message.mentions.users.first();
    if (!user) return message.reply('você precisa mencionar alguém antes de lutar!')
            

      var cookies = [
"https://imgur.com/KkHwGy5.gif",
"https://imgur.com/F7an7AA.gif",
"https://imgur.com/HcZiNyi.gif",
"https://imgur.com/yB7gK05.gif",
"https://imgur.com/XXAOpNp.gif",
"https://imgur.com/Yv3cTCs.gif",
"https://imgur.com/pFmzYIu.gif",
"https://imgur.com/OHppmS1.gif",
"https://imgur.com/ddrWked.gif"
      ]
      let embed = new Discord.RichEmbed()
      .setTitle(`${message.author.username} está lutando com ${message.mentions.users.first().username}, que luta incrível!`)
      .setImage(cookies[Math.floor(Math.random() * cookies.length)])
      .setColor("#00ffdd")
            message.reply(embed)
    }

  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'lutar',
    description: 'Lute com alguem ;-;',
    usage: 'lutar <usuário>'
  };
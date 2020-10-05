const Discord = require("discord.js")
exports.run = (client, message) => {
    let user = message.mentions.users.first();
    if (!user) return message.reply('você precisa mencionar alguém antes de dançar!')
            

      var cookies = [
"https://imgur.com/OG7eA7m.gif",
"https://imgur.com/EdKmkH7.gif",
"https://imgur.com/O58isrL.gif",
"https://imgur.com/BU7uiLU.gif",
"https://imgur.com/wIujgG0.gif",
"https://imgur.com/ocJPFsV.gif",
"https://imgur.com/w1Po90j.gif"
      ]
      let embed = new Discord.RichEmbed()
      .setTitle(`${message.author.username} dançou com ${message.mentions.users.first().username}, tuts, tuts, tuts!`)
      .setImage(cookies[Math.floor(Math.random() * cookies.length)])
      .setColor("#59ff61")
            message.reply(embed)
    }

  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'dançar',
    description: 'Dance com alguem.',
    usage: 'dançar <user>'
  };
const Discord = require("discord.js")
exports.run = (client, message) => {
            

      var cookies = [
"https://imgur.com/CzRgRNr.gif",
"https://imgur.com/xJuoYL5.gif",
"https://imgur.com/kpeEP8u.gif",
"https://imgur.com/XX1X3NR.gif",
"https://imgur.com/XGqv0xD.gif",
"https://imgur.com/z9HbpK0.gif",
"https://imgur.com/MZqFyZ8.gif",
"https://imgur.com/FiUeV1m.gif",
"https://imgur.com/NXQkkYz.gif"
      ]
      let embed = new Discord.RichEmbed()
      .setTitle(`${message.author.username} está jogando, não o atrapalhe! 🎮`)
      .setImage(cookies[Math.floor(Math.random() * cookies.length)])
      .setColor("#202020")
            message.reply(embed)
    }

  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  }
  
  exports.help = {
    name: 'jogar',
    description: 'Joga um joguinho ;-;',
    usage: 'jogar'
  };
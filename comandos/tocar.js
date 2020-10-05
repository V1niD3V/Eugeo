const Discord = require("discord.js")
exports.run = (client, message) => {
            

      var cookies = [
          "https://imgur.com/kHR3Xoj.gif",
          "https://imgur.com/6urGygw.gif",
          "https://imgur.com/Z2uvd6R.gif",
          "https://imgur.com/Y3VHNRz.gif",
          "https://imgur.com/5MU8pDW.gif",
          "https://imgur.com/dmdyUfM.gif"
      ]
      let embed = new Discord.RichEmbed()
      .setTitle(`${message.author.username} está tocando, você tem talento! 🎸`)
      .setImage(cookies[Math.floor(Math.random() * cookies.length)])
      .setColor("#f61e61")
      .setColor("RANDOM")
            message.reply(embed)
    }

  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  }
  
  exports.help = {
    name: 'tocar',
    description: 'Toca um instrumento ;-;',
    usage: 'tocar'
  };
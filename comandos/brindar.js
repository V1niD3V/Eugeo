const Discord = require("discord.js")
exports.run = (client, message) => {
    let user = message.mentions.users.first();
    if (!user) return message.reply('você precisa mencionar alguém antes de brindar!')
            

      var cookies = [
        "https://imgur.com/kPLwjig.gif",
        "https://imgur.com/akEvNjt.gif",
        "https://imgur.com/g1T7F3c.gif",
        "https://imgur.com/NpAPInw.gif",
        "https://imgur.com/IanyDlq.gif",
        "https://imgur.com/j9UXRq9.gif"
        
     ]
      let embed = new Discord.RichEmbed()
      .setTitle(`${message.author.username} brindou com ${message.mentions.users.first().username}, tim tim! 🍻`)
      .setImage(cookies[Math.floor(Math.random() * cookies.length)])
            .setColor("#fae71b")
            message.reply(embed)
    }

  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'brindar',
    description: 'Brinde com alguem :3',
    usage: 'brindar <usuário>'
  };
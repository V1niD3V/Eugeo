const Discord = require("discord.js")
exports.run = (client, message) => {
            

      var cookies = [
        "https://media.giphy.com/media/ROF8OQvDmxytW/giphy.gif",
        "https://media.giphy.com/media/qscdhWs5o3yb6/giphy.gif",
        "https://media.giphy.com/media/4pk6ba2LUEMi4/giphy.gif",
        "https://media.giphy.com/media/4smXTnnqlS2ys/giphy.gif",
        "https://imgur.com/gq7u1G2.gif",
        "https://imgur.com/Oy4N0CD.gif",
        "https://imgur.com/6G4TaDB.gif",
        "https://imgur.com/HOoXFoR.gif",
        "https://imgur.com/LXogIll.gif",
        "https://imgur.com/rGkwcpM.gif"
      ]
      let embed = new Discord.RichEmbed()
      .setTitle(`${message.author.username} está chorando, não fique triste! :c`)
      .setImage(cookies[Math.floor(Math.random() * cookies.length)])
      .setColor("#00fcce")
            message.reply(embed)
    }

  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'chorar',
    description: 'Chora ;-;',
    usage: 'chorar'
  };
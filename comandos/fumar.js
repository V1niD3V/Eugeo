const Discord = require("discord.js")
exports.run = (client, message) => {
            

      var cookies = [
        "https://media.giphy.com/media/4ilFRqgbzbx4c/giphy.gif",
        "https://media.giphy.com/media/xdgisqRDFyO9G/giphy.gif",
        "https://media.giphy.com/media/Ejw31fJJkDfQ4/giphy.gif",
        "https://media.giphy.com/media/c7HsMGh5abAv6/giphy.gif",
        "https://media.giphy.com/media/3XUbDJ3rPBK1y/giphy.gif",
        "https://media.giphy.com/media/25JGQ0SPpafi8/giphy.gif",
        "https://media.giphy.com/media/3oFzm2q0Xk1Zg5k4mI/giphy.gif"
      ]
      let embed = new Discord.RichEmbed()
      .setTitle(`${message.author.username} está fumando...`)
      .setDescription(`Não fume na vida real, isso é só um comando de entretenimento!`)
      .setImage(cookies[Math.floor(Math.random() * cookies.length)])
      .setColor("#202020")
            message.reply(embed)
    }

  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'fume',
    description: 'Fume',
    usage: 'fumar'
  };
const Discord = require("discord.js")
exports.run = (client, message) => {
            

      var cookies = [
        "https://media.giphy.com/media/6XX4V0O8a0xdS/giphy.gif",
        "https://media.giphy.com/media/jBzO4OBN8oIms/giphy.gif",
        "https://media.giphy.com/media/tUnSstz3Xa17a/giphy.gif",
        "https://media.giphy.com/media/CpO7VHeeCfcUo/giphy.gif",
        "https://media.giphy.com/media/xCpLWINHr6B0c/giphy.gif",
        "https://media.giphy.com/media/l0MYGbcLWs1cc732M/giphy.gif",
        "https://media.giphy.com/media/12KgdcCSwkIBxe/giphy.gif"
      ]
      let embed = new Discord.RichEmbed()
      .setTitle(`${message.author.username} está estudando, não atrapalhe ele!`)
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
    name: 'estudar',
    description: 'Estude até morrer ;-;',
    usage: 'estudar'
  };
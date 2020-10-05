const Discord = require("discord.js")
exports.run = (client, message) => {
            
      var cookies = [
        "https://media.giphy.com/media/iQHDtnUZ7gxI4/giphy.gif",
        "https://media.giphy.com/media/138XNW8ciGZvFu/giphy.gif",
        "https://media.giphy.com/media/up8gI8DCcdd1S/giphy.gif",
        "https://media.giphy.com/media/1oDA6lccgPe1y/giphy.gif",
        "https://media.giphy.com/media/TJNYHjqrgTGPm/giphy.gif",
        "https://media.giphy.com/media/CoeFBrfvxzZ2U/giphy.gif",
        "https://media.giphy.com/media/BL3dfUmze0B5S/giphy.gif",
        "https://media.giphy.com/media/oHTONps3xBNlu/giphy.gif",
        "https://media.giphy.com/media/jAe22Ec5iICCk/giphy.gif",
        "https://media1.tenor.com/images/074e7e0ac751003dfc432c7d16e52082/tenor.gif?itemid=12540383"
      ]
      let embed = new Discord.RichEmbed()
      .setTitle(`${message.author.username} dormiu, bons sonhos!`)
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
    name: 'dormir',
    description: 'Descanse um pouco',
    usage: 'dormir'
  };
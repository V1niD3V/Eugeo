const Discord = require("discord.js")
exports.run = (client, message) => {
    var owner = "553572481441595423"
    var owner2 = "700120169032319007"
    let user = message.mentions.users.first();
    if (!user) return message.reply('você precisa mencionar alguém antes de dar o chute!')
          if(user.id === owner) return message.reply("você não pode chutá-lo, babaca!");
          if(user.id === owner2) return message.reply("você não pode me chutar, brigão!");
            
      var cookies = [
        "https://media.giphy.com/media/u2LJ0n4lx6jF6/giphy.gif",
        "https://media.giphy.com/media/wOly8pa4s4W88/giphy.gif",
        "https://media.giphy.com/media/zoAIxJs83LmCY/giphy.gif",
        "https://media.giphy.com/media/cb4Pg4jau2SEE/giphy.gif",
        "https://media.giphy.com/media/ewp6KdCOEMSTm/giphy.gif",
        "https://media.giphy.com/media/maINkm7zjcL4s/giphy.gif",
        "https://media.giphy.com/media/oN0EnDd5cMzBu/giphy.gif",
        "https://media1.tenor.com/images/dddc6e263456df2af41a93e123a7622a/tenor.gif?itemid=15847183"
      ]
      let embed = new Discord.RichEmbed()
      .setTitle(`${message.author.username} chutou ${message.mentions.users.first().username}, estou sentindo uma treta!`)
      .setImage(cookies[Math.floor(Math.random() * cookies.length)])
      .setColor("#596fff")
            message.reply(embed)
    }

  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'chutar',
    description: 'Dá um chute em alguém ;-;',
    usage: 'chutar <user>'
  };
const Discord = require("discord.js")
exports.run = (client, message) => {
    var owner = "553572481441595423"
    var owner2 = "700120169032319007"
    let user = message.mentions.users.first();
    if (!user) return message.reply('você precisa mencionar alguém antes de dar o soco!')
          if(user.id === owner) return message.reply("você não pode machucá-lo, babaca!");
          if(user.id === owner2) return message.reply("você não pode me socar, brigão!");
            

      var cookies = [
        "https://media.giphy.com/media/AlsIdbTgxX0LC/giphy.gif",
        "https://media.giphy.com/media/yo3TC0yeHd53G/giphy.gif",
        "https://media.giphy.com/media/YrfARBZkReL8Q/giphy.gif",
        "https://media.giphy.com/media/ExgYLDxhtdyec/giphy.gif",
        "https://media.giphy.com/media/rfAc51qRkoAHC/giphy.gif",
        "https://media.giphy.com/media/XKO2OnnJnmqxW/giphy.gif",
        "https://media.giphy.com/media/Z5zuypybI5dYc/giphy.gif",
        "https://media.giphy.com/media/4IDCnoWDFLTLa/giphy.gif",
        "https://media.giphy.com/media/vxXLJxa2gDaord2eib/giphy.gif",
        "https://media.giphy.com/media/3ohzdLTyxQezn4Z476/giphy.gif",
        "https://media1.tenor.com/images/16c587440a4f8301c22ed04625e0f868/tenor.gif?itemid=16922805",
        "https://media1.tenor.com/images/0bdbcec4b3a54c6f3836b71573504beb/tenor.gif?itemid=17244322",
        "https://media1.tenor.com/images/24ec23f5a790feba0721412493ea93df/tenor.gif?itemid=17237749",
        "https://media1.tenor.com/images/76cbeb6363eb700b34b008de8bd4b10e/tenor.gif?itemid=17177137"
      ]
      let embed = new Discord.RichEmbed()
      .setTitle(`${message.author.username} socou ${message.mentions.users.first().username}, olha o pau quebrando!`)
      .setImage(cookies[Math.floor(Math.random() * cookies.length)])
      .setColor("RED")
            message.reply(embed)
    }

  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'socar',
    description: 'De um soco em alguem.',
    usage: 'socar <user>'
  };
const Discord = require("discord.js")
exports.run = (client, message) => {
            

      var cookies = [
        "https://media1.tenor.com/images/7723ce5e90c004f38d79148c4e2897ee/tenor.gif?itemid=9996571",
        "https://media1.tenor.com/images/4a5a1b2fae97269acaba9b892b51e405/tenor.gif?itemid=9720868",
        "https://media1.tenor.com/images/4c8c9796b31731892cfb5f10b5275cdf/tenor.gif?itemid=10316499",
        "https://media1.tenor.com/images/0918434ecb60cc4a0c968793d4bb8855/tenor.gif?itemid=7616174",
        "https://media1.tenor.com/images/6985937fc5c12554dd5f90e7a27a6aa8/tenor.gif?itemid=16925044",
        "https://media1.tenor.com/images/c4e43ae9f9e6083ac58ab1ba45c332a5/tenor.gif?itemid=16048370"
      ]
      let embed = new Discord.RichEmbed()
      .setTitle(`${message.author.username} está voando, que incrível!`)
      .setImage(cookies[Math.floor(Math.random() * cookies.length)])
            message.reply(embed)
    }

  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'voar',
    description: 'Voe como um pássaro ;-;',
    usage: 'voar'
  };
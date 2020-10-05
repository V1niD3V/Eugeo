const Discord = require("discord.js")
exports.run = async (client, message, args) => {
    var owner = "553572481441595423"
    var owner2 = "700120169032319007"
    let user = message.mentions.users.first();
    if (!user) return message.reply('você precisa mencionar alguém antes de dar o tapa!')
          if(user.id === owner) return message.reply("você não pode machucá-lo, seu otário!");
          if(user.id === owner2) return message.reply("você não pode tapear, brigão!");
            
      var cookies = [
        "https://media.giphy.com/media/Gf3AUz3eBNbTW/giphy.gif",
        "https://media.giphy.com/media/Zau0yrl17uzdK/giphy.gif",
        "https://media.giphy.com/media/xUNd9HZq1itMkiK652/giphy.gif",
        "https://media.giphy.com/media/tX29X2Dx3sAXS/giphy.gif",
        "https://media.giphy.com/media/LB1kIoSRFTC2Q/giphy.gif",
        "https://media.giphy.com/media/6Fad0loHc6Cbe/giphy.gif",
        "https://media.giphy.com/media/k1uYB5LvlBZqU/giphy.gif",
        "https://media.giphy.com/media/RrLbvyvatbi36/giphy.gif",
        "https://media.giphy.com/media/RXGNsyRb1hDJm/giphy.gif",
        "https://media.giphy.com/media/3vDS40HZxJwFGTbXoI/giphy.gif",
        "https://media.giphy.com/media/K9rQXtu1XdsCQ/giphy.gif"
      ]

      let embed = new Discord.RichEmbed()
      .setTitle(`${message.author.username} tapeou ${message.mentions.users.first().username}, vai dar treta!`)
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
    name: 'tapa',
    description: 'De um tapa em alguem.',
    usage: 'tapa <user>'
  };
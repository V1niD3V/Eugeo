const Discord = require("discord.js")
exports.run = (client, message) => {
    let user = message.mentions.users.first();
    if (!user) return message.reply('você precisa mencionar alguém antes de dar o high five!')
            

      var cookies = [
        "https://media.giphy.com/media/yZWsMXuXP9e5a/giphy.gif",
        "https://media.giphy.com/media/cAiBXaCjbHTry/giphy.gif",
        "https://media.giphy.com/media/3oEjHV0z8S7WM4MwnK/giphy.gif",
        "https://media.giphy.com/media/WgMPjYON83Yyc/giphy.gif",
        "https://media.giphy.com/media/pKdjSlAfbDWgw/giphy.gif",
        "https://media.giphy.com/media/wdh1SvEn0E06I/giphy.gif",
        "https://media.giphy.com/media/aPjgegpT7EFwc/giphy.gif",
        "https://media.tenor.com/images/64d186a0bfb932f9a48ecb768f2ed76f/tenor.gif?itemid=6097581",
        "https://media1.tenor.com/images/ed9317f7a9b6a057e6d5a39aaa607b80/tenor.gif?itemid=15746517"
    ]
      let embed = new Discord.RichEmbed()
      .setTitle(`${message.author.username} fez um toca aqui em ${message.mentions.users.first().username}, isso sim é amizade!`)
      .setImage(cookies[Math.floor(Math.random() * cookies.length)])
      .setColor("#f61e61")
            message.reply(embed)
    }

  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'tocaqui',
    description: 'Toque na mão de alguem ;-;',
    usage: 'tocaqui <usuário>'
  };
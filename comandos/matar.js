const Discord = require("discord.js")
exports.run = (client, message) => {
    var owner = "553572481441595423"
    var owner2 = "700120169032319007"
    let user = message.mentions.users.first();
    if (!user) return message.reply('você precisa mencionar alguém antes de matar!')
          if(user.id === owner) return message.reply("você não pode matá-lo, tá louco?!");
          if(user.id === owner2) return message.reply("você não pode me matar, o que eu te fiz?! :c");
            

      var cookies = [
"https://imgur.com/Mmu5v1i.gif",
"https://imgur.com/wWr1lFU.gif",
"https://imgur.com/aWxKSBP.gif",
"https://imgur.com/4WPWlSL.gif",
"https://imgur.com/fFk3Yqs.gif",
"https://imgur.com/St2L5a9.gif",
"https://imgur.com/R6v8Teo.gif"
      ]
      let embed = new Discord.RichEmbed()
      .setTitle(`${message.author.username} matou ${message.mentions.users.first().username}!`)
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
    name: 'matar',
    description: 'Mate alguem ;-;',
    usage: 'matar <usuário>'
  };
const Discord = require("discord.js")
exports.run = (client, message) => {
  var owner = "700120169032319007"
    let user = message.mentions.users.first();
    if(user.id === owner) return message.reply("nah, quero te beijar não, mas somos amigos! :D");
    if (!user) return message.reply('você precisa mencionar alguém antes de dar o beijo!')
            

      var cookies = [
        "https://media.giphy.com/media/G3va31oEEnIkM/giphy.gif",
        "https://media.giphy.com/media/hnNyVPIXgLdle/giphy.gif",
        "https://media.giphy.com/media/bGm9FuBCGg4SY/giphy.gif",
        "https://media.giphy.com/media/JFmIDQodMScJW/giphy.gif",
        "https://media.giphy.com/media/zkppEMFvRX5FC/giphy.gif",
        "https://media.giphy.com/media/jR22gdcPiOLaE/giphy.gif",
        "https://media.giphy.com/media/bm2O3nXTcKJeU/giphy.gif",
        "https://media.giphy.com/media/FqBTvSNjNzeZG/giphy.gif",
        "https://media.giphy.com/media/nyGFcsP0kAobm/giphy.gif",
        "https://media.giphy.com/media/MkYnKdrCrk4KY/giphy.gif",
        "https://media.giphy.com/media/KmeIYo9IGBoGY/giphy.gif",
        "https://media.giphy.com/media/KH1CTZtw1iP3W/giphy.gif",
        "https://media1.tenor.com/images/9fac3eab2f619789b88fdf9aa5ca7b8f/tenor.gif?itemid=12925177",
        "https://media.tenor.com/images/7555004fabff6860e9cb5a877b47230e/tenor.gif",
        "https://media1.tenor.com/images/e95c1035a43f19e82eb6667a18907eee/tenor.gif?itemid=6203354",
        "https://media1.tenor.com/images/780956e2edc3fea29925d92005cd6dfc/tenor.gif?itemid=12138800"
     ]
      let embed = new Discord.RichEmbed()
      .setTitle(`${message.author.username} beijou ${message.mentions.users.first().username}, eu shippo! 7w7`)
      .setImage(cookies[Math.floor(Math.random() * cookies.length)])
            .setColor("#fa1b1b")
            message.reply(embed)
    }

  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'beijar',
    description: 'Beije alguem :3',
    usage: 'beijar <usuário>'
  };
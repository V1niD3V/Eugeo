const Discord = require("discord.js")
exports.run = (client, message) => {
            

      var cookies = [
        "https://media.giphy.com/media/VVKdSfysjEAFi/giphy.gif",
        "https://media.giphy.com/media/YCuR57rk7q4aA/giphy.gif",
        "https://media.giphy.com/media/5ev3alRsskWA0/giphy.gif",
        "https://media.giphy.com/media/YCuR57rk7q4aA/giphy.gif",
        "https://media.giphy.com/media/BuOSTtLMIK7Cw/giphy.gif",
        "https://media.giphy.com/media/eSwGh3YK54JKU/giphy.gif",
        "https://media.giphy.com/media/hXYlYBixtHEFq/giphy.gif",
        "https://media.giphy.com/media/LU3uRsnett7gs/giphy.gif",
        "https://media.giphy.com/media/HxE2bm0SZWqhW/giphy.gif",
        "https://media.giphy.com/media/ViC6liI1iz3TGxb4po/giphy.gif",
        "https://media.giphy.com/media/DZQuf6L7aNsaI/giphy.gif",
        "https://media.giphy.com/media/Bvv6h2QbXPdW8/giphy.gif",
        "https://media.giphy.com/media/3o7btRkeE7RtAq8DnO/giphy.gif",
        "https://media.giphy.com/media/11KzOet1ElBDz2/giphy.gif",
        "https://media.giphy.com/media/QEqr30GK4LYmQ/giphy.gif",
        "https://media.tenor.com/images/186fb02a2164f37bc48b156e2f16f7ad/tenor.gif",
        "https://media.tenor.com/images/1330dcb51e05f44b4af7fee1a3a9c4bb/tenor.gif",
        "https://media1.tenor.com/images/26e31fa727f1b90e59992b3be16236ba/tenor.gif?itemid=9214810"
      ]
      let embed = new Discord.RichEmbed()
      .setTitle(`${message.author.username} está comendo, bom apetite!`)
      .setImage(cookies[Math.floor(Math.random() * cookies.length)])
      .setColor("#59ff61")
            message.reply(embed)
    }

  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'comer',
    description: 'Coma ;-;',
    usage: 'comer'
  };
const Discord = require("discord.js")
exports.run = (client, message) => {
    let user = message.mentions.users.first();
    if (!user) return message.reply('você precisa mencionar alguém antes de dar carinho!')
            

      var cookies = [
        "https://media.giphy.com/media/ARSp9T7wwxNcs/giphy.gif",
        "https://media.giphy.com/media/Z7x24IHBcmV7W/giphy.gif",
        "https://media.giphy.com/media/5tmRHwTlHAA9WkVxTU/giphy.gif",
        "https://media.giphy.com/media/109ltuoSQT212w/giphy.gif",
        "https://media.giphy.com/media/4HP0ddZnNVvKU/giphy.gif",
        "https://media.giphy.com/media/ye7OTQgwmVuVy/giphy.gif",
        "https://media.giphy.com/media/e7xQm1dtF9Zni/giphy.gif",
        "https://media.giphy.com/media/L2z7dnOduqEow/giphy.gif",
        "https://media.giphy.com/media/ruYMwmyOtpIxa/giphy.gif",
        "https://media.giphy.com/media/UQ4ZYtqML9s7S/giphy.gif",
        "https://media.giphy.com/media/TsV9Sr9AG2Ne8/giphy.gif",
        "https://media1.tenor.com/images/66c5a0d8405bea5d9bd99f406d844094/tenor.gif?itemid=15619689",
        "https://media1.tenor.com/images/f79297e5f7e6b45bc5a52095cc8e337a/tenor.gif?itemid=14961866",
        "https://media1.tenor.com/images/90712ed3a99db973ec92383a3c6a8767/tenor.gif?itemid=14043105"
      ]
      let embed = new Discord.RichEmbed()
      .setTitle(`${message.author.username} fez carinho em ${message.mentions.users.first().username} :3`)
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
    name: 'carinho',
    description: 'Dê amor para alguém :3',
    usage: 'carinho <usuário>'
  };
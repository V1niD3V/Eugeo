const Discord = require("discord.js")
exports.run = (client, message) => {

      let embed = new Discord.RichEmbed()
      .setTitle(`💳 │Créditos`)
      .addField(`Criadores`, `Vinícius`)
      .setFooter(`© Eugeo`)
      .setColor("#ffa500")
            message.reply(embed)
    }

  exports.help = {
    name: 'creditos',
    description: 'créditos garai',
    usage: 'creditos'
  };
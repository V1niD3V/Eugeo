const Discord = require("discord.js")
exports.run = (client, message) => {

      let embed = new Discord.RichEmbed()
      .setTitle(`🚀 │Vote`)
      .addField(`Votar no bot`, `https://top.gg/bot/700120169032319007/vote`)
      .setFooter(`~Hawks`)
      .setColor("#14dbfa")
            message.reply(embed)
    }

  exports.help = {
    name: 'vote',
    description: 'vote no bot',
    usage: 'vote'
  };
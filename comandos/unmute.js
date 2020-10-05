const Discord = require('discord.js'); // puxando a livraria 'discord.js'
exports.run = (client, message, args) => { // setando as bases
  // avisando sobre a embed de ajuda na DM

    let embed = new Discord.RichEmbed()
                .setTitle("🚧 |Manutenção")
                .setDescription("O comando está em criação, aguarde até que fique pronto.")
                .setColor("RANDOM")

    message.channel.send(embed)
  
  }

exports.help = { // setando o nome do arquivo, seguido do prefix
    name: "unmute"
}
const Discord = require("discord.js")
exports.run = (client, message) => {

      let embed = new Discord.RichEmbed()
      .setTitle(`:busts_in_silhouette: │Servidores`)
      .setDescription(`Atualmente estou em ${client.guilds.size} servidores.
      Este servidor tem ${message.guild.memberCount} membros.`)
      .setColor("#5445ff")
            message.reply(embed)
    }

  exports.help = {
    name: 'servers',
    description: 'mostra o número de servidores em que o bot está atualmente e quantos membros tem no servidor atual',
    usage: 'servers'
  };
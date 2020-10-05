const Discord = require("discord.js")
exports.run = (client, message, args, guild) => {

    if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("Você não tem permissão de ``Gerenciar Canais``"); // caso o membro não possua a permissão 'EXPULSAR_MEMBROS', vamos botar o erro
  

    let everyone = message.guild.roles.find(e => e.name === 'everyone');

    message.channel.overwritePermissions(message.guild.roles.find(x => x.name == '@everyone'), {
        'VIEW_CHANNEL': true,
        'SEND_MESSAGES': true
        })
      let embed = new Discord.RichEmbed()
      .setTitle('Destrancado')
      .addField('Este canal foi destrancado por ', message.author.username)
      message.channel.send(embed)

}
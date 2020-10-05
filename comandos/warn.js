const Discord = require("discord.js");
 
exports.run = (client, message, args) => {
 
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`permissões insuficientes!`)
 
    let membro = message.mentions.users.first()
    if (!membro) return message.reply(`mencione um membro antes de puni-lo!`)
 
    let motivo = args.slice(1).join(" ");
    if (!motivo) return message.reply(`escreva um motivo!`)
 
    let embed = new Discord.RichEmbed()
    .setTitle("Warn")
    .setDescription(`**Usuário punido:** ${membro.username}\n**Punido por:** ${message.author.username}\n**Motivo:** ${motivo}`)
    .setFooter(`Autor ${message.author.tag}`, message.author.displayAvatarURL)
    .setColor("RED")
 
    membro.send(embed)
    const canal = client.channels.get('666658797632225310')
    
    message.channel.send("Usuário punido com sucesso!")

canal.send(embed)

}
const Discord = require('discord.js'); // puxando a livraria 'discord.js'

exports.run = async (client, message, args) => { // setando as bases
  const msg = message
  
    if (!message.member.hasPermission('KICK_MEMBERS')) return message.reply("permissões insuficientes!") // caso o membro não possua a permissão 'EXPULSAR_MEMBROS', vamos botar o erro

    let member = message.mentions.members.first() // puxando um membro mencionavel
    if (!member) return message.reply("selecione um usuário válido!") // caso o autor esqueça de mencionar um membro, vamos dar o erro
    if (!member.bannable) return message.reply("não é possível punir este usuário.") // caso o membro tenha um cargo acima do seu bot, ele não vai expulsar
    let reason = args[1]
    if (!reason) reason = "Nenhuma razão fornecida" // caso nao haja, daremos com tal mensagem



   

    await member.kick(reason) // finalizando com o kick vai ser assim smm xau
console.log(member.username + " foi expulso")
      let pEmbed = new Discord.RichEmbed()
          .setTitle("Expulsão")
          .addField("Usuário punido", member.user.tag)
          .addField("Punido por", message.author.tag)
          .addField("Motivo", reason)
          .setFooter(`Autor ${message.author.tag}`, message.author.displayAvatarURL)
          .setColor("DARK_RED")
      
    msg.guild.channels.get(`666658797632225310`).send(pEmbed);

message.channel.send("Usuário punido com sucesso!")


}

exports.help = { // setando o nome do arquivo, seguido do prefix
    name: 'expulsar'
}

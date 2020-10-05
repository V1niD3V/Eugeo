const Discord = require('discord.js'); // puxando a livraria 'discord.js'
exports.run = (client, message, args) => { // puxando a base

    let embed = new Discord.RichEmbed()

    .setTitle(`🎉 │Convite`)
    .setDescription(`Clique no link abaixo para me adicionar em seu servidor!
    https://discord.com/oauth2/authorize?client_id=700120169032319007&scope=bot&permissions=8`)
    .setColor('#ff0571')
    .setFooter('© Eugeo')

    message.channel.send(embed)

}

exports.help = { // setando o nome do arquivo, seguido do prefix
    name: 'add'
}
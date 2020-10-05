const Discord = require('discord.js'); // puxando a livraria 'discord.js'

exports.run = (client, message, args) => { // setando as bases
    var numero = Math.floor(Math.random() * 100) + 0;
        let embed = new Discord.RichEmbed()

        .setTitle(`:rainbow_flag: │ Máquina Gay`)
        .setDescription(`**${message.author}** é **${numero}%** gay`)
        .setColor('#FF0084')

        message.channel.send(embed)
}
exports.help = { // setando o nome do arquivo, seguido do prefix
    name: 'gay'
}
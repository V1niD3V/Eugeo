const Discord = require('discord.js')
const c = require('../config.json')
exports.run = async (client, message, args) => {

    let mensg = args.join(' ')
    if (!mensg) {
        message.channel.send(`${message.author}, digite o erro que está ocorrendo!`)
        return undefined;
    }

    const embed = new Discord.RichEmbed()
        .setAuthor(`Report de ${message.author.username}`, message.author.displayAvatarURL)
        .setDescription(`${mensg}`)
        .setColor('RED')
        .setThumbnail(message.author.displayAvatarURL)
        .setTimestamp()
    client.channels.get(`723768938952916995`).send(embed)
        .then(function (msg) {
            message.channel.send(`${message.author}, seu report foi enviado com sucesso, em breve você será respondido! :mailbox_with_no_mail:`)
        }).catch(function (error) {
            console.log(error);
        });
        
}

exports.help = {
    name: "report",
    aliases: [
        "reportar",
        "report"
    ]
}
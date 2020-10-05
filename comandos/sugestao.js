const Discord = require('discord.js')
const c = require('../config.json')
exports.run = async (client, message, args) => {

    let mensg = args.join(' ')
    if (!mensg) {
        message.channel.send(`${message.author}, digite a sugestão!`)
        return undefined;
    }

    const embed = new Discord.RichEmbed()
        .setAuthor(`Sugestão de ${message.author.username}`, message.author.displayAvatarURL)
        .setDescription(`${mensg}`)
        .setColor('YELLOW')
        .setThumbnail(message.author.displayAvatarURL)
        .setTimestamp()
    client.channels.get(`719629081796149315`).send(embed)
        .then(function (msg) {
            message.channel.send(`Obrigado ${message.author}, sua sugestão foi enviada com sucesso! :mailbox_with_no_mail:`)
        }).catch(function (error) {
            console.log(error);
        });

}

exports.help = {
    name: "sugestão",
    aliases: [
        "sugestao",
        "sugestão"
    ]
}
const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

    let msg = message;

    
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("**você não tem permissão para isso.**");
    /*if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("**Você não tem permissão para isso.**");*/
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!tomute) return message.reply("defina o usuário a ser mutado");
    if (tomute.hasPermission("ADMINISTRATOR")) return message.reply("**você não pode mutar cargos superiores!**");
    let reason = args[1]
    if (!reason) return message.reply("insira um motivo");

    let muterole = msg.guild.roles.find(`name`, "Silenciado");

    let mutetime = args[2];
    if (!mutetime) return message.reply("você precisa definir um tempo [1s/1m/1h/1d]");

    message.delete().catch(O_o => {});

    try {
        tomute.send(`Você foi mutado por ${mutetime}, o motivo é ${reason}.`)
    } catch (e) {
        message.channel.send(`${tomute} foi mutado por ${mutetime} `)
    }

    let muteembed = new Discord.RichEmbed()
        .setDescription(`**Mute**`)
        .setColor("RANDOM")
        .addField("Usuário punido", tomute)
        .addField("Punido por", message.author.username)
        .addField("Duração", mutetime)
        .addField("Motivo", reason)
        .setFooter(`Autor ${message.author.tag}`, message.author.displayAvatarURL)
        .setTimestamp()
    msg.guild.channels.get(`666658797632225310`).send(muteembed);

message.channel.send("Usuário punido com sucesso!")

    await (tomute.addRole(muterole.id));

    setTimeout(function () {
        tomute.removeRole(muterole.id);
        msg.guild.channels.get(`666658797632225310`).send(`<@${tomute.id}> aprendeu a falar novamente e foi desmutado.`);
    }, ms(mutetime));


}

exports.help = {
    name: "mute",
    description: "Muta um usuário por certo tempo",
    usage: "<user> <tempo> <motivo>",
    aliases: ["mute"]
}

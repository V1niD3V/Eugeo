const Discord = require('discord.js'); 

exports.run = (bot,message,args) => {
    let embed = new Discord.RichEmbed()

    .setTitle("Ping do bot")
    .setColor("RANDOM")
    .setDescription(`Minha latência é de ${Math.round(bot.ping)}ms!`)
    .setFooter(`Comando de ping`, bot.user.displayAvatarURL);

    message.channel.send(embed);
}

exports.help = {
    name: 'ping'
}

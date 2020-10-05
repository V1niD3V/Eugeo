exports.run = async (client, message, args) => {
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply("permissões insuficientes!") 
    if (!args.join(' ')) return message.channel.send({embed: {
        title: "Uso incorreto!",
        description: "Uso correto: <titulo> \nEx. Devemos banir fulano do servidor?",
        footer: {
            icon_url: message.author.avatarURL,
            text: `Comando utilizado por ${message.author.username}`
        },
        color: 13632027,
        timestamp: new Date()
    }});

    message.delete();

    message.channel.send({embed: {
        title: args.join(' '),
        footer: {
            text: `Enquete criada por ${message.author.username}`
        },
        color: 8463563,
        timestamp: new Date()
    }}).then((message) => {
        message.react("✅");
        message.react("❌");
    })
};
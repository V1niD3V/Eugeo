const Discord = require("discord.js")
exports.run = (client, message) => {
    let user2 = message.mentions.users.first();
    if (!user2) return message.reply('você precisa mencionar alguém antes de fazer o pedido de namoro!')
            

      var cookies = [
        "https://data.whicdn.com/images/300417028/original.gif",
        "https://i.pinimg.com/originals/55/56/13/555613985fc740ed3f47dc0414470027.gif",
        "https://crystal.cafe/feels/src/1567377762549.gif",
     ]
     
      let embed = new Discord.RichEmbed()
      .setTitle(`:two_hearts: ${message.author.username} pediu ${user2.username} em namoro, será que ele(a) aceita? :two_hearts:`)
      .setImage(cookies[Math.floor(Math.random() * cookies.length)])
            .setColor("#ff0000")
                message.channel.send(embed).then(msg => {
            msg.react('✅').then(r => {
            msg.react('❌')
            
            });
                
        const AceitoFilter = (reaction, user, ) => reaction.emoji.name === '✅' && user.id === user2.id;
        const RejeitoFilter = (reaction, user, ) => reaction.emoji.name === '❌' && user.id === user2.id;
        
        const Aceito = msg.createReactionCollector(AceitoFilter);
        const Rejeito = msg.createReactionCollector(RejeitoFilter);

        
                Aceito.on('collect', r2 => { // criando um evento, caso o membro clique nessa reação, e todos são iguais!
              r2.remove(message.author.id);        

embed = new Discord.RichEmbed() 
                .setTitle("✅ | Pedido Aceito!")
                .addField(`:sparkling_heart: Agora ${message.author.username} e ${user2.username} estão namorando! :sparkling_heart:`, "Eles formam um belo casal.")
                .setColor("#00ff55")
                             message.channel.send(embed);
                             msg.delete()
        })
                
Rejeito.on("collect", r2 => {
                    embed = new Discord.RichEmbed() 
                .setTitle("❌ | Pedido Negado!")
                .addField(`Putz, não foi dessa vez, ${message.author.username}!`, ` Talvez na próxima você consiga... :(`)
                .setColor("#ff3333")
                            message.channel.send(embed);
                              msg.delete()
})
        })
  
}
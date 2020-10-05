const Discord = require('discord.js')
const randomstring = require("randomstring");
exports.run = (client, message, args, guild) => {

const atendente = message.guild.roles.find('name', 'Atendente')


       var embed = new Discord.RichEmbed()
       .setTitle("📞 | Tickets")
       .setDescription("Clique em uma reação para abrir um ticket.")
	   .addField("💰",  "Atendimento Financeiro", true)
	   .addField("💻", "Atendimento Técnico", true)
       
       message.channel.send(embed).then(msg => {
           
           msg.react("💰")
		   msg.react("💻")
           
           let filtro2 = (reaction, usuario) => reaction.emoji.name === "💰" && usuario.id !== message.author.id
            const coletor2 = msg.createReactionCollector(filtro2);
           
           coletor2.on('collect', pa => {
               
          
             let numbers = randomstring.generate({
    length: 5,
    charset: 'numeric'
  });

           
                  var name = `ticket-${numbers}`;
    message.guild.createChannel(name, { type: "text" }).then(
      (chan) => {
      chan.overwritePermissions(message.guild.roles.find('name', '@everyone'), {
         'VIEW_CHANNEL': false
      })
      chan.overwritePermissions(atendente, {
          'VIEW_CHANNEL': true
      })
      chan.overwritePermissions(message.author.id, {'VIEW_CHANNEL': true, 'SEND_MESSAGES': true, 'MENTION_EVERYONE': false})
        let category = message.guild.channels.find(c => c.name == "💰 | Atendimento Financeiro" && c.type == "category");
        if(!category) return message.channel.send("Não foi possivel criar o ticket, digite !setup para fazer o setup do sistema de ticket.")
  
      chan.setParent(category.id)
      chan.setTopic(`Ticket de: ` + message.author.username)
            const embednew = new Discord.RichEmbed()
            .setDescription(`Olá ${message.author.username}`)
            .setColor("123456")
            .setAuthor("Ticket " + message.author.username)
            .addField("🤔 | Não encontro o canal do meu ticket.", `Basta clicar em ${chan.name}`, false)

    
    
const embed = new Discord.RichEmbed()
.setTitle(`Olá. `)
.setColor("123456")
.addField("🤔 | Estou com duvidas, alguem pode me responder?", "Diga á sua duvida, basta um chamado ao cargo <@&>", false)
.addField("😱 | Eu descobri um bug!!!", "Aguarde, nossa equipe está visualizando tudo.", false)
.addField("🙄", "Caso não saiba, a demora do seu ticket para ser lido é normal, podemos estar ausente ou resolvendo outros ticket's, então aguarde.", false)
.addField("Clique neste emoji para encerrar o ticket", ":x:", true)
.setAuthor("Ticket sobre Atendimento Financeiro")

        chan.send(embed).then(y => {
            y.react("❌")
            let filtro = (reaction, usuario) => reaction.emoji.name === "❌" && usuario.id !== message.client.user.id;
            const coletor = y.createReactionCollector(filtro);
            coletor.on("collect", ap => {
            chan.send("O canal será deletado em 5 segundos!")
            setTimeout(() => {
                chan.delete();
                }, 5000) 
            }
            )
        })

})
})
           



          let filtro3 = (reaction, usuario) => reaction.emoji.name === "💻" && usuario.id == message.author.id
            const coletor3 = msg.createReactionCollector(filtro3);
			
			coletor3.on('collect', a => {
				
				
			           let numbers = randomstring.generate({
    length: 5,
    charset: 'numeric'
  });

           
                  var name = `ticket-${numbers}`;
    message.guild.createChannel(name, { type: "text" }).then(
      (chan) => {
      chan.overwritePermissions(message.guild.roles.find('name', '@everyone'), {
         'VIEW_CHANNEL': false
      })
      chan.overwritePermissions(atendente, {
          'VIEW_CHANNEL': true
      })
      chan.overwritePermissions(message.author.id, {'VIEW_CHANNEL': true, 'SEND_MESSAGES': true, 'MENTION_EVERYONE': false})
        let category2 = message.guild.channels.find(c => c.name == "💻 | Atendimento Técnico" && c.type == "category");
        if(!category2) return message.channel.send("Não foi possivel criar o ticket, digite !setup para fazer o setup do sistema de ticket.")
  
      chan.setParent(category2.id)
      chan.setTopic(`Ticket de: ` + message.author.username)
            const embednew = new Discord.RichEmbed()
            .setDescription(`Olá ${message.author.username}`)
            .setColor("123456")
            .setAuthor("Ticket " + message.author.username)
            .addField("🤔 | Não encontro o canal do meu ticket.", `Basta clicar em ${chan.name}`, false)

    
    
const embed = new Discord.RichEmbed()
.setTitle(`Olá. `)
.setColor("123456")
.addField("🤔 | Estou com duvidas, alguem pode me responder?", "Diga á sua duvida, basta um chamado ao cargo <@&>", false)
.addField("😱 | Eu descobri um bug!!!", "Aguarde, nossa equipe está visualizando tudo.", false)
.addField("🙄", "Caso não saiba, a demora do seu ticket para ser lido é normal, podemos estar ausente ou resolvendo outros ticket's, então aguarde.", false)
.addField("Clique neste emoji para encerrar o ticket", ":x:", true)
.setAuthor("Ticket sobre Atendimento Financeiro")

        chan.send(embed).then(y => {
            y.react("❌")
            let filtro = (reaction, usuario) => reaction.emoji.name === "❌" && usuario.id !== message.client.user.id;
            const coletor = y.createReactionCollector(filtro);
            coletor.on("collect", ap => {
            chan.send("O canal será deletado em 5 segundos!")
            setTimeout(() => {
                chan.delete();
                }, 5000) 
            }
            )
        })

})
})
       })
       
}
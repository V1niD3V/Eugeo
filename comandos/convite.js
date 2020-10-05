const Discord = require("discord.js")
exports.run = (client, message) => {
            if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply("você não tem permissões suficientes!")
    var cookies = [
        `Lá você pode:
➥ Fazer vários amigos
➥ Jogar seus minigames favoritos
➥ Ganhar cargos por cores e por níveis
➥ Enviar sugestões para o servidor
➥ Mandar suas artes
➥ Mandar perguntas para o Mitsuaki responder
➥ Conseguir emojis globais
➥ Conhecer o Eugeo (bot do Mitsuaki)
➥ Participar de eventos mensais
➥ Participar de sorteios
➥ Ser STAFF
➥ Divulgar seu conteúdo
➥ Ouvir música
➥ Participar de festas mensais
➥ E muito mais, não perca tempo!

➥ Site oficial: http://soulsofthunder.glitch.me/
➥ Link permanente: https://discord.gg/MXwnD2f`,

      ]
      let embed = new Discord.RichEmbed()
      .setTitle(`Souls of Thunder`)
      .setDescription(cookies[Math.floor(Math.random() * cookies.length)])
      .setColor('#1E90FF')
      .setImage("https://imgur.com/ratG7Hc.gif")
      message.delete().catch(O_o => {});
      message.channel.send(embed)    
    }

  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  }
  
  exports.help = {
    name: 'convite',
    description: 'Manda o convite do servidor suporte',
    usage: 'convite'
  };
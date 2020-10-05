const Discord = require('discord.js'); // puxando a livraria 'discord.js'
exports.run = (client, message, args) => { // setando as bases
    let user = message.mentions.users.first();
    if (!user) return message.reply('você precisa mencionar dois usuários antes de shippar!')
    var numero = Math.floor(Math.random() * 100) + 0;
    var cookies = [
    "https://media.giphy.com/media/hhHcFH0xAduCs/giphy.gif",
    "https://media.giphy.com/media/bMLGNRoAy0Yko/giphy.gif",
    "https://media.giphy.com/media/RvDaBsHYLUCVG/giphy.gif",
    "https://media.giphy.com/media/13cSgdBHS5keeQ/giphy.gif",
    "https://media.giphy.com/media/LzCE6RB3JUptC/giphy.gif",
    "https://media.giphy.com/media/D3qQ8DDSrkbWU/giphy.gif",
    "https://media.giphy.com/media/j5O4lz9WEtfvG/giphy.gif",
    "https://media.giphy.com/media/fxHpSohzG4uK4/giphy.gif",
    "https://media.giphy.com/media/Y4vBiFdqtGsDu/giphy.gif",
    "https://media.giphy.com/media/iHcRqdoTI3MZO/giphy.gif"
]
    let embed = new Discord.RichEmbed()

          .setTitle(`:revolving_hearts:  **Hmm, temos um novo casal aqui?**  :revolving_hearts:`)
          .setDescription(`**${message.mentions.users.first().username}** e **${message.mentions.users.last().username}** tem **${numero}%** de chance para dar certo!`)
          .setColor('#f72929')
          .setImage(cookies[Math.floor(Math.random() * cookies.length)])
                message.reply(embed)
        }

exports.help = { // setando o nome do arquivo, seguido do prefix
    name: 'ship',
    description: 'Shipe dois usuários',
    usage: 'ship <usuário1> <usuário2>'
  };
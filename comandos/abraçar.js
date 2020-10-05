const Discord = require("discord.js")
exports.run = (client, message) => {
    let user = message.mentions.users.first();
    if (!user) return message.reply('você precisa mencionar alguém antes de dar o abraço!')
            

      var cookies = [
        "https://media.giphy.com/media/PHZ7v9tfQu0o0/giphy.gif",
        "https://media.giphy.com/media/BXrwTdoho6hkQ/giphy.gif",
        "https://media.giphy.com/media/IRUb7GTCaPU8E/giphy.gif",
        "https://media.giphy.com/media/lrr9rHuoJOE0w/giphy.gif",
        "https://media.giphy.com/media/u9BxQbM5bxvwY/giphy.gif",
        "https://media.giphy.com/media/49mdjsMrH7oze/giphy.gif",
        "https://media.giphy.com/media/ZQN9jsRWp1M76/giphy.gif",
        "https://media.giphy.com/media/od5H3PmEG5EVq/giphy.gif",
        "https://media.giphy.com/media/EGauSkKQZuXxS/giphy.gif",
        "https://media.giphy.com/media/143v0Z4767T15e/giphy.gif",
        "https://media.giphy.com/media/wSY4wcrHnB0CA/giphy.gif",
        "https://media.giphy.com/media/5eyhBKLvYhafu/giphy.gif",
        "https://media.giphy.com/media/LIqFOpO9Qh0uA/giphy.gif",
        "https://media.giphy.com/media/TzQUtPMlAJAIg/giphy.gif",
        "https://media1.tenor.com/images/94989f6312726739893d41231942bb1b/tenor.gif?itemid=14106856",
        "https://media1.tenor.com/images/4a5d30deab873eba332e13aab4f431a9/tenor.gif?itemid=13395313",
        "https://media1.tenor.com/images/dd35274299746f11bfc547233fb4905b/tenor.gif?itemid=13395304",
        "https://media1.tenor.com/images/f070c4701aa0e4a2b065f2b507833074/tenor.gif?itemid=17406911"
     ]
      let embed = new Discord.RichEmbed()
      .setTitle(`${message.author.username} abraçou ${message.mentions.users.first().username}, que fofo! :3`)
      .setImage(cookies[Math.floor(Math.random() * cookies.length)])
      .setColor("#fa1b1b")
            message.channel.send(embed)
    }

  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'abraçar',
    description: 'Abrace alguem :3',
    usage: 'abraçar <usuário>'
  };
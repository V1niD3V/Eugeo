const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if (!message.guild) {
      return message.channel.send(new Discord.RichEmbed().setColor('RED').setTitle('Não disponível!').setDescription(message.author.username + ', Comando disponível apenas em servidores!').setFooter('', client.user.avatarURL).setTimestamp());
    }
    
    if (message.mentions.users.size < 2) return message.channel.send(new Discord.RichEmbed().setColor('RED').setTitle('Batalha 1vs1').setDescription('Uso incorreto \nUso correto: 1vs1 @nick1 @nick2').setFooter(message.author.username,message.author.avatarURL).setFooter("Batalha 1vs1").setTimestamp());

    message.channel.send(new Discord.RichEmbed().setColor("RANDOM").setTitle(":crossed_swords: Batalha 1vs1! :crossed_swords:").setDescription(`**Batalha 1vs1 entre ${args[0]} e ${args[1]}, quem será que vai ganhar?**`).setFooter('Batalha 1vs1', client.user.avatarURL).setThumbnail("http://www.xonotic.org/m/uploads/2011/11/duel.png").setTimestamp());


    setTimeout(() => {
      let winner = message.mentions.members.random();
      var sans = ["10'a","1'e","20'ye","30'a","2 ye"]
      var sonuc = sans[Math.floor((Math.random() * sans.length))];
        message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle(':crossed_swords: Batalha 1vs1 :crossed_swords:').setDescription(':gun: A batalha começou!').setFooter('Batalha dos perturbados.', client.user.avatarURL).setTimestamp())
        .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('RANDOM').setTitle(':shield:  1vs1  :shield:').setDescription(':dagger: Facada').setFooter('A batalha está acontecendo', client.user.avatarURL).setTimestamp()))
        .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('RANDOM').setTitle(':crossed_swords: 1vs1 :crossed_swords:').setDescription(':punch: Soco').setFooter('A batalha está acontecendo', client.user.avatarURL).setTimestamp()))
        .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('RANDOM').setTitle(':shield: 1vs1 :shield:').setDescription(':athletic_shoe: Chute').setFooter('A batalha está acontecendo', client.user.avatarURL).setTimestamp()))
        .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('RANDOM').setTitle(':crossed_swords: 1vs1 :crossed_swords:').setDescription(':punch: Soco na cara').setFooter('A batalha está acontecendo', client.user.avatarURL).setTimestamp()))
        .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('RANDOM').setTitle(':shield: 1vs1 :shield:').setDescription(':syringe: Os dois estão morrendo').setFooter('A batalha está acontecendo', client.user.avatarURL).setTimestamp()))
        .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('RANDOM').setTitle(':crossed_swords: 1vs1 :crossed_swords:').setDescription(':scream_cat: Voadora').setFooter('A batalha está acontecendo', client.user.avatarURL).setTimestamp()))
        .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('RANDOM').setTitle(':shield: 1vs1 :shield:').setDescription(':grimacing: A batalha está chegando ao final.').setFooter('A batalha está acontecendo', client.user.avatarURL).setTimestamp()))
        .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('RANDOM').setTitle(':crossed_swords: 1vs1 :crossed_swords:').setDescription(':muscle: Vejo que alguém está sangrando muito!').setFooter('A batalha está acontecendo', client.user.avatarURL).setTimestamp()))
        .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('RANDOM').setTitle(':shield: 1vs1 :shield:').setDescription(':rage: Chute no peito').setFooter('A batalha está acontecendo', client.user.avatarURL).setTimestamp()))
        .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('RANDOM').setTitle(':crossed_swords: 1vs1 :crossed_swords:').setDescription('A batalha acabou!').setFooter('A batalha está acontecendo', client.user.avatarURL).setTimestamp()))
        .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('#FFFF00').setTitle(':crossed_swords:  Batalha 1vs1  :crossed_swords:').setDescription(':tada: **O vencedor é ' + winner + '! Como você conseguiu?**').setImage("https://imgur.com/ZFr7g9Y.gif").setFooter('A batalha de 1vs1 acabou.', client.user.avatarURL).setTimestamp()))
    }, 900)
};
const Discord = require('discord.js'); // puxando a livraria 'discord.js'
exports.run = (client, message, args) => { // setando as bases
  // avisando sobre a embed de ajuda na DM

    let embed = new Discord.RichEmbed()
 
    .setTitle(`Central de Ajuda`)
    .setColor("#1482ff")
    .setDescription('`Clique no emoji para abrir a categoria` \n\n👮 **Comandos de moderação** \n🔧 **Comandos de utilidade** \n🎊 **Comandos de diversão** \n🎮 **Comandos de jogos** \n👋 **Comandos de ações**') 
    .setImage("https://i.pinimg.com/originals/34/28/36/342836c81798e4efbc2545720020a029.gif")
    .setThumbnail("https://primedepartamentos.com/images/icons/settings-icon.png")
    message.channel.send(embed).then(msg => { // evento para reagir a mensagem
            msg.react('👮').then(r => { // moderação
            msg.react('🔧') //utilidade
            msg.react('🎊') //diversão
            msg.react('🎮') //jogos
            msg.react('👋') //ações

        // filtros de cada reação, para configurar a informação do autor
        const UtilidadesFilter = (reaction, user, ) => reaction.emoji.name === '🔧' && user.id === message.author.id;
        const ModeraçãoFilter = (reaction, user, ) => reaction.emoji.name === '👮' && user.id === message.author.id;
        const DiversãoFilter = (reaction, user, ) => reaction.emoji.name === '🎊' && user.id === message.author.id;
        const JogosFilter = (reaction, user, ) => reaction.emoji.name === '🎮' && user.id === message.author.id;
        const AçõesFilter = (reaction, user, ) => reaction.emoji.name === '👋' && user.id === message.author.id;
// coletores de cada reação, para ver confirmar tal membro  

        const Utilidades = msg.createReactionCollector(UtilidadesFilter);
        const Moderação = msg.createReactionCollector(ModeraçãoFilter);
        const Diversão = msg.createReactionCollector(DiversãoFilter);
        const Jogos = msg.createReactionCollector(JogosFilter);
        const Ações = msg.createReactionCollector(AçõesFilter)


        Utilidades.on('collect', r2 => { // criando um evento, caso o membro clique nessa reação, e todos são iguais!
              r2.remove(message.author.id);        

embed = new Discord.RichEmbed() 
                .setTitle("🔧 | Utilidade")
                .addField(`\`e.add\``, `Adiciona o bot em algum servidor`)
                .addField(`\`e.anuncio\``, `Envia um anúncio em algum canal`)
                .addField(`\`e.avatar\``, `Envia a foto de algum membro`)
                .addField(`\`e.botinfo\``, `Dá informações sobre o bot`)
                .addField(`\`e.clima\``, `Verifica o clima de uma cidade`)
                .addField(`\`e.covid\``, `Mostra informações sobre a COVID-19`)
                .addField(`\`e.convite\``, `Envia o link de convite do servidor suporte`)
                .addField(`\`e.creditos\``, `Mostra os créditos`)
                .addField(`\`e.enquete\``, `Faz uma enquete em algum canal`)
                .addField(`\`e.emoji\``, `Cria um emoji em tamanho maior`)
                .addField(`\`e.hex\``, `Dá informações sobre o hexadecimal da cor solicitada`)
                .addField(`\`e.prefixo\``, `Muda o prefixo do bot`)
                .addField(`\`e.report\``, `Relata um erro que está acontecendo com o bot`)
                .addField(`\`e.sugestao\``, `Deixa uma sugestão para o nosso servidor`)
                .addField(`\`e.uptime\``, `Tempo em que o bot se está online`)
                .addField(`\`e.userinfo\``, `Dá informações sobre o membro mencionado`)
                .addField(`\`e.servericon\``, `Envia a foto do servidor`)
                .addField(`\`e.serverinfo\``, `Dá informações sobre o servidor`)
                .addField(`\`e.servers\``, `Mostra o número de servidores em que o bot está e quantos membros tem o servidor atual`)
                .addField(`\`e.vote\``, `Vota no bot`)
                .setColor("#808080")
                .setFooter(`© Eugeo`)

            msg.edit(embed);
        })
 
        Moderação.on('collect', r2 => {
              r2.remove(message.author.id);

              embed = new Discord.RichEmbed()
              .setTitle("👮 | Moderação")
              .addField(`\`e.ban\``, `Aplica um banimento em algum membro`)
              .addField(`\`e.clean\``, `Limpa mensagens em algum canal`)
              .addField(`\`e.expulsar\``, `Aplica uma expulsão em algum membro`)
              .addField(`\`e.mute\``, `Dá um mute em algum membro`)
              .addField(`\`e.lock\``, `Tranca o canal atual`)
              .addField(`\`e.unban\``, `Remove o banimento de algum membro`)
              .addField(`\`e.unlock\``, `Destranca o canal atual`)
              .addField(`\`e.unmute\``, `Remove o mute de algum membro`)
              .addField(`\`e.warn\``, `Aplica um aviso em algum membro`)
              .setFooter(`© Eugeo`)
              .setColor("#4169E1")
            msg.edit(embed);
        })
        
        Jogos.on('collect', r2 => {
              r2.remove(message.author.id);        

              embed = new Discord.RichEmbed() 
                .setTitle("🎮 | Jogos")
                .addField(`\`e.1vs1\``, `Faz uma batalha entre duas pessoas`)
                .addField(`\`e.8ball\``, `Faz uma pergunta ao bot`)
                .addField(`\`e.coinflip\``, `Mostra o lado em que a moeda cai`)
                .addField(`\`e.dado\``, `Mostra em qual número o dado caiu`)
                .addField(`\`e.guess\``, `Tenta adivinhar o número secreto`)
                .addField(`\`e.jokempo\``, `Brinca de pedra papel e tesoura com o bot`)
                .addField(`\`e.roleta\``, `Roda a roleta e fala se você sobreviveu ou morreu`)
                .setColor("#2020")
                .setFooter(`© Eugeo`)
                msg.edit(embed);
        })

        Diversão.on('collect', r2 => {
              r2.remove(message.author.id);

              embed = new Discord.RichEmbed()
              .setTitle("🎊 | Diversão")
              .addField(`\`e.ascii\``, `Envia uma frase em letras`) 
              .addField(`\`e.bolsonaro\``, `Envia o membro do Bolsonaro de acordo com a mensagem solicitada`)
              .addField(`\`e.cancelamento\``, `Faz um meme do cancelamento`)
              .addField(`\`e.cachorro\``, `Envia uma foto aleatória de um cachorro`)
              .addField(`\`e.cookie\``, `Envia um cookie para alguém`)
              .addField(`\`e.primeiraspalavras\``, `Envia o meme de um bebê falando pela primeira vez`)
              .addField(`\`e.laranjo\``, `Cria um meme do laranjo`)
              .addField(`\`e.lenny\``, `Envia rostos engraçados`)
              .addField(`\`e.meme\``, `Faz o bot enviar um meme`)
              .addField(`\`e.penis\``, `Mostra quantos centímetros tem seu piupiu (não é NSFW)`)
              .addField(`\`e.piada\``, `O bot envia piadas pra você`)
              .addField(`\`e.reverse\``, `Reverte a mensagem solicitada`)
              .addField(`\`e.ship\``, `Shippa os dois usuários mencionados`)
              .addField(`\`e.gay\``, `Mostra a porcentagem que você é gay`)
              .addField(`\`e.tweet\``, `Cria um falso tweet`)
              .addField(`\`e.gato\``, `Envia uma foto aleatória de um gato`)
              .addField(`\`e.say\``, `Faz o bot enviar uma mensagem através do comando`)
              .addField(`\`e.namorar\``, `Faz um pedido de namoro a alguém`)
              .setFooter(`© Eugeo`)
              .setColor("#FFFF00")
              msg.edit(embed);
        })
        
        Ações.on('collect', r2 => {
              r2.remove(message.author.id);        

              embed = new Discord.RichEmbed()
              .setTitle("👋 | Ações")
              .addField(`\`e.abraçar\``, `Abraça alguém`) 
              .addField(`\`e.beijar\``, `Beija alguém`)
              .addField(`\`e.brindar\``, `Brinda com alguém`)
              .addField(`\`e.cafe\``, `Toma café`)
              .addField(`\`e.carinho\``, `Dá carinho em alguém`)
              .addField(`\`e.chorar\``, `Chora :c`)
              .addField(`\`e.chutar\``, `Chuta alguém`)
              .addField(`\`e.comer\``, `Come UwU`)
              .addField(`\`e.dançar\``, `Dança com alguém`)
              .addField(`\`e.dormir\``, `Dorme '-.-`)
              .addField(`\`e.estudar\``, `Estuda ;-;`)
              .addField(`\`e.fumar\``, `Fuma >:c`)
              .addField(`\`e.highfive\``, `Toca na mão de alguém`)
              .addField(`\`e.jogar\``, `Joga B)`)
              .addField(`\`e.lutar\``, `Luta com alguém`)
              .addField(`\`e.matar\``, `Mata alguém`)
              .addField(`\`e.socar\``, `Soca alguém`)
              .addField(`\`e.tapa\``, `Tapeia alguém`)
              .addField(`\`e.tocar\``, `Toca guitarra`)
              .setFooter(`© Eugeo`)
              .setColor("#ffa500")
              msg.edit(embed);
        })
              })
            })
  }

exports.help = { // setando o nome do arquivo, seguido do prefix
    name: "ajuda"
}
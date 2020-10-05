const Discord = require('discord.js'); // puxando a livraria Discord.js

const config = require("./config.json"); // puxando todo o conteúdo dentro do aquivo 'config.json'

const fs = require("fs"); // definindo um nome para todos os comandos que iremos verificar
   
// no nosso caso, 'client' é o nome do nosso Discord.Client
const client = new Discord.Client(); // setando o nome do nosso Discord.Client!

client.commands = new Discord.Collection(); // adicionando uma coleção de comandos, puxando com o nosso Discord.Client

fs.readdir("./comandos/", (err, files) => {
    if (err) return console.error(err); // definindo mensagem de erro caso ocorra.
    files.forEach(file => { // definindo um antibug nos comandos.
      if (!file.endsWith(".js")) return; // falando para o bot, caso exista arquivos que não termina em .js, não ira carregar.
      let props = require(`./comandos/${file}`); //definindo o arquivo que vai iniciar.
      let commandName = file.split(".")[0]; // definindo o nome do comando
      client.commands.set(commandName, props);
    });
  });

// para facilitar a nossa vida, qualquer erro que aparecer no bot, ele nos mostrara no console
client.on('error', (err) => { 
   console.log(err.message) // e aqui, a mensagem do erro
});

// um evento ready, que traduzindo, fica 'pronto'. Como ele diz, iremos criar o evento para verificar se o bot está pronto para ligar.
client.on('ready', () => { // setando o evento com nosso Discord.Client
    console.log(`Bot foi iniciado com sucesso`); // caso não haja erro, o bot enviara no console que ligou
    // faz o negócio de entretenimento no bolsonaro
    // negocio de embed quando iniciar o bot
    
    // agora, iremos criar uma presence para nosso bot, porém, vai ser alternativa. Ou seja, alternando entre o que colocarmos abaixo
    var tabela = [ // criando uma variavel, nomeada de tabela 

// uma notinha: toda vez que for criar uma nova presence na nossa tabela, bote uma vírgula no final!
        {name: 'Paz para o mundo', type: 'STREAMING', url: 'https://www.twitch.tv/mitsuakioficial'},
        {name: 'Use e.ajuda', type: 'WATCHING'},
        {name: 'Use e.add para me adicionar!', type: 'PLAYING'},
        {name: 'Use e.vote para votar em mim!', type: 'LISTENING'},
        {name: '#FiqueEmCasa', type: 'LISTENING'},
        {name: '#BlackLivesMatter', type: 'PLAYING'},

    ];
// criando uma function...
    function setStatus() { // nomeamos ela de: setStatus
        // agora, iremos criar um sistema randômico, alternando entre as opções que criamos para a tabela
        var altstatus = tabela[Math.floor(Math.random() * tabela.length)]
        client.user.setPresence({game: altstatus}) // por fim, setando a presence. No caso, o jogo é a variavel que criamos 'altstatus'
    }
    setStatus(); // para finalizar, puxamos a function que criamos no inicio
    setInterval(() => setStatus(), 5000) // e adicionamos um intervalo entre as presences
});    

// um evento aonde iremos registrar os novos membros do servidor
// agora msg de bemvindo /


// evento message, com bases do nosso bot
client.on('message', message => { // nome desse evento, foi setado como: message -- quero, vou pegar o link aq
    if (message.author.bot) return; // puxando o nome definido, bloquearemos o uso de comandos por outros bots
    if (message.channel.type === "dm") return;


    let prefix = config.prefix;

    if(message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) {
      return message.channel.send({embed: {
        color: 16738051,
        description: `👋 │Olá ${message.author.username}, meu prefixo é **${config.prefix}**, se tiver mais dúvidas utilize o comando **e.ajuda**. Tenha um bom dia!`
      }})}
 // puxando o prefixo do nosso bot
  if (!message.content.startsWith(prefix)) return; // para evitar bugs, setaremos uma function, definindo que o bot respondera apenas para mensagens que possuem seu prefixo, no inicio
    var args = message.content.substring(config.prefix.length).split(" "); // definindo o que seria os argumentos
    let cmd = args.shift().toLowerCase(); // puxando dos args, setaremos que o bot pode responder sim, a comandos com a letra inicial maiuscula

    let command = client.commands.get(cmd) // puxaremos o conteudo de tal comando
  if (command) { // caso o membro utilize um comando inexistente, daremos o erro
    command.run(client, message, args); // essa é a base de todo arquivo js
  } else {
    message.reply(`esse comando não existe.`); // mensagem de comando inexistente
  }
});

client.login(config.token); // puxando o token do nosso bot, dentro do arquivo config.json
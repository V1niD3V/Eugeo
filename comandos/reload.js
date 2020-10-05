exports.run = (client, message, args) => {
    var owner = "553572481441595423"
          if(user.id === owner) return message.reply("apenas o dono do bot pode utilizar o comando!");
          
  if (!args || args.length < 1)
    return message.reply("escreva o comando que deseja dar reload!");

    const commandName = args[0];

    if(!client.commands.has(commandName)) {
      return message.reply("comando inexistente!");
    }

    delete require.cache[require.resolve(`./${commandName}.js`)];

    client.commands.delete(commandName);
    const props = require(`./${commandName}.js`);
    client.commands.set(commandName, props);
    message.reply(`o comando de **${commandName}** foi recarregado com sucesso!`);
};
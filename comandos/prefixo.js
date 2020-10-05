const Discord = require("discord.js");
const fs = require("fs");
 
exports.run = (client, message, args) => {
 
  if(!message.member.hasPermission("MANAGE_SERVER")) return message.reply("Você não tem essa permissão!");
  if(!args[0] || args[0 == "help"]) return message.reply("para trocar de prefixo digite: `h!prefixo <prefixo>`");
 
  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
 
  prefixes[message.guild.id] = {
    prefixes: args[0]
  };
 
  fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
    if (err) console.log(err)
  });
 
  let sEmbed = new Discord.RichEmbed()
  .setColor("36393e")
  .setTitle("Prefixo alterado com sucesso!")
  .setDescription(`O novo prefixo do bot é ${args[0]}`);
 
  message.channel.send(sEmbed);
 
}
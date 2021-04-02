const { Client, Collection } = require("discord.js");
const { MessageEmbed } = require('discord.js');
const { prefix, token } = require("./config.json")
const client = new Client({
    disableEveryone: true
})
const Discord = require("discord.js")

client.commands = new Collection();
client.aliases = new Collection();
client.snipes = new Collection();

["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.once("ready", () => {
    console.log(`${client.user.username} is now online!`)
  client.user.setPresence({
activity: {
name: "play.iodinepvp.com",
type: "STREAMING"
}, 
status: "STREAMING"
})

client.on('guildMemberAdd', async(member) => { // this event gets triggered when a new member joins the server!
  // Firstly we need to define a channel
  // either using .get or .find, in this case im going to use .get()
  const Channel = member.guild.channels.cache.get('826979494703267840') //insert channel id that you want to send to
  //making embed
  const embed = new MessageEmbed()
      .setColor('GREEN')
      .setTitle('New Member')
      .setDescription(`**${member.displayName}** welcome to ${member.guild.name} 
      \n ✏️ INFORMATION 
      
      ｜ Connect » play.iodinepvp.com
      ｜ Store » store.iodinepvp.com
      ｜ Discord » discord.iodinepvp.com
      \n we now have ${member.guild.memberCount} members! `)
  // sends a message to the channel
  Channel.send(embed)
})






})



client.on("message", async message => {
   

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;

    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    let command = client.commands.get(cmd);

    if (!command) command = client.commands.get(client.aliases.get(cmd));


  if (command.clientPerms) {
      const missing = message.channel
        .permissionsFor(client.user)
        .missing(command.clientPerms);
      if (missing.length) {
        message.channel.send(
          `:x: I Do Not Have The Following Permissions:\n\n${missing.map(
            (missingPermission) =>
              `-[${missingPermission
                .replace(/\-|\_/gm, " ")
                .replace(/(\B\w)/gi, (lc) => lc.toLowerCase())}]`
          )}`
        );
        return false;
      }

      
    }

    if (command.userPerms) {
      const missing = message.channel
        .permissionsFor(message.author)
        .missing(command.userPerms);
      if (missing.length) {
        message.channel.send(
          `:x: You're missing the following permissions:\n\n${missing.map(
            (missingPermission) =>
              `-[${missingPermission
                .replace(/\-|\_/gm, " ")
                .replace(/(\B\w)/gi, (lc) => lc.toLowerCase())}]`
          )}`
        );
        return false;
      }
    }
    if (command) 
        command.run(client, message, args);
});


; 

client.login(token);

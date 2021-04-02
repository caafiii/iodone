const { MessageEmbed } = require("discord.js")
module.exports = {
  name: "suggest",
  usage: "suggest <message>",
  description: "Send your Suggestion",
  category: "utility",
  run: async (client, message, args) => {
    
    if(!args.length) {
      return message.channel.send("Please Give the Suggestion")
    }
    
    let channel = message.guild.channels.cache.find((x) => (x.name === "suggestion" || x.name === "suggestions"))
    
    
    if(!channel) {
      return message.channel.send("there is no channel with name - suggestions")
    }
                                                    
    
    let embed = new MessageEmbed()
    .setAuthor("Suggestion: " + message.author.tag, message.author.avatarURL())
    .setThumbnail(client.user.displayAvatarURL({ format: "png" }))
    .setColor("#000000")
    .setDescription(args.join(" "))
    .setTimestamp()
    
    
    channel.send(embed).then(m => {
      m.react("✅")
      m.react("❌")
    })
    

    
    message.channel.send("Sended Your Suggestion")
    
  }
}
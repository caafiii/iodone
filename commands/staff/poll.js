const { MessageEmbed } = require("discord.js")
module.exports = {
  name: "poll",
  usage: "suggest <message>",
  description: "Send your Suggestion",
  category: "utility",
  run: async (client, message, args) => {
    
    if(!args.length) {
      return message.channel.send("Please Give the question")
    }
    
    let channel = message.guild.channels.cache.find((x) => (x.name === "polls" || x.name === "polls"))
    
    
    if(!channel) {
      return message.channel.send("there is no channel with name - polls")
    }
                                                    
    
    let embed = new MessageEmbed()
    .setTitle(" **__New poll__** ")
    .setThumbnail(client.user.displayAvatarURL({ format: "png" }))
    .setColor("#FF69B4")
    .setDescription(args.join(" "))
    .setTimestamp()
    
    
    channel.send(embed).then(m => {
      m.react("✅")
      m.react("❌")
    })
    

    
  
    
  }
}
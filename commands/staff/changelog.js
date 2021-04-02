const { MessageEmbed } = require("discord.js")
module.exports = {
  name: "changelog",
  usage: "changelog <message>",
  description: "Send your Suggestion",
  category: "staff",
  run: async (client, message, args) => {
    
    if(!args.length) {
      return message.channel.send("tell me what u added")
    }
    
    let channel = message.guild.channels.cache.find((x) => (x.name === "｜changelog" || x.name === "｜changelog"))
    
    
    if(!channel) {
      return message.channel.send("there is no channel with name - changelog")
    }
                                                    
    
    let embed = new MessageEmbed()
    .setAuthor("change-log: ")
    .setThumbnail(client.user.displayAvatarURL({ format: "png" }))
    .setColor("#000000")
    .setDescription(args.join(" "))
    .setTimestamp()

    
    
    channel.send(embed).then(m => {
      m.react("")
      m.react("")
    })
    

    
    message.channel.send("changelog added")
    
  }
}
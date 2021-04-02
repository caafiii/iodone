const { MessageEmbed } = require("discord.js")
module.exports = {
  name: "promote",
  usage: "promote <message>",
  description: "Send your Suggestion",
  category: "staff",
  run: async (client, message, args) => {
    
    if(!args.length) {
      return message.channel.send("Please Give the name to promote")
    }
    
    let channel = message.guild.channels.cache.find((x) => (x.name === "promote-demote" || x.name === "promote-demote"))
    
    
    if(!channel) {
      return message.channel.send("there is no channel with name - promote")
    }
                                                    
    
    let embed = new MessageEmbed()
    .setAuthor("promotion: ")
    .setThumbnail(client.user.displayAvatarURL({ format: "png" }))
    .setColor("#000000")
    .setDescription(args.join(" "))
    .setTimestamp()
    
    
    channel.send(embed).then(m => {
      m.react("")
      m.react("")
    })
    

    
    message.channel.send("done!")
    
  }
}
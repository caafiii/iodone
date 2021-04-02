const { MessageEmbed } = require("discord.js")
module.exports = {
  name: "demote",
  usage: "demote <message>",
  description: "Send your Suggestion",
  category: "staff",
  run: async (client, message, args) => {
    
    if(!args.length) {
      return message.channel.send("Please Give the name to demote")
    }
    
    let channel = message.guild.channels.cache.find((x) => (x.name === "promote-demote" || x.name === "promote-demote"))
    
    
    if(!channel) {
      return message.channel.send("there is no channel with name - promote-demote")
    }
                                                    
    
    let embed = new MessageEmbed()
    .setAuthor("demotion: ")
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
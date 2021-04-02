const { MessageEmbed } = require("discord.js")
module.exports = {
  name: "playing",
  usage: "playing <message>",
  description: "Send your Suggestion",
  category: "staff",
  run: async (client, message, args) => {
    
    if(!args.length) {
      return message.channel.send("Please Give the name to add to factions playing")
    }
    
    let channel = message.guild.channels.cache.find((x) => (x.name === "｜factions-playing" || x.name === "｜factions-playing"))
    
    
    if(!channel) {
      return message.channel.send("there is no channel with name - factions-playing")
    }
                                                    
    
    let embed = new MessageEmbed()
    .setTitle("__faction__")
    .setColor("#000000")
    .setDescription(args.join(" "))
    .setFooter(`VoVoWars`, client.user.displayAvatarURL({ format: "png" }))

    
    
    channel.send(embed).then(m => {
      m.react("")
      m.react("")
    })
    

    
    message.channel.send("added the faction to factions playing")
    
  }
}
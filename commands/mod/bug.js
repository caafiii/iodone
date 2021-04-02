const { MessageEmbed } = require("discord.js")
module.exports = {
  name: "bug",
  usage: "bug <message>",
  description: "wadwa",
  category: "moderation",
  run: async (client, message, args) => {
    
    if(!args.length) {
      return message.channel.send("Please tell me the bug")
    }
    
    let channel = message.guild.channels.cache.find((x) => (x.name === "reports" || x.name === "reports"))
    
    
    if(!channel) {
      return message.channel.send("there is no channel with name - reports")
    }
                                                    
    
    let embed = new MessageEmbed()
    .setDescription(" __bug__ ")
    .setColor("#FFC0CB")
    .setDescription(args.join(" "))
    .setTimestamp()
    
    
    channel.send(embed).then(m => {
      m.react("")
      m.react("")
    })

    message.channel.send("Bug will hopefully be fixed asap")
    
  }
}

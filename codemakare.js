const discord = require("discord.js")

const client = new discord.Client({ disableEveryone: true, disabledEvents: ["TYPING_START"] });
const { readdirSync } = require("fs");
const { join } = require("path");
const { PREFIX } = require("./ayarlar.json")


client.on("ready", () => {
  console.log('Şarkı Dinlemeye Hazır')
  client.user.setActivity("Developer: Muzaffer Karaman#1361")
})

client.on("warn", info => console.log(info));

client.on("error", console.error)

client.commands = new discord.Collection()
client.prefix = PREFIX
client.queue = new Map();


const cmdFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"))
for (const file of cmdFiles) {
  const command = require(join(__dirname, "commands", file))
  client.commands.set(command.name, command)
} 


client.on("message", message => {
   if (message.author.bot) return;
  if (!message.guild) return;
  
  if(message.content.startsWith(PREFIX)) {
    
    const args = message.content.slice(PREFIX.length).trim().split(/ +/)
    const command = args.shift().toLowerCase();
    
    if(!client.commands.has(command)) {
      return;
    } 
    
  try  { 
      client.commands.get(command).execute(client, message, args)
    } catch (err) { 
      console.log(err)
      message.reply("Art Arda Çok Fazla Kod Kullandın Bir Süre Beklemelisin")
    }
    
  }
  
  
});

client.login(ayarlar.TOKEN)

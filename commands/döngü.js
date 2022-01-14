module.exports = {
  name: "döngü",
  description: "",
  execute (client, message, args) {
    
    const { channel } = message.member.voice;
    if (!channel) {
  
      return message.channel.send("<a:hata1:831855888007954453> Herhangi bir ses kanalında bulunmalısınız.");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send("<a:hata1:831855888007954453> Döngüye alabileceğim bir şarkı bulamadım.");
    }
    

    serverQueue.loop = !serverQueue.loop
    
    
    
    message.channel.send(`<a:onay4:856597033879601184> Döngü şimdi **${serverQueue.loop ? "Aktif <:aktif:834797656181309440> " : "Deaktif <:ofline:834798088480489542>"}**`)
    
    
    
    
  }
}
//CODEMAKARE SUNUCUSUNA YAPILMIŞTIR
//MUZAFFER KARAMAN TARAFINDAN CODEMAKRE İÇİN YAPILMIŞTIR
//Discorddan Bana Ulaşmak İçin 
//Muzaffer Karaman#1361 
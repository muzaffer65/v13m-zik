module.exports = {
  name: "np",
  description: "send the name of on going song",
  execute (client, message, args) {
    
      const { channel } = message.member.voice;
    if (!channel) {
      
      return message.channel.send("<a:hata1:831855888007954453> Herhangi bir ses kanalında bulunmalısınız.");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send("<a:hata1:831855888007954453> Herhangi bir şarkı oynatmıyorum.");
    }
    
    message.channel.send(serverQueue.songs[0].title + '<a:onay4:856597033879601184>  - Şuanda Oynatılan Şarkı.')

    
    
    
  }
}
//CODEMAKARE SUNUCUSUNA YAPILMIŞTIR
//MUZAFFER KARAMAN TARAFINDAN CODEMAKRE İÇİN YAPILMIŞTIR
//Discorddan Bana Ulaşmak İçin 
//Muzaffer Karaman#1361 
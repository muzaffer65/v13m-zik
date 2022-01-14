module.exports = {
  name: "durdur",
  description: "pause the song",
  execute (client, message, args) {
  const { channel } = message.member.voice;
    if (!channel) {
    
      return message.channel.send("<a:hata1:831855888007954453> Herhangi bir ses kanalında bulunmalısınız.");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send("<a:hata1:831855888007954453> Duraklatabileceğim bir şarkı bulamadım.");
    }
    if(!serverQueue.playing) return message.channel.send('<a:hata1:831855888007954453> Şarkılar Zaten Duraklatılmış.')
    if(serverQueue && serverQueue.playing) {
      serverQueue.playing = false;
      serverQueue.connection.dispatcher.pause(true)
      
      
      return message.channel.send("<a:onay4:856597033879601184>  | Oynatılan şarkı duraklatıldı.")
  }  
  }
}
//CODEMAKARE SUNUCUSUNA YAPILMIŞTIR
//MUZAFFER KARAMAN TARAFINDAN CODEMAKRE İÇİN YAPILMIŞTIR
//Discorddan Bana Ulaşmak İçin 
//Muzaffer Karaman#1361 
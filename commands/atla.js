module.exports = {
  name: "atla",
  description: "Skip the song or shift song to next",
  execute(client, message, args) {
    const { channel } = message.member.voice;

    if (!channel) {
  
      return message.channel.send("<a:hata1:831855888007954453> Herhangi bir ses kanalında bulunmalısınız.");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send("<a:hata1:831855888007954453> Atlayabileceğim bir şarkı yok.");
    }

    serverQueue.connection.dispatcher.end();
    message.channel.send("<a:onay4:856597033879601184>  | Şarkı geçildi.");
  }
};
//CODEMAKARE SUNUCUSUNA YAPILMIŞTIR
//MUZAFFER KARAMAN TARAFINDAN CODEMAKRE İÇİN YAPILMIŞTIR
//Discorddan Bana Ulaşmak İçin 
//Muzaffer Karaman#1361
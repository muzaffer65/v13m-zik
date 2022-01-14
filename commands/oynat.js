const { Util } = require("discord.js");
const { YOUTUBE_API_KEY } = require("../ayarlar.json");
const ytdl = require("ytdl-core");
const YoutubeAPI = require("simple-youtube-api");
const youtube = new YoutubeAPI(YOUTUBE_API_KEY);
const Discord = require('discord.js')
const { play } = require("../system/music.js") 
module.exports = {
  name: "oynat",
  description: "PLAY THE SOFTNESS OF THE SOUND",
  async execute(client, message, args) {

    if (!args.length) {

      return message.channel.send(":x: **|** Lütfen Müzik İsmi Giriniz!");
    }

    const { channel } = message.member.voice;
    if (!channel) {
      
      return message.channel.send("<a:hata1:831855888007954453> Herhangi bir ses kanalında bulunmalısınız.");
    }



    const targetsong = args.join(" ");
    const videoPattern = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/gi;
    const playlistPattern = /^.*(youtu.be\/|list=)([^#\&\?]*).*/gi;
    const urlcheck = videoPattern.test(args[0]);

    if (!videoPattern.test(args[0]) && playlistPattern.test(args[0])) {
      return message.channel.send("<a:hata1:831855888007954453> Oynatma listesi oynatılamıyor.");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    const queueConstruct = {
      textChannel: message.channel,
      channel,
      connection: null,
      songs: [],
      loop: false,
      volume: 100,
      playing: true
    };

    let songData = null;
    let song = null;

    if (urlcheck) {
      try {
         
         const result = await youtube.searchVideos(args[0], 1)
         if(!result[0]) return message.channel.send(':x: Bu linkde bir şarkı bulamadım')
        songData = await ytdl.getInfo(result[0].url,{});
       
        console.log(songData)
        song = {
           title: songData.videoDetails.title,
           url: songData.videoDetails.video_url,
           duration: songData.videoDetails.lengthSeconds,
           thumbnail : songData.videoDetails.thumbnail.thumbnails[0].url,
           author : songData.videoDetails.author.name,
           wiews : songData.videoDetails.viewCount,
          likes : {
          trues : songData.videoDetails.likes.toLocaleString(),
          falses :songData.videoDetails.dislikes.toLocaleString()
         }
        };
   

      } catch (error) {
        if (message.include === "copyright") {
          return message
            .reply(":x: Bu video telif hakları nedeni ile oynatılamıyor.")
            .catch(console.error);
        } else {
          console.error(error);
        }
      }
    } else {
      try {
         const result = await youtube.searchVideos(targetsong, 1)
        if(!result[0]) return message.channel.send(':x: arama Sonucu Bulunamadı.')
        songData = await ytdl.getInfo(result[0].url)
         song = {
           title: songData.videoDetails.title,
           url: songData.videoDetails.video_url,
           duration: songData.videoDetails.lengthSeconds,
           thumbnail : songData.videoDetails.thumbnail.thumbnails[0].url,
           author : songData.videoDetails.author.name,
           wiews : songData.videoDetails.viewCount,
          likes : {
          trues : songData.videoDetails.likes.toLocaleString(),
        
         }
  
        };

      } catch (error) {
        console.error(error)
      }
    }
    
    if(serverQueue) {
      serverQueue.songs.push(song)
      return serverQueue.textChannel.send( new Discord.MessageEmbed()
        .setAuthor('<a:onay4:856597033879601184> Sıraya Eklendi!')
        .setTitle(song.title)
        .setURL(song.url)
        .setThumbnail(song.thumbnail)
        .addField('▶ kanal',song.author,true)
        .addField('▶ Süre Saniye',song.duration,true)
        .addField('▶ İzlenme Sayısı',song.wiews.toLocaleString(),true)
        .addField('▶',song.likes.trues,true)
        .addField('▶',song.likes.falses,true))
      .catch(console.error)
    } else {
      queueConstruct.songs.push(song);
    }
    //CODEMAKARE SUNUCUSUNA YAPILMIŞTIR
//MUZAFFER KARAMAN TARAFINDAN CODEMAKRE İÇİN YAPILMIŞTIR
//Discorddan Bana Ulaşmak İçin 
//Muzaffer Karaman#1361 
    if(!serverQueue) message.client.queue.set(message.guild.id, queueConstruct)
    
     if (!serverQueue) {
      try {
    
        queueConstruct.connection = await channel.join();
        play(song, message)
      } catch (error) {
        console.error(`Could not join voice channel: ${error}`);
        message.client.queue.delete(message.guild.id);
        await channel.leave();
        return message.channel.send({embed: {"description": `<a:hata1:831855888007954453> Kanala giriş yapamıyorum.: ${error}`, "color": "#ff2050"}}).catch(console.error);
      }
    }
    
    
  }
};
  
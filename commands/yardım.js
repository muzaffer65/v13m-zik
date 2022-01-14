const Discord = require('discord.js')
const {PREFIX} = require('../ayarlar.json')
module.exports = {
  name: "yardım",
  description: "yardım",
  execute(client, message) {
  message.channel.send(new Discord.MessageEmbed()
.setColor("01")
.setAuthor("Müzik Komutları")                      
.setDescription(
    `
<a:gster1:831857087901335594> \`${PREFIX}oynat şarkı adı\` : **Bir Şarkıyı Oynatır.**
<a:gster1:831857087901335594> \`${PREFIX}atla\` : **Sıradaki Şarkıyı atlar.**
<a:gster1:831857087901335594> \`${PREFIX}döngü\` : **O Anki Şarkıyı Hep tekrarlar.**
<a:gster1:831857087901335594> \`${PREFIX}durdur\` : **O anki Şarkıyı Durdurur.**
<a:gster1:831857087901335594> \`${PREFIX}devam\` : **Duran Şarkıyı Devam Ettirir.**
<a:gster1:831857087901335594> \`${PREFIX}sıra\` : **O Anki Sırayı Gösterir.**
<a:gster1:831857087901335594> \`${PREFIX}np\` : **O Anki Oynatılan Şarkıyı Söyler.**
<a:gster1:831857087901335594> [**Beni Davet Et**](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8)
<a:gster1:831857087901335594> [**Destek Sunucum**](https://discord.gg/DZwGjvnezn)
<a:gster1:831857087901335594> [**Oy Ver**](https://top.gg/bot/720185734916735026/vote)

`)
.setFooter(`Muzaffer Karaman Tarafından Yapılmıştır`)
                      )    
}
}
//CODEMAKARE SUNUCUSUNA YAPILMIŞTIR
//MUZAFFER KARAMAN TARAFINDAN CODEMAKRE İÇİN YAPILMIŞTIR
//Discorddan Bana Ulaşmak İçin 
//Muzaffer Karaman#1361 
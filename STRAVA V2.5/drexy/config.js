const fs = require('fs')
const chalk = require('chalk')

// ganti info bot dibawah ini
global.botName = "𝐃𝐑𝐄𝐗 𝐁𝐎𝐓"
global.ownerName = "𝐃𝚺𝐕𝐈𝐋 𝐃𝐑𝚺𝐗"
global.ownerBot = "254102074064"
global.ownerNumber = ["254102074064"] 

global.Auto_Typing = true // auto typing
global.Auto_Recording = true // auto recording
global.Auto_ReadPesan = true // auto read messages

// Auto Downloader Tiktok
global.TiktokAutoDownload = true

// Admin Create Panel
global.domain = "https://example.id" // Ganti Domain Lu
global.key_plta = "-" // Isi Apikey Plta Lu
global.key_pltc = "-" // Isi Apikey Pltc Lu
global.nama_host = "mods" // Ganti Nama Store Atau nama Host Lu
global.locID = '1'
global.eggID = '15'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
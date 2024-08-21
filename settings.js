//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs')
const chalk = require('chalk')

//session
global.sessionid =''

//owmner v card
global.ytname = "YT: King" //ur yt chanel name
global.socialm = "GitHub: DGXeon" //ur github or insta name
global.location = "India, Mizoram, Aizawl" //ur location

//new
global.botname = '✪⏤͟͞★⃝ꪶ𝙆𝙞𝙣𝙜 𝘼𝙣𝙤𝙣𝙮𝙢𝙤𝙪𝙨👑➺' //ur bot name
global.ownernumber = '923277217945' //ur owner number
global.ownername = '🦄드림 가이 Xeon' //ur owner name
global.websitex = "https://www.instagram.com/no.pm6?igsh=eWVyZjR5N2RlZWM2"
global.wagc = "https://www.instagram.com/no.pm6?igsh=eWVyZjR5N2RlZWM2"
global.themeemoji = '🪀'
global.wm = "✪⏤͟͞★⃝ꪶ𝙆𝙞𝙣𝙜 𝘼𝙣𝙤𝙣𝙮𝙢𝙤𝙪𝙨👑➺"
global.botscript = 'https://github.com/DGXeon/CheemsBot-MD11' //script link
global.packname = "Sticker By"
global.author = "🦄✪⏤͟͞★⃝ꪶ𝙆𝙞𝙣𝙜 𝘼𝙣𝙤𝙣𝙮𝙢𝙤𝙪𝙨👑➺\n\n+923277217945"
global.creator = "923277217945@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["923277217945"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '91' //set autoblock country code
global.antiforeignnumber = '92' //set anti foreign number country code
global.welcome = true //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = false //auto status/story view
global.adminevent = true  //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})

/** 

Yg Mau Sv Nomerku?

wa.me/6285854337533

Minimal Kasih Cr kalo mau reupload😡
Create By Dika Ardnt.
Recode By Xynels

Kalau Sampai Ketemu Lagi Creator Bot
Yg Reupload Tanpa Kasih Cr 
Sc Akan Saya Encode

Base : Hisoka
Recode : Xynels

**/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '0e92565522',
}

// Other
global.owner = ['6285854337533']
global.ownernomer = "6285854337533"
global.premium = ['6285854337533']
global.packname = 'ꪶ᭢ιиfιиєℓʂꪶ᭢'
global.author = '© 𝘽𝙮 𝙓𝙮𝙣𝙚𝙡𝙨 '
global.sessionName = 'nazedev'  //jangan diganti bro nanti error
global.jumlha = '999'
global.jumhal = '100000000000000'
global.jumlah = '1000000000'
global.prefa = ['','!','.','#','&']
global.sp = ''
global.mess = {
    success: '✅𝙳𝚘𝚗𝚎',
    admin: '𝙵𝚒𝚝𝚞𝚛 𝙺𝚑𝚞𝚜𝚞𝚜 𝙰𝚍𝚖𝚒𝚗 𝙶𝚛𝚘𝚞𝚙!',
    botAdmin: '𝙱𝚘𝚝 𝙷𝚊𝚛𝚞𝚜 𝙼𝚎𝚗𝚓𝚊𝚍𝚒 𝙰𝚍𝚖𝚒𝚗 𝚃𝚎𝚛𝚕𝚎𝚋𝚒𝚑 𝙳𝚊𝚑𝚞𝚕𝚞!',
    premime: '𝙵𝚒𝚝𝚞𝚛 𝙺𝚑𝚞𝚜𝚞𝚜 𝙿𝚛𝚎𝚖𝚒𝚞𝚖 𝙺𝚊𝚕𝚘 𝙼𝚊𝚞 𝙳𝚊𝚏𝚝𝚊𝚛 𝙺𝚎𝚝𝚒𝚔 𝚂𝚎𝚠𝚊',
    owner: '𝙵𝚒𝚝𝚞𝚛 𝙺𝚑𝚞𝚜𝚞𝚜 𝙾𝚠𝚗𝚎𝚛 𝙱𝚘𝚝',
    group: '𝙵𝚒𝚝𝚞𝚛 𝙳𝚒𝚐𝚞𝚗𝚊𝚔𝚊𝚗 𝙷𝚊𝚗𝚢𝚊 𝚄𝚗𝚝𝚞𝚔 𝙶𝚛𝚘𝚞𝚙!',
    private: '𝙵𝚒𝚝𝚞𝚛 𝙳𝚒𝚐𝚞𝚗𝚊𝚔𝚊𝚗 𝙷𝚊𝚗𝚢𝚊 𝚄𝚗𝚝𝚞𝚔 𝙿𝚛𝚒𝚟𝚊𝚝𝚎 𝙲𝚑𝚊𝚝!',
    bot: '𝙵𝚒𝚝𝚞𝚛 𝙺𝚑𝚞𝚜𝚞𝚜 𝙿𝚎𝚗𝚐𝚐𝚞𝚗𝚊 𝙽𝚘𝚖𝚘𝚛 𝙱𝚘𝚝',
    wait: '𝙻𝚘𝚊𝚍𝚒𝚗𝚐 ...',
    errapi: '𝙴𝚛𝚛𝚘𝚛 𝙰𝚙𝚒𝚔𝚎𝚢 𝚃𝚒𝚍𝚊𝚔 𝚅𝚊𝚕𝚒𝚍!',
    errmor: '𝙴𝚛𝚛𝚘𝚛 𝙺𝚎𝚜𝚊𝚕𝚊𝚑𝚊𝚗 𝚂𝚒𝚜𝚝𝚎𝚖',
    endLimit: '𝙻𝚒𝚖𝚒𝚝 𝙷𝚊𝚛𝚒𝚊𝚗 𝙰𝚗𝚍𝚊 𝚃𝚎𝚕𝚊𝚑 𝙷𝚊𝚋𝚒𝚜, 𝙻𝚒𝚖𝚒𝚝 𝙰𝚔𝚊𝚗 𝙳𝚒𝚛𝚎𝚜𝚎𝚝 𝚂𝚎𝚝𝚒𝚊𝚙 𝙹𝚊𝚖 𝟷𝟸',
}
global.limitawal = {
    premium: "Infinity",
    free: 25
}
global.thumb = fs.readFileSync('./media/image/naze.jpg')
global.faall = fs.readFileSync('./media/image/fake.jpg')
global.mygit = 'https://github.com/nazedev'
global.myyt = 'https://youtube.com/c/Nazedev'
global.myytv = 'https://youtu.be/ey7qLuRBm5Y'
global.mygc = "https://chat.whatsapp.com/Khpnk6svwIhCIvx91Xi0Vf"
global.botname = 'ꪶ᭢ ‹ ιиfιиєℓʂ › ꪶ᭢'
global.akulaku = 'Bot By Xynels'
global.ytname = 'YT XYNELS DESIGN'


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

const fs = require('fs')
const chalk = require('chalk')

global.APIs = {
	webnya: 'https://api.lolhuman.xyz',
}

global.APIKeys = {
	'https://api.lolhuman.xyz': 'RINTISAJA',
}

global.owner = ['6283842873526']
global.premium = ['6283842873526']
global.packname = 'By'
global.author = 'XeidBot'
global.sessionName = 'xeidbot'
global.namabotnya = 'XeidBot'
global.namaownernya = 'Alfa'
global.lolkey = 'RINTISAJA'
global.wame = 'https://wa.me/6283842873526'
global.gckirbotz = 'https://chat.whatsapp.com/IifAj0ieFe34jVJf4JLxuy'
global.ownerNumber = ["6283842873526@s.whatsapp.net"]
global.email = 'jyuchen10@gmail.com'
global.yt = 'https://youtube.com/channel/UC7QmtYRXkIWObwWrDyvKcRA'
global.region = 'Indonesia'
global.prefa = ['','!','.','#','-','•']
global.sp = '⤷'
global.ya = '```'
global.mess = {
    success: 'Success',
    admin: 'Fitur Khusus Admin Group!!!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!!!',
    owner: 'Fitur Khusus Owner Bot!!!',
    group: 'Fitur Digunakan Hanya Untuk Group!!!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!!!',
    bot: 'Fitur Khusus Pengguna Nomor Bot!!!',
    error: 'Error Bang Silahkan Chat Owner',
    wait: 'Tunggu Bentar,Turu Ah',
    noPetualang: 'Itssss Kamu Belum Jadi Member Petualang, Silahkan Ketik .joinrpg <namamu>',
    endLimit: 'Limit Harian Lu Abis, Limit Bakal Direset Setiap Jam 12',
    premium: 'Maaf Sebelumya Kamu Belum Premium, Silahkan Pencet Di Bawah Untuk Beli Premium',
    wrongFormat: 'Format salah, coba liat lagi di menu',
}


global.limitawal = {
    premium: "Infinity",
    free: 15
}


global.thumb = fs.readFileSync('./Image/kirbotz.jpg')
global.thumbrpg = fs.readFileSync('./Image/kirbotzrpg.jpg')
global.imgjoinrpg = fs.readFileSync('./Image/joinrpg.jpg')
global.imgmining = fs.readFileSync('./Image/mining.jpg')

global.imgdevil = fs.readFileSync('./Image/img/devil.jpg')
global.imgslime = fs.readFileSync('./Image/img/slime.jpg')
global.imgdemon = fs.readFileSync('./Image/img/demon.jpg')
global.imggoblin = fs.readFileSync('./Image/img/goblin.jpg')
global.imgdemonking = fs.readFileSync('./Image/img/demonking.jpg')
global.imgbehemoth = fs.readFileSync('./Image/img/behemoth.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

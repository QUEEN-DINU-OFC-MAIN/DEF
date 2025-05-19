const fs = require('fs');
const chalk = require('chalk');
const { version } = require("./package.json")

// Settings Bot 
global.owner = '6282261639578'
global.versi = version
global.namaOwner = "Ayame Senpai"
global.packname = 'Bot WhatsApp By Ayame'
global.botname = 'Elaina Bot'
global.botname2 = 'Bot Ayame Senpai'

global.tempatDB = 'database.json' // Jangan ubah
global.pairing_code = true // Jangan ubah

// Settings Link / Tautan
global.linkOwner = "https://wa.me/6282261639578"
global.linkGrup = "https://chat.whatsapp.com/KdfviO75ebv0F5YkHDLbqi"

// Delay Jpm & Pushctc || 1000 = 1detik
global.delayJpm = 3000
global.delayPushkontak = 6000

// Settings Channel / Saluran
global.linkSaluran = "https://whatsapp.com/channel/0029VarFmXW4Spk7e033IG0W"
global.idSaluran = "120363345772469517@newsletter"
global.namaSaluran = "Elaina Bot [ Informasi ]"

// Tutorial Ngocok Orkut :
// * Ke CS Orkut @orderkuota 
// Teks :Kak bisa tolong buatin akun H2H kak? 
// Ntar disuruh menuliskan nama dan nomer akun orkut lu
//* klau udh di ksih pencet link okeconnect.com
//* login okeconnect.com
//* klik pojok kanan atas (garis tiga) 
//* klik Payment H2H
//* klik integrasi API
//* jadi deh Api orkut mu
//* yang qris ke website : https://scanqr.org
//Kamu upload gambar qris orderkuota mu 
//Ntar ada semacam nomer/api
//Note :
//Qris orkut wajib kecetak
// Info : https://whatsapp.com/channel/0029VakRR89L7UVPwf53TB0v/2682
global.pinH2H = "-"
global.passwordH2H = "-"
global.merchantIdOrderKuota = "OK1916757"
global.apiOrderKuota = "508792517380208121916757OKCT388147E784BC65D0E9D0735EB0C39FB5"
global.qrisOrderKuota = "00020101021126670016COM.NOBUBANK.WWW01189360050300000879140214850085847188690303UMI51440014ID.CO.QRIS.WWW0215ID20243345542820303UMI5204541153033605802ID5920BIYU STORE OK19167576008MAGELANG61055611162070703A016304FB3C"

// Settings Api Digital Ocean
global.apiDigitalOcean = "-"

// Settings Api Digital Ocean
global.apiSimpelBot = "simplebotz85"


// Settings All Payment
global.shopepay = "Tidak Tersedia"
global.dana = "0895640071400"
global.ovo = "Tidak Tersedia"
global.gopay = "0895640071400"

// Settings Image Url
global.image = {
menu: "https://files.catbox.moe/2crtps.jpeg", 
reply: "https://files.catbox.moe/9rvct1.jpeg", 
logo: "https://img102.pixhost.to/images/79/556578143_biyu.jpg", 
dana: "https://img102.pixhost.to/images/79/556578147_biyu.jpg", 
ovo: "https://img102.pixhost.to/images/79/556578147_biyu.jpg", 
gopay: "https://img102.pixhost.to/images/79/556578147_biyu.jpg", 
qris: "https://img102.pixhost.to/images/79/556578147_biyu.jpg"
}

// Settings Api Panel Pterodactyl
global.egg = "15" // Egg ID
global.nestid = "5" // nest ID
global.loc = "1" // Location ID
global.domain = "https://-"
global.apikey = "-" //ptla
global.capikey = "-" //ptlc

// Settings Api Panel Pterodactyl Server 2
global.eggV2 = "15" // Egg ID
global.nestidV2 = "5" // nest ID
global.locV2 = "1" // Location ID
global.domainV2 = "https://-"
global.apikeyV2 = "-" //ptla
global.capikeyV2 = "-" //ptlc

// Settings Api Subdomain
global.subdomain = {
"privatehost.us.kg": {
"zone": "790918217c4add75b7684458518c5836", 
"apitoken": "qYv4NvEN6ZcUIv4dEXihjkmQMwbP_-3Qy_zFlAHv"
}, 
"botwhatsapp.us.kg": {
"zone": "fb1ac418c5564373a56c91d962b30dca", 
"apitoken": "rfQih0XNXiq7AyEuDoLjoFfHX2mhYf_9kddAdKIo"
}, 
"skyzopedia.us.kg": {
"zone": "9e4e70b438a65c1d3e6d0e48b82d79de", 
"apitoken": "odilM9DpvLVPodbPyZwW7UcDKg1aIWsivJc0Vt_o"
}, 
"marketplace.us.kg": {
"zone": "2f33118c3db00b12c38d07cf1c823ed1", 
"apitoken": "6WS_Op6yuPOWcO17NiO-sOP8Vq9tjSAFZyAn82db"
}, 
"pteroserver.us.kg": {
"zone": "f693559a94aebc553a68c27a3ffe3b55", 
"apitoken": "ZPAXx7CL51PtbGweL2pE3BsI3x0hgTgLuy56iXuo"
}, 
"serverku.biz.id": {
"zone": "4e4feaba70b41ed78295d2dcc090dd3a", 
"apitoken": "oof_QRNdUC4aMQ3xIB8dmkGaZu7rk2J-0P_tN55l"
}, 
"privatserver.my.id": {
"zone": "699bb9eb65046a886399c91daacb1968", 
"apitoken": "CrQMyDn2fhchlGne2ogAw7PvJLsg4x8vasBv__6D"
}, 
"panelwebsite.biz.id": {
"zone": "2d6aab40136299392d66eed44a7b1122", 
"apitoken": "cj17Lzg9otqwkYIVzgL0pcVA4GfcXqePHAOhCqa_"
}, 
"mypanelstore.web.id": {
"zone": "c61c442d70392500611499c5af816532", 
"apitoken": "N_VhWv2ZK6UJxLdCnxMfZx9PtzAdmPGM3HmOjZR4"
}, 
"pteroserver.us.kg": {
"zone": "f693559a94aebc553a68c27a3ffe3b55", 
"apitoken": "qRxwgS3Kl_ziCXti2p4BHbWTvGUYzAuYmVM28ZEp"
}, 
"digitalserver.us.kg": {
"zone": "df13e6e4faa4de9edaeb8e1f05cf1a36", 
"apitoken": "sH60tbg10UH8gpNrlYpf3UMse1CNJ01EKJ69YVqb"
}, 
"biyu-offc.biz.id": {
"zone": "486604cbd7c410b1d883ce35da2d95f6", 
"apitoken": "dQ-ngEWnm19tYkh5AwZa2jCmCkE7cXyuCDSuEdMR"
}, 
"biyu.biz.id": {
"zone": "c2fe010b63d4c0d309577fc9bd6f9c1f", 
"apitoken": "2SoTGasHWwiuKAnlDA_4a3_m2aGTmZkumFLPPXu4"
}, 
"devzzhosting.my.id": {
"zone": "f994c2f66ea24d81ea5f4a17a57a725f", 
"apitoken": "AqzTJ13YE2ZxmKXdBP4imLhFMFPjN8VUt9mpbTGq"
}
}

// Message Command 
global.mess = {
	owner: "* *Akses Ditolak*\nFitur ini hanya untuk owner bot!",
	admin: "* *Akses Ditolak*\nFitur ini hanya untuk admin grup!",
	botAdmin: "* *Akses Ditolak*\nFitur ini hanya untuk ketika bot menjadi admin!",
	group: "* *Akses Ditolak*\nFitur ini hanya untuk dalam grup!",
	private: "* *Akses Ditolak*\nFitur ini hanya untuk dalam private chat!",
	prem: "* *Akses Ditolak*\nFitur ini hanya untuk user premium!",
	wait: 'Loading...',
	error: 'Error!',
	done: 'Done'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
const {
    WAConnection,
	MessageType,
	Presence,
	MessageOptions,
	Mimetype,
	WALocationMessage,
	WA_MESSAGE_STUB_TYPES,
	WA_DEFAULT_EPHEMERAL,
	ReconnectMode,
	ProxyAgent,
	ChatModification,
	GroupSettingChange,
	waChatKey,
	mentionedJid,
	processTime,
	Browsers,
} = require("@adiwajshing/baileys")
const moment = require("moment-timezone")
const speed = require('performance-now')
const { spawn, exec, execSync } = require("child_process")
const ffmpeg = require('fluent-ffmpeg')
const twitterGetUrl = require("twitter-url-direct")
const brainly = require('brainly-scraper')
const translate = require("@vitalets/google-translate-api");
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const Math_js = require('mathjs')
const _gis = require('g-i-s')
const fetch = require('node-fetch');
const request = require('request');
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const axios = require("axios")
const fs = require("fs-extra")
const crypto = require('crypto')
const { promisify, util } = require('util')
const qrcodes = require('qrcode');
const googleIt = require('google-it')
const os = require('os');
const hx = require('hxz-api')

const { Menu, rulesBot } = require('./message/help.js')
const { getBuffer, getGroupAdmins, generateMessageID, getRandom, runtime, pickRandom, sleep } = require('./lib/myfunc')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetch')
const { color, bgcolor } = require('./lib/color')
const { mess } = require('./message/mess')
const { Toxic } = require('./lib/Toxic.js')
const { cmdadd } = require('./lib/totalcmd.js')
const { uptotele, uploadFile, RESTfulAPI, uploadImages } = require('./lib/uploadimage')
const { lirikLagu} = require('./lib/lirik.js')
const { mediafireDl } = require('./lib/mediafire.js')
const { webp2gifFile, igDownloader, TiktokDownloader } = require("./lib/gif.js")
const { y2mateA, y2mateV } = require('./lib/y2mate')
const { webp2mp4File } = require('./lib/webp2mp4')
const { jadibot, stopjadibot, listjadibot } = require('./lib/jadibot')
const truth = JSON.parse(fs.readFileSync('./database/truth.json'))
const dare = JSON.parse(fs.readFileSync('./database/dare.json'))
const atm = require("./lib/atm");
const level = require("./lib/level");
const afk = JSON.parse(fs.readFileSync('./lib/off.json'))
const { isAfk, cekafk, addafk } = require('./lib/offline')
const voting = JSON.parse(fs.readFileSync('./lib/voting.json'))
const { addVote, delVote } = require('./lib/vote')
const a = '‣'

hit_today = []
banChats = false
offline = false
typemenu = 'templateLocation'

let fakeimage = fs.readFileSync("./media/wpmobile.jpg")
let setting = JSON.parse(fs.readFileSync('./setting.json'))


prefix = setting.prefix
owner = setting.owner
lolkey = setting.lolkey
ownerName = setting.ownerName
fake = setting.fake
autorespon = false
waktu = '-'
alasan = '-'
ky_ttt = []
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
cmhit = []

const Exif = require('./lib/exif')
const exif = new Exif()

// Database
let register = JSON.parse(fs.readFileSync('./database/register.json'))
let _scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
let config 
let _leveling = JSON.parse(fs.readFileSync('./database/leveling.json'))
let _level = JSON.parse(fs.readFileSync('./database/level.json'))
let _uang = JSON.parse(fs.readFileSync('./database/uang.json'))
let antilink = JSON.parse(fs.readFileSync('./database/antilink.json'));
const mute = JSON.parse(fs.readFileSync('./database/mute.json'))
const setik = JSON.parse(fs.readFileSync('./database/setik.json'))
const  vien = JSON.parse(fs.readFileSync('./database/vien.json'))
const  imagi = JSON.parse(fs.readFileSync('./database/imagi.json'))
const  videonye = JSON.parse(fs.readFileSync('./database/video.json'))
const autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'))
const kickarea = JSON.parse(fs.readFileSync('./database/kickarea.json'))
const _user = JSON.parse(fs.readFileSync('./database/user.json'))
const _registered = JSON.parse(fs.readFileSync('./database/registered.json'))


const tescuk = ["0@s.whatsapp.net"]
const ini_mark = `0@s.whatsapp.net`



// Sticker Cmd
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    _scommand.push(obj)
    fs.writeFileSync('./database/scommand.json', JSON.stringify(_scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return _scommand[position].chats
    }
}


const checkSCommand = (id) => {
    let status = false
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            status = true
        }
    })
    return status
}
module.exports = m = async (m) => {
	try {
if (m.key.remoteJid == 'status@broadcast') return
if (!m.key.fromMe && m.key.fromMe) return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
const jamu = moment.tz('Asia/Kolkata').format('HH:mm:ss')
let d = new Date
let locale = 'id'
const gmtu = new Date(0).getTime() - new Date('1 Januari 2006').getTime()
const wetonj = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
const weeku = d.toLocaleDateString(locale, { weekday: 'long' })
const calenderh = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let keynye = m.key
let c = bosco.chats.get(keynye.remoteJid)
let a = c.messages.dict[`${keynye.id}|${keynye.fromMe ? 1: 0}`]
let contennye = bosco.generateForwardMessageContent(a, false)
} catch {
}
}

			
module.exports = bosco = async (bosco, mek) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
		global.prefix
		mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment().tz('Asia/Kolkata').format('HH:mm:ss')
		const wib = moment.tz('Asia/Kolkata').format('HH:mm:ss')
		const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const type = Object.keys(mek.message)[0]        
		const antibot = m.isBaileys
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(mek.message[type].fileSha256.toString('base64')) !== null && getCmd(mek.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message[type].fileSha256.toString('base64')) : ""
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		const args = body.trim().split(/ +/).slice(1)
		hit_today.push(command)
		const arg = body.substring(body.indexOf(' ') + 1)
		const ar = args.map((v) => v.toLowerCase())
		const argz = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix) 
		if (isCmd) cmdadd()
		const totalhit = JSON.parse(fs.readFileSync('./database/totalcmd.json'))[0].totalcmd
        const q = args.join(' ')
        const c = args.join(' ')
        

        const botNumber = bosco.user.jid
        const ownerNumber = setting.ownerNumber
		const ownerName = setting.ownerName
		const botName = setting.botName
		
	    // TAURUS ADDED API KEY
		HunterApi = setting.HunterApi
		
		const isGroup = from.endsWith('@g.us')
		const sender = mek.key.fromMe ? bosco.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		isStc = Object.keys(mek.message)[0] == "stickerMessage" ? mek.message.stickerMessage.fileSha256.toString('hex') : ""
	    isStc = `${isStc}`
        const isStcQ = isStc !== "" && content.includes("extendedTextMessage") ||
        isStc !== "" && content.includes("conversation")
	    const isStcMedia = isStc !== "" && content.includes("quotedMessage") && !content.includes("extendedTextMessage") || isStc !== "" && content.includes("quotedMessage") && !content.includes("conversation")
	    const isStcVideo = isStcMedia && content.includes("videoMessage")
	    const isStcImage = isStcMedia && content.includes("imageMessage")
	    const isStcSticker = isStcMedia && content.includes("stickerMessage")
        const isStcTeks = isStcMedia && content.includes("quotedMessage")
        const isStcDocs = isStcMedia && content.includes("documentMessage")
        const isStcContact = isStcMedia && content.includes("contactMessage")
        const isStcAudio = isStcMedia && content.includes("audioMessage")
        const isStcLoca = isStcMedia && content.includes("locationMessage")
        const isStcTag = isStcMedia && content.includes("mentionedJid")
        const isStcReply = isStcMedia && content.includes("Message")
        const isStcProd = isStcMedia && content.includes("productMessage")
		const groupMetadata = isGroup ? await bosco.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
        const conts = mek.key.fromMe ? bosco.user.jid : bosco.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? bosco.user.name : conts.notify || conts.vname || conts.name || '-'
        const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByreply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByreply) : []
        const mentionUser = mention != undefined ? mention.filter(n => n) : []
		const dfrply = fs.readFileSync('./ds.jpg')
		const frply = fs.readFileSync('./ds.jpg')
		const url1 = 'https://www.linkpicture.com/q/20220129_205836_11zon.jpeg'
		const url2 = 'https://www.linkpicture.com/q/20220129_201220_11zon.jpeg'
		const pfrply = fs.readFileSync('./taurus.mp4')
		const atibot = m.isBaileys
		const fakeTaurus = fs.readFileSync ('./media/banner.jpg')
		const buff1 = await getBuffer(url1)
        const buff9 = await getBuffer(url2)
		const isRegister = register.includes(sender)
        const isOwner = ownerNumber.includes(sender)
        const isKickArea = isGroup ? kickarea.includes(from) : false
        const isAntiLink = isGroup ? antilink.includes(from) : false
        const isLevelingOn = isGroup ? _leveling.includes(from) : false
        const isMuted = isGroup ? mute.includes(from) : false
        const isAuto = isGroup ? autosticker.includes(from) : false
        const isVote = isGroup ? voting.includes(from) : false
        let bio_nya = await bosco.getStatus(sender)
		try {
			bio_user = `${bio_nya.status}`
		} catch {
			bio_user = '-'
			}
       
      
     
     const getRegisteredRandomId = () => {
return _registered[Math.floor(Math.random() * _registered.length)].id
}
const addRegisteredUser = (userid, sender, age, time, serials) => {
const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
_registered.push(obj)
fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
}
const checkRegisteredUser = (sender) => {
let status = false
Object.keys(_registered).forEach((i) => {
if (_registered[i].id === sender) {
status = true
}
})
return status
}
const cekUser = (sender) => {
	let status = false
	Object.keys(_user).forEach((i) => {
		if (_user[i].id === sender) {
			status = true
			}
			})
			return status
			}
			const isUser = cekUser(sender)
			
const isRegistered = checkRegisteredUser(sender)

const sendButRegis = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
};
bosco.sendMessage(
id,
buttonMessage,
MessageType.buttonsMessage,
options
);
};

const daftar1 = `*Hai kak  ${pushname} 👋*\n\n*Sebelum Mengakses Bot Silahkan Daftar Terlebih Dahulu Ya*`
const daftar2 = '```Ketik #daftar Atau Klik Tombol Di Bawah Untuk Verify Kak```'
const daftar3 = [{buttonId: `${prefix}verify`,buttonText: {displayText: `🥀 VERIFY 🥀 `,},type: 1,},]

const sendButPrem = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
};
bosco.sendMessage(
id,
buttonMessage,
MessageType.buttonsMessage,
options
);
};

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}



        // here button function
        selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''

        responseButton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
        
        if (antibot === true) return
		const catl = (teks) => {
             res = bosco.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 400, "message": teks, "footerText": "*Taurus Ser*", "thumbnail": dfrply, "surface": 'CATALOG' }}, {quoted:ftroli})
             bosco.relayWAMessage(res)
        }
       const catlo = (teks) => {
             res = bosco.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 70000, "message": teks, "footerText": "Made With Taurus", thumbnail: fs.readFileSync('./ds.jpg'), "surface": 'CATALOG' }}, {quoted:ftroli})
             bosco.relayWAMessage(res)
        }
        const grupinv = (teks) => {
        	grup = bosco.prepareMessageFromContent(from, { "groupInviteMessage": { "groupJid": '6288213840883-1616169743@g.us', "inviteCode": 'https://chat.whatsapp.com/BzhyWkAEU0t8oVl3s8p94m', "groupName": `Bosco Family`, "footerText": "*Taurus Ser*", "jpegThumbnail": dfrply, "caption": teks}}, {quoted:fvideo})
            bosco.relayWAMessage(grup)
        }
        idttt = []
	    players1 = []
	    players2 = []
	    gilir = []
	    for (let t of ky_ttt){
	    idttt.push(t.id)
	    players1.push(t.player1)
	    players2.push(t.player2)
	    gilir.push(t.gilir)
	    }
        const isTTT = isGroup ? idttt.includes(from) : false
	    isPlayer1 = isGroup ? players1.includes(sender) : false
        isPlayer2 = isGroup ? players2.includes(sender) : false
        try {
		pporang = await bosco.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		      } catch {
		pporang = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		      }
		const taurus = await getBuffer(pporang)
		const ofrply = await getBuffer(pporang)
		
		        
        const isUrl = (url) => {
            return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
        }
        function monospace(string) {
            return '```' + string + '```'
        }   
        function jsonformat(string) {
            return JSON.stringify(string, null, 2)
        }
        function randomNomor(angka){
            return Math.floor(Math.random() * angka) + 1
        }
        const reply = (teks) => {
	      bosco.sendMessage(from, teks, text, { thumbnail: taurus, sendEphemeral: true, quoted: ftroli, contextInfo: { forwardingScore: 508, isForwarded: false, "externalAdReply": { "title": `${''}*𝖙𝖆𝖚𝖗𝖚𝖘-𝖝³*${''}${''}`, "body": `ɢʀᴏᴜᴘ ᴀssɪsᴛᴇɴᴛ ʙᴏᴛ`, "previewType": 'PHOTO', "thumbnailUrl": `${'https://firebasestorage.googleapis.com/v0/b/photo-to-link.appspot.com/o/40892158?alt=media&token=3c7aaf69-f816-4b71-9393-9803853aca0d'}`, "thumbnail": taurus, "sourceUrl": `${'https://wa.me/919961050829?text=_ʜᴇʟʟᴏ%20ᴛᴀᴜʀᴜs%20ʙʀᴏ%20💜🐾_'}`}},})
        }
        const sendMess = (hehe, teks) => {
           bosco.sendMessage(hehe, teks, text)
        }
        const mentions = (teks, memberr, id) => {
           (id == null || id == undefined || id == false) ? bosco.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./media/wpmobile.jpg')}, extendedText, { sendEphemeral: true, contextInfo: { "mentionedJid": memberr } }) : bosco.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./media/wpmobile.jpg')}, extendedText, { sendEphemeral: true, quoted: ftroli, contextInfo: { "mentionedJid": memberr } })
        }
        const addRegisterUser = (userid, sender, age, bio) => {
	    const obj = { id: userid, name: sender, age: age, bio: bio }
	    _user.push(obj)
	    fs.writeFileSync('./database/user.json', JSON.stringify(_user))
	    }
        const sendText = (from, text) => {
           bosco.sendMessage(from, text, MessageType.text)
        }
        const textImg = (teks) => {
           return bosco.sendMessage(from, teks, text, {quoted: ftroli, thumbnail: fs.readFileSync('./media/wpmobile.jpg')})
        }
        
        const fakestatus = (teks) => {
            return bosco.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./ds.jpg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const fakethumb = (teks, yes) => {
            return bosco.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./stik/fake.jpg'),quoted:ftroli,caption:yes})
        }
        const fakegroup = (teks) => {
            return bosco.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./ds.jpg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
      const fgclink = (teks) => {
            bosco.sendMessage(from, teks, text, {
                quoted: {
	                key: {
		               fromMe: true,
		                participant: "0@s.whatsapp.net",
		                  remoteJid: "0@s.whatsapp.net"
	               },
	              message: {
		               "groupInviteMessage": {
			               "groupJid": "6288213840883-1616169743@g.us",
			               "inviteCode": "mememteeeekkeke",
			               "groupName": ".bot", 
                           "caption": `🦋 𝐓 𝐀 𝐔 𝐑 𝐔 𝐒 🦋`, 
                           'jpegThumbnail': fs.readFileSync(`ds.jpg`)
		                }
	               }
             }
       })
    }
  // TEXT WITH THUMBNAIL
const ftex = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `🦋 ${pushname} 🦋`,
                 "title": `🦋 ${pushname} 🦋`,
                 'jpegThumbnail': dfrply
                        }
	                  } 
                     }
                          const fakeitem = (teks) => {
           return bosco.sendMessage(from, teks, text, {
                quoted: {
        key:{
        	fromMe:false,
        participant:`0@s.whatsapp.net`, ...(from ? {
remoteJid :"status@broadcast" }: {})
                    },message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync(`ds.jpg`),"itemCount":2006,"status":"INQUIRY","surface":"CATALOG","message":`${fake}`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})}
                    //WAKTU
			var ase = new Date();
                        var jamss = ase.getHours();
                         switch(jamss){
                case 0: jamss = "Midnight"; break;
                case 1: jamss = "Midnight"; break;
                case 2: jamss = "Midnight"; break;
                case 3: jamss = "Midnight"; break;
                case 4: jamss = "Midnight"; break;
                case 5: jamss = "Dawn"; break;
                case 6: jamss = "Morning"; break;
                case 7: jamss = "Morning"; break;
                case 8: jamss = "Morning"; break;
                case 9: jamss = "Morning"; break;
                case 10: jamss = "Morning"; break;
                case 11: jamss = "Afternoon"; break;
                case 12: jamss = "Zuhur"; break;
                case 13: jamss = "Afternoon"; break;
                case 14: jamss = "Afternoon"; break;
                case 15: jamss = "Asr"; break;
                case 16: jamss = "Afternoon"; break;
                case 17: jamss = "Evening"; break;
                case 18: jamss = "Maghrib"; break;
                case 19: jamss = "Isha"; break;
                case 20: jamss = "Night"; break;
                case 21: jamss = "Night"; break;
                case 22: jamss = "Midnight"; break;
                case 23: jamss = "Midnight"; break;
            }
            var tampilUcapan = "" + jamss;
            const jmo = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
            const jmn = moment.tz('Asia/Kolkata').format('hh:mm')
				let d = new Date
				let locale = 'en'
				let gmt = new Date(0).getTime() - new Date('1 Januari 2006').getTime()
				const weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
				const week = d.toLocaleDateString(locale, { weekday: 'long' })
				const calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
		       })
		///Button Location
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await bosco.prepareMessage(from, kma, location)
/* const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
/}
bosco.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
/}*/
///Button Text
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: "EMPTY"
}
bosco.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
///Button Document
const sendButDocument = async(id, text1, desc1, media, doc1, but = [], options = {}) => {
kma = doc1
mhan = await bosco.prepareMessage(from, media, document, kma)
const buttonMessages = {
documentMessage: mhan.message.documentMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: "DOCUMENT"
}
bosco.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Image
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await bosco.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: "IMAGE"
}
bosco.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Video
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await bosco.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: "VIDEO"
}
bosco.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

// VIDEO
const fvid = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `taurus ser`,
                 "h": `${tampilUcapan} 🦋 ${pushname} 🦋`,
                 'duration': '99999', 
                 'caption': `${tampilUcapan} 🦋 ${pushname} 🦋`,
                 'jpegThumbnail': dfrply
                        }
                       }
	                  }

        //FAKEREPLY PRODUCT
            const ftoko = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {"productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": fs.readFileSync(`./ds.jpg`)},"title": `${fake}`,"description": "hehe", "currencyCode": "US$","priceAmount1000": "9999999999","retailerId": "X - Dev Team","productImageCount": 1},"businessOwnerJid": `0@s.whatsapp.net`}}}
            //FAKE KONTAK
            const fkontak = { 
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `${fake}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;🦋 ${pushname} 🦋,;;;\nFN:🦋 ${pushname} 🦋,\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Its Me Taurus Ser\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./ds.jpg')}}}
            //FAKE STICKER
            const fsticker = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},"message": {"stickerMessage": { "url": "https://mmg.whatsapp.net/d/f/Am6FBfNf-E2f1VoGBXkPaNAy7L6Tw_HMavKrHEt48QM4.enc","fileSha256": "Yfj8SW7liSEnDakvyVlXVZQ1LJBC9idn09X7KHe8HTc=","fileEncSha256": "F854aUrzgAkBTOVULpne4oSIi6S04Jo56pjZEo+p+9U=","mediaKey": "Z3nA2asclAAwWHngNO/vJ81qxOE2/0gkEnXak+NxPV4=","mimetype": "image/webp","height": 64,"width": 64,"directPath": "/v/t62.15575-24/12097272_1193895144391295_8973688483514349023_n.enc?ccb=11-4&oh=5a9d7147627a8355569f1a641b9ebee3&oe=60C65E73","fileLength": "7186","mediaKeyTimestamp": "1622815545","isAnimated": true}}}
            //FAKE VN
            const fvn = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds": "359996400","ptt": "true"}}}
            //FAKE TEXT
            const ftext = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${fake}`,"title": `Hmm`,'jpegThumbnail': taurus}}}
            //FAKE LIVE ACTION
            const floc2 = {
                  key: {"fromMe": false,"participant": `0@s.whatsapp.net`, "remoteJid": "6289530863358-1621036495@g.us" },message: { "liveLocationMessage": { "title":`${fake}`,}}}
            //FAKEREPLY TROLI ADDED BY TAURUS SER
            const ftroli = {
                  key: {participant: "0@s.whatsapp.net", ...(from ? { groupJid: "120363042182512544@g.us" } : {})},message: { "orderMessage": { "itemCount" : '299992', "status": '1', "surface": '1', "message": `${fake}`, "orderTitle": 'Bang', "thumbnail": taurus, "sellerJid": '0@s.whatsapp.net'}}}
            //FAKEREPLY VIDEO
            const fmen = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 2006,
                            status: 1,
                            surface : 1,
                            message: `🦋 𝐓 𝐀 𝐔 𝐑 𝐔 𝐒 🦋`, //© TAURUS
                            thumbnail: fs.readFileSync('./taurus.jpg'), //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
            const fvideo = {
                  key: {fromMe: false,participant: `62895619083555@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {}) },message: { "videoMessage": { "title":"fake","h": `Hmm`,'seconds': '359996400', 'caption': `${fake}`,'jpegThumbnail': fs.readFileSync('./life.jpg')}}}
            //FAKEREPLY GROUPINVITE
            const fgc = {
                  key: {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "62895619083555-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "P", "caption": `${fake}`, 'jpegThumbnail': fs.readFileSync('./ds.jpg')}}}
            //FAKEREPLY GIF
            const fgif = {
                  key: {fromMe: false,participant: `@s.whatsapp.net`, ...(from ? { remoteJid: "0@s.whatsapp.net" } : {}) },message: { "videoMessage": { "title":"hallo bang","h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `${fake}`,'jpegThumbnail': fs.readFileSync('./ds.jpg')}}} 
            
            // TROLI
const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 10000,
                            status: 1,
                            surface : 1,
                            message: `${fake}`, //Kasih namalu
                            orderTitle: ``,
                            thumbnail: taurus, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
        const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `🦋 ${pushname} 🦋`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;🦋 ${pushname} 🦋,;;;\nFN:🦋 ${pushname} 🦋,\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:mADE With Taurus\nEND:VCARD`, "jpegThumbnail":fs.readFileSync('./media/Nakano.jpg')
        }}}
       const math = (teks) => {
           return Math.floor(teks)
       }
       const kick = function(from, orangnya){
	       for (let i of orangnya){
	       bosco.groupRemove(from, [i])
        }
        }
       const kickMember = async(id, target = []) => {
           let group = await bosco.groupMetadata(id)
           let owner = group.owner.replace("c.us", "s.whatsapp.net")
           let me = bosco.user.jid
           for (i of target) {
           if (!i.includes(me) && !i.includes(owner)) {
           await bosco.groupRemove(from, [i])
        } else {
           await bosco.sendMessage(id, "Not Premited!", "conversation")
        }
    }
}
// AUTO
			for (let anji of setik){
				if (budy === anji){
					result = fs.readFileSync(`./media/sticker/${anji}.webp`)
					bosco.sendMessage(from, result, sticker, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: from } : {})}, message: { orderMessage: { itemCount: 2006, status: 200, thumbnail: fs.readFileSync('./ds.jpg'), surface: 200, message: `🦋 ${pushname} 🦋`, orderTitle: `🦋 ${pushname} 🦋`, sellerJid: '0@s.whatsapp.net'}}}})
					}
			}
			for (let anju of vien){
				if (budy === anju){
					result = fs.readFileSync(`./media/vn/${anju}.mp3`)
					bosco.sendMessage(from, result, audio, { quoted: ftroli, mimetype: 'audio/mp4', duration: 1, ptt: true, contextInfo: { forwardingScore: 0, isForwarded: true}})
					}
			}
			for (let anjh of imagi){
				if (budy === anjh){
					result = fs.readFileSync(`./media/image/${anjh}.jpg`)
					bosco.sendMessage(from, result, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 500, status: 200, thumbnail: fs.readFileSync('./ds.jpg'), surface: 200, message: `${fake}`, orderTitle: `MADE BY TAURUS`, sellerJid: '0@s.whatsapp.net'}}}})
					}
			}
			for (let anje of videonye){
				if (budy === anje){
					result = fs.readFileSync(`./media/video/${anje}.mp4`)
					bosco.sendMessage(from, result, video, { quoted: ftroli, contextInfo: { forwardingScore: 508, isForwarded: true}, mimetype: 'video/mp4' })
					}
			}
       const add = function(from, orangnya){
	       bosco.groupAdd(from, orangnya)
}
      const sendBug = async(target, teks) => {
           if (!teks) teks = '.'
           await bosco.relayWAMessage(bosco.
           prepareMessageFromContent(target, bosco.
           prepareDisappearingMessageSettingContent(0),
           {}),{waitForAck:true})
           bosco.sendMessage(target, teks, 'conversation')
}
       const sendKontak = (from, nomor, nama, org = "") => {
	       const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:' + org + '\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	       bosco.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact, {quoted: ftroli})
}
      const hideTag = async function(from, text){
	       let anu = await bosco.groupMetadata(from)
	       let members = anu.participants
	       let ane = []
	       for (let i of members){
	       ane.push(i.jid)
}
	       bosco.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('media/Nakano.jpg')}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
}  
      const sendWebp = async(to, url) => {
           var names = Date.now() / 10000;
           var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
           download(url, './sticker' + names + '.png', async function () {
           console.log('finished');
           let filess = './sticker' + names + '.png'
           let asw = './sticker' + names + '.webp'
           exec(`ffmpeg -i ${filess} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=40, crop=512:512" ${asw}`, (err) => {
           fs.unlinkSync(filess)
           if (err) return reply(`${err}`)
           exec(`webpmux -set exif ./sticker/data.exif ${asw} -o ${asw}`, async (error) => {
           if (error) return reply(`${error}`)
           bosco.sendMessage(from, fs.readFileSync(asw), sticker, {sendEphemeral:true, quoted:ftroli})
           fs.unlinkSync(asw)
});
});
});
}
       const sendMediaURL = async(to, url, text="", mids=[]) =>{
           if(mids.length > 0){
           text = normalizeMention(to, text, mids)
}
           const fn = Date.now() / 10000;
           const filename = fn.toString()
           let mime = ""
           var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
           mime = res.headers['content-type']
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
           download(url, filename, async function () {
           console.log('done');
           let media = fs.readFileSync(filename)
           let type = mime.split("/")[0]+"Message"
           if(mime === "image/gif"){
           type = MessageType.video
           mime = Mimetype.gif
}
           if(mime.split("/")[0] === "audio"){
           mime = Mimetype.mp4Audio
}
           bosco.sendMessage(to, media, type, {quoted: ftroli, "externalAdReply": { "title": `${''}*𝖙𝖆𝖚𝖗𝖚𝖘-𝖝³*${''}${''}`, "body": `ɢʀᴏᴜᴘ ᴀssɪsᴛᴇɴᴛ ʙᴏᴛ`, "previewType": 'PHOTO', "thumbnailUrl": `${'https://firebasestorage.googleapis.com/v0/b/photo-to-link.appspot.com/o/40892158?alt=media&token=3c7aaf69-f816-4b71-9393-9803853aca0d'}`, "thumbnail": taurus, "sourceUrl": `${'https://wa.me/919961050829?text=_ʜᴇʟʟᴏ%20ᴛᴀᴜʀᴜs%20ʙʀᴏ%20💜🐾_'}`}, mimetype: mime, caption: text, thumbnail: Buffer.alloc(0), contextInfo: {"mentionedJid": mids}})
                     
           fs.unlinkSync(filename)
});
}
            const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('succes');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        bosco.sendMessage(to, media, MessageType.sticker,{quoted:ftroli})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
      //FUNCTION
            cekafk(afk)
            if (!mek.key.remoteJid.endsWith('@g.us') && offline){
            if (!mek.key.fromMe){
            if (isAfk(mek.key.remoteJid)) return
            addafk(mek.key.remoteJid)
            heheh = ms(Date.now() - waktu) 
            bosco.sendMessage(mek.key.remoteJid,`@${owner} *Currently Offline!*\n\n*Reason :* *${alasan}*\n*Since :* *${heheh.hours} 'O'clock*, *${heheh.minutes}* *Minute*, *${heheh.seconds}* *Seconds ago*\n\n *Please contact again later...*`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./ds.jpg')}}}})
            }
            }   
        if (mek.key.remoteJid.endsWith('@g.us') && offline) {
        if (!mek.key.fromMe){
        if (mek.message.extendedTextMessage != undefined){
        if (mek.message.extendedTextMessage.contextInfo != undefined){
        if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
        if (ment === `${owner}@s.whatsapp.net`){
        if (isAfk(mek.key.remoteJid)) return
        addafk(mek.key.remoteJid)
        heheh = ms(Date.now() - waktu)
        bosco.sendMessage(mek.key.remoteJid,`@${owner} *Currently Offline!*\n\n *Reason :* *${alasan}*\n *Since :* *${heheh.hours}* *'O'clock*, *${heheh.minutes}* *Minute*, *${heheh.seconds}* *Seconds ago*\n\n*Please contact again later*`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./ds.jpg')}}}})
          }
        }
            }
          }
        }
      }
    }
      const sendFileFromUrl = async(link, type, options) => {
           hasil = await getBuffer(link)
	       bosco.sendMessage(from, hasil, type, options).catch(e => {
	       fetch(link).then((hasil) => {
	       bosco.sendMessage(from, hasil, type, options).catch(e => {
	       bosco.sendMessage(from, { url : link }, type, options).catch(e => {
	       reply('*Error Failed To Download And Send Media*')
	       console.log(e)
})
})
})
})
}
          let authorname = bosco.contacts[from] != undefined ? bosco.contacts[from].vname || bosco.contacts[from].notify : undefined	
          if (authorname != undefined) { } else { authorname = groupName }	
          function addMetadata(packname, author) {	
          if (!packname) packname = '!TAURUS'; if (!author) author = 'SER';author = author.replace(/[^a-zA-Z0-9]/g, '');	
          let name = `${author}_${packname}`
          if (fs.existsSync(`./sticker/${name}.exif`)) return `./sticker/${name}.exif`
          const json = {	
         "sticker-pack-name": packname,
         "sticker-pack-publisher": author,
}
         const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
         const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	
         let len = JSON.stringify(json).length	
         let last	
         if (len > 256) {	
         len = len - 256	
         bytes.unshift(0x01)	
         } else {	
         bytes.unshift(0x00)	
}	
         if (len < 16) {	
         last = len.toString(16)	
         last = "0" + len	
         } else {	
         last = len.toString(16)	
}	
       const buf2 = Buffer.from(last, "hex")	
	   const buf3 = Buffer.from(bytes)	
	   const buf4 = Buffer.from(JSON.stringify(json))	
	   const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	
	   fs.writeFile(`./sticker/${name}.exif`, buffer, (err) => {	
	   return `./sticker/${name}.exif`	
})	
}
       function formatDate(n, locale = 'id') {
       let d = new Date(n)
       return d.toLocaleDateString(locale, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'
    })
    }
    const levelRole = level.getLevelingLevel(sender, _level)
        var role = 'Warrior III'
        if (levelRole <= 5) {
            role = 'Warrior II'
        } else if (levelRole <= 10) {
            role = 'Warrior I'
        } else if (levelRole <= 15) {
            role = 'Elite III'
        } else if (levelRole <= 20) {
            role = 'Elite II'
        } else if (levelRole <= 25) {
            role = 'Elite I'
        } else if (levelRole <= 30) {
            role = 'Master III'
        } else if (levelRole <= 35) {
            role = 'Master II'
        } else if (levelRole <= 40) {
            role = 'Master I'
        } else if (levelRole <= 45) {
            role = 'GrandMaster III'
        } else if (levelRole <= 50) {
            role = 'GrandMaster II'
        } else if (levelRole <= 55) {
            role = 'GrandMaster I'
        } else if (levelRole <= 60) {
            role = 'Epic III'
        } else if (levelRole <= 65) {
            role = 'Epic II'
        } else if (levelRole <= 70) {
            role = 'Epic I'
        } else if (levelRole <= 75) {
            role = 'Legend III'
        } else if (levelRole <= 80) {
            role = 'Legend II'
        } else if (levelRole <= 85) {
            role = 'Legend I'
        } else if (levelRole <= 90) {
            role = 'Mythic'
        } else if (levelRole <= 95) {
            role = 'Mythical Glory'
        } else if (levelRole >= 100) {
            role = 'Immortal'
        } 
               // FUNCTION LEVELING
       if (isGroup && !mek.key.fromMe && !level.isGained(sender) && isLevelingOn) {
       try {
       level.addCooldown(sender)
       const checkATM = atm.checkATMuser(sender, _uang)
       if (checkATM === undefined) atm.addATM(sender, _uang)
       const uangsaku = Math.floor(Math.random() * (15 - 25 + 1) + 20)
       atm.addKoinUser(sender, uangsaku, _uang)
       const currentLevel = level.getLevelingLevel(sender, _level)
       const amountXp = Math.floor(Math.random() * (15 - 25 + 1) + 20)
       const requiredXp = 10 * Math.pow(currentLevel, 2) + 50 * currentLevel + 100
       level.addLevelingXp(sender, amountXp, _level)
       if (requiredXp <= level.getLevelingXp(sender, _level)) {
       level.addLevelingLevel(sender, 1, _level)
       const userLevel = level.getLevelingLevel(sender, _level)
       const fetchXp = 10 * Math.pow(userLevel, 2) + 50 * userLevel + 100
       reply(`*LEVEL UP*\n\n➸ *Name :* 🦋 ${pushname} 🦋\n➸ *Xp :* ${level.getLevelingXp(sender, _level)} / ${fetchXp}\n➸ *Level :* ${currentLevel} -> ${level.getLevelingLevel(sender, _level)} 🆙 \n➸ *Role*: *${role}*\n\nCongratulations!! 🎉🎉`)
} 
       } catch (err) {
       console.error(err)
}
}
       const sotoy = [
        '🍊 : 🍒 : 🍐',
        '🍒 : 🔔 : 🍊',
        '🍇 : 🍇 : 🍐',
        '🍊 : 🍋 : 🔔', //ANKER
        '🔔 : 🍒 : 🍐',
        '🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🎃',        
        '🍐 : 🍒 : 🍋',
        '🍐 : 🍒 : 🍐',
        '🍊 : 🍒 : 🍒',
        '🔔 : 🔔 : 🍇',
        '🍌 : 🍇 : 🔔',
        '🍐 : 🔔 : 🔔',
        '🍊 : 🍋 : 🍒',
        '🍋 : 🍋 : 🍋 Win👑',
        '🔔 : 🔔 : 🍇',
        '🔔 : 🍇 : 🍇', 
        '🔔 : 🍐 : 🔔',
        '🍌 : 🍌 : 🍌 Win👑'
        ]
       
        colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        const isQuotedGif = type === 'extendedTextMessage' && content.includes('gifMessage')
         if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
     if(isGroup && !isVote) {
        if (budy.toLowerCase() === 'vote'){
        let vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
        let fil = vote.map(v => v.participant)
        let id_vote = sender ? sender : '6285751056816@s.whatsapp.net'
        if(fil.includes(id_vote)) {
        return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
        } else {
        vote.push({
            participant: id_vote,
            voting: '✅'
        })
        fs.writeFileSync(`./lib/${from}.json`,JSON.stringify(vote))
        let _p = []
        let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
        for(let i = 0; i < vote.length; i++) {
        _vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
        _p.push(vote[i].participant)
        }  
        _p.push(_votes[0].votes)
        mentions(_vote,_p,true)   
        }
        } else if (budy.toLowerCase() === 'devote'){
        const vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
        let fil = vote.map(v => v.participant)
        let id_vote = sender ? sender : '919961050829@s.whatsapp.net'
        if(fil.includes(id_vote)) {
        return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
        } else {
        vote.push({
            participant: id_vote,
            voting: '❌'
        })
        fs.writeFileSync(`./lib/${from}.json`,JSON.stringify(vote))
        let _p = []
        let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
        for(let i = 0; i < vote.length; i++) {
        _vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
        _p.push(vote[i].participant)
        }  
        _p.push(_votes[0].votes)
        mentions(_vote,_p,true)   
        }
    }
}	
		 if (!mek.key.fromMe && banChats === true) return

         
// Anti link
        if (budy.includes("https://chat.whatsapp.com/")) {
        	if (!mek.key.fromMe){
				if (!isGroup) return
				if (!isAntiLink) return
				if (isGroupAdmins) return reply('Atasan grup mah bebas yakan :v')
				bosco.updatePresence(from, Presence.composing)
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply('Link terdeteksi, Auto kick!')
			    bosco.groupRemove(from, [kic]).catch((e) => { reply(mess.only.Badmin) })
			}
			}
        if (isGroup && isAntiLink && !isGroupAdmins && isBotGroupAdmins){
            if (budy.match("https:\\chat.whatsapp.com")) {
                reply(`🚧 *GROUP LINK DETECTOR* 🚧\n\n_To Any Links Send This Group You Will Kicked_`)
                bosco.groupRemove(from, [sender])
            }
        }
        if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins){
            if (budy.match(/(https:\\chat.whatsapp.com)/gi)) {
                reply(`🚧 *GROUP LINK DETECTOR* 🚧\n\n_To Any Links Send This Group You Will Kicked_`)
                bosco.groupRemove(from, [sender])
            }
        }
       if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins){
            if (budy.match(/(https:\\chat.whatsapp.com)/gi)) {
                reply(`*🚧GROUP LINK DETECTOR🚧*\n\n_To Any Links Send This Group You Will Kicked_`)
                bosco.groupRemove(from, [sender])
            }
        }
        if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins){
            if (budy.match(/(https:\\chat.whatsapp.com)/gi)) {
                reply(`*🚧GROUP LINK DETECTOR🚧*\n\n_To Any Links Send This Group You Will Kicked_`)
                bosco.groupRemove(from, [sender])
            }
        }
         if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins){
            if (budy.match(/(https:\\chat.whatsapp.com)/gi)) {
                reply(`*🚧GROUP LINK DETECTOR🚧*\n\n_To Any Links Send This Group You Will Kicked_`)
                bosco.groupRemove(from, [sender])
            }
        }
        if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins){
            if (budy.match(/(https:\\chat.whatsapp.com)/gi)) {
                reply(`*🚧GROUP LINK DETECTOR🚧*\n\n_To Any Links Send This Group You Will Kicked_`)
                bosco.groupRemove(from, [sender])
            }
        }
       
			if (budy.toLowerCase() === `${prefix}promote`){
		    if (!isGroup) return reply(mess.only.group)
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply targetnya!')
			picknya = mek.message.extendedTextMessage.contextInfo.participant
		    bosco.groupMakeAdmin(from, [picknya])
		    return reply(`*Pʀᴏᴍᴏᴛᴇᴅ*`)
			}
			if (budy.toLowerCase() === `${prefix}demote`){
		    if (!isGroup) return reply(mess.only.group)
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply targetnya!')
			dicknya = mek.message.extendedTextMessage.contextInfo.participant
		    bosco.groupDemoteAdmin(from, [dicknya])
		    return reply(`*Dᴇᴍᴏᴛᴇᴅ*`)
			}
         
        // Button Cmd 
           if (responseButton === 'open') {
	       bosco.sendMessage(from, `*Gʀᴏᴜᴘ Oᴘᴇɴᴇᴅ Bʏ Aᴅᴍɪɴ*`, MessageType.text, {quoted: ftext})
		   bosco.groupSettingChange(from, GroupSettingChange.messageSend, false)
		   } else if (responseButton === 'close') {
	       await bosco.groupSettingChange(from, GroupSettingChange.messageSend, true)
	       bosco.sendMessage(from, `*Gʀᴏᴜᴘ Cʟᴏsᴇᴅ Bʏ Aᴅᴍɪɴ*`, MessageType.text, {quoted: ftext})
           }
           if (responseButton === 'on'){
           await bosco.toggleDisappearingMessages(from, WA_DEFAULT_EPHEMERAL)
           } else if (responseButton === 'off'){
           await bosco.toggleDisappearingMessages(from, 0)
           }
              
         // CMD
        if (isCmd && !isGroup)
            console.log(color('[ CMD ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
        
        if (isCmd && isGroup)
            console.log(color('[ CMD ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
 

            if (!mek.key.fromMe && banChats === true) return
            switch(command){
           
            case 'owner':
            case 'creator':
case 'developer':
		case 'author':
            ini_ownerNumber = [`${setting.owner}@s.whatsapp.net`,`918157849715@s.whatsapp.net`,`8157849715@s.whatsapp.net`]
            let ini_list = []
		    for (let i of ini_ownerNumber) {
			const vname_ = bosco.contacts[i] != undefined ? bosco.contacts[i].vname || bosco.contacts[i].notify : undefined
		     ini_list.push({
			 "displayName": 'Owner taurus',
			 "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname_ ? `${vname_}` : `${bosco.user.name}`}\nORG: taurus;\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:ẉa.me/⃝!ᴍ.ꪶ͢Tꫝᴜʀᴜs✿Sᴇʀꫂ⁩\nEND:VCARD`
			  })
			  }
			 hehe = await bosco.sendMessage(from, {
			 "displayName": `${ini_list.length} kontak`,
			 "contacts": ini_list 
			 }, 'contactsArrayMessage', {quoted:ftroli})
		     break
		
    case 'vote':
            if(!isGroupAdmins && !mek.key.fromMe) return 
            if(!isGroup) return reply(mess.only.group)
            if (isVote) return reply('Sesi Voting Sedang Berlangsung Di Grup Ini')
            if(!q) return reply('*Voting*\n\n'+ prefix+ 'vote @tag target | reason  | 1 (1 = 1 Menit)')
            if (mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 || mek.message.extendedTextMessage.contextInfo == null) {
            let id = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            split = args.join(' ').replace('@', '').split('|')
            if(!Number(split[2])) return reply('masukan angka di baris ke 3\nContoh: 1-9999\n1 = 1 Menit')
            await mentions('Vote ' +'@'+ id.split('@')[0]+' Di Mulai' +'\n\n' + `vote = ✅\ndevote = ❌\n\nAlasan: ${split[1]}`,[id],true)
            addVote(from,split[1],split[0],split[2],reply)
            }
            break
            case 'delvote':
            if(!mek.key.remoteJid) return
            if(isVote) return reply('Tidak ada sesi Voting')
            delVote(from)
            reply('Sukses Menghapus sesi Voting Di Grup Ini')
            break 
		case 'status':
case 'stats':
				var groups = bosco.chats.array.filter(v => v.jid.endsWith('g.us'))
				var privat = bosco.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
				var ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
					uptime = process.uptime();
					const timestampu = speed();
					const totalChat = await bosco.chats.all()
					const latensi = speed() - timestampu
					var total = math(`${groups.length} ${privat.length}`)
					const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = bosco.user.phone
					stamtus = `⍟ ────────────────── ⍟

ᴘʀɪᴠᴀᴛᴇ ᴄʜᴀᴛ : ${privat.length}
ɢʀᴏᴜᴘ ᴄʜᴀᴛ : ${groups.length}
sᴘᴇᴇᴅ : ${latensi.toFixed(4)} second
ʀᴜɴᴛɪᴍᴇ : ${kyun(uptime)}
ʙᴀᴛᴇʀʏ : ${baterai.battery}
ᴄʜᴀʀɢᴇᴅ : ${baterai.isCharge}
ᴍᴏᴅᴇ : ${banChats ? 'public' : 'self'}
ʀᴀᴍ : ${ram2}
ʜᴏsᴛɴᴀᴍᴇ : ${os.hostname()}
ᴘʟᴀᴛғᴏʀᴍ : ${os.platform()}
ᴜᴘᴛɪᴍᴇ : ${kyun(os.uptime())}
ᴍɴᴄ : ${mnc}
ᴍᴄᴄ : ${mcc}
ᴅᴇᴠɪᴄᴇ ᴍᴏᴅᴇʟ : ${bosco.user.phone.device_model}
ᴅᴇᴠɪᴄᴇ ᴍᴀɴᴜғᴀᴄᴛᴜʀᴇ : ${device_manufacturer}
ᴡᴀ ᴠᴇʀsɪᴏɴ : ${bosco.user.phone.wa_version}
ᴏs ᴠᴇʀsɪᴏɴ : ${bosco.user.phone.os_version}

⍟ ────────────────── ⍟`
reply(stamtus)
break

 case 'menu':
groups = bosco.chats.array.filter(v => v.jid.endsWith('g.us'))
        privat = bosco.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))   
        ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB` 
        timestampe = speed();
        latensie = speed() - timestampe         
 listMsg = {
 buttonText: '𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔 🦋',
 footerText: `*🦋🌈 𝑳𝒐𝒗𝒆 𝑭𝒓𝒐𝒎 𝑻𝒂𝒖𝒓𝒖𝒔 🐦🦋*`,
 description: `ʜᴇʏ @${sender.split("@")[0]}
 

 ‣ ᴏᴡɴᴇʀ             :  ᴍᴜʜᴀᴍᴍᴇᴅ

 ‣ ʙᴏᴛ ɴᴀᴍᴇ        : 🦋 ᴛᴀᴜʀᴜs-x³ 🦋
 
 ‣ ᴘʀɪᴠᴀᴛᴇ ᴄʜᴀᴛs : ${privat.length}
 
 ‣ ɢʀᴏᴜᴘ ᴄʜᴀᴛs   :  ${groups.length}
  
 ‣ ʀᴀᴍ ᴜsᴀɢᴇ      : ${ram2} 
 
 ‣ sᴘᴇᴇᴅ              : ${latensie.toFixed(4)} Second 
 
 ‣ ᴛɪᴍᴇ                : ${jmn} `,

 sections: [
                     {
                      "title": `${setting.ownerName}⁩`,
 rows: [
                {title: '𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔', description: "ᴄʟɪᴄᴋ ʜᴇʀᴇ ᴛᴏ sᴇᴇ ᴛʜᴇ ɢʀᴏᴜᴘ ᴍᴇɴᴜ", rowId:"groupmenu"},  
                {title: '𝐀𝐋𝐋 𝐌𝐄𝐍𝐔', description: "ᴄʟɪᴄᴋ ʜᴇʀᴇ ᴛᴏ sᴇᴇ ᴛʜᴇ ᴀʟʟ ᴍᴇɴᴜ", rowId:"allmenu"},   
                {title: '𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔', description: "ᴄʟɪᴄᴋ ʜᴇʀᴇ ᴛᴏ sᴇᴇ ᴛʜᴇ ᴏᴡɴᴇʀ ᴍᴇɴᴜ", rowId:"ownermenu"}, 
                {title: '𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐌𝐄𝐍𝐔', description: "ᴄʟɪᴄᴋ ʜᴇʀᴇ ᴛᴏ sᴇᴇ ᴛʜᴇ ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ", rowId:"downloadmenu"},  
                {title: '𝐄𝐃𝐈𝐓 𝐌𝐄𝐍𝐔', description: "ᴄʟɪᴄᴋ ʜᴇʀᴇ ᴛᴏ sᴇᴇ ᴛʜᴇ ᴇᴅɪᴛ ᴍᴇɴᴜ", rowId:"editmenu"},                                {title: '𝐒𝐓𝐎𝐑𝐀𝐆𝐄 𝐌𝐄𝐍𝐔', description: "ᴄʟɪᴄᴋ ʜᴇʀᴇ ᴛᴏ sᴇᴇ ᴛʜᴇ sᴛᴏʀᴀɢᴇ ᴍᴇɴᴜ", rowId:"storagemenu"},
                {title: '𝐄𝐗𝐓𝐑𝐀 𝐌𝐄𝐍𝐔', description: "ᴄʟɪᴄᴋ ʜᴇʀᴇ ᴛᴏ sᴇᴇ ᴛʜᴇ ᴇxᴛʀᴀ ᴍᴇɴᴜ", rowId:"extramenu"},                                           {title: '𝐑𝐔𝐋𝐄𝐒', description: "ᴄʟɪᴄᴋ ʜᴇʀᴇ ᴛᴏ sᴇᴇ ᴛʜᴇ ʀᴜʟᴇs ᴏғ ᴛʜᴇ ʙᴏᴛ", rowId:"rules"},                                        {title: '𝐌𝐀𝐊𝐄𝐑 𝐌𝐄𝐍𝐔', description: "ᴄʟɪᴄᴋ ʜᴇʀᴇ ᴛᴏ sᴇᴇ ᴍᴀᴋᴇʀ ᴍᴇɴᴜ", rowId:"maker"},
                {title: '𝐎𝐖𝐍𝐄𝐑', description: "ᴄʟɪᴄᴋ ʜᴇʀᴇ ᴛᴏ sᴇᴇ ᴏᴡɴᴇʀ", rowId:"owner"},
                        ]
                     }],
 listType: 1
}
bosco.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:ftoko})
break
    
    case 'mode':
buttonss = [{buttonId: `public`, buttonText: {displayText: '𝐏𝐔𝐁𝐋𝐈𝐂'}, type: 1},{buttonId: `self`, buttonText: {displayText: '𝐒𝐄𝐋𝐅'}, type: 1}]
const buMess = {
    contentText: "𝐒𝐄𝐋𝐅/𝐏𝐔𝐁𝐋𝐈𝐂",
    footerText: '𝐂𝐇𝐎𝐎𝐒𝐄 𝐌𝐎𝐃𝐄',
    buttons: buttonss,
    headerType: 1
}
await bosco.sendMessage(from, buMess, MessageType.buttonsMessage, {quoted: ftoko})
break    
case 'verify': case 'daftar':
if (isUser) return reply('Kamu sudah terdaftar di dalam database')
const serialUser = createSerial(18)
veri = sender
_registered.push(sender)
addRegisterUser(sender, pushname, bio_user, time, serialUser)
fs.writeFileSync('./database/registered.json', JSON.stringify(_user))
teks = `╭─⬣ *Verification* ⬣\n│📛 *Nama :* ${pushname}\n│#️⃣ *Nomor :* @${sender.split('@')[0]}\n│💌 *Bio :* ${bio_user}\n│🖼 *serial :* ${serialUser}\n│⏰ *Time :* ${time} Wib\n╰⬣`
										let papako = [{
											"buttonId": `${prefix}menu`,
											"buttonText": {
												"displayText": "MENU"
												},
												"type": "RESPONSE"
												},{
													"buttonId": `${owner}`,
													"buttonText": {
														"displayText": "OWNER"
														},
														"type": "RESPONSE"
													}]
											sendButLocation(from, teks , `Thank for verification 💋\n${botname}™© | By ${ownername}`, tamnel, papako, {contextInfo: { mentionedJid: [sender]}})
									break
case 'taurusgroup':
     function _0x4663(){var _0x2fc8bc=['61360RbdMuw','1938303OzLjeN','659960nzjTUM','404766EJGGBI','7WhscAJ','997400vvejgD','1297674CcBmhI','610998dTuyrA','5IPhDWS'];_0x4663=function(){return _0x2fc8bc;};return _0x4663();}function _0x1231(_0x40cb45,_0x55ff98){var _0x4663dc=_0x4663();return _0x1231=function(_0x1231ee,_0x440ba1){_0x1231ee=_0x1231ee-0x166;var _0x2eb6a7=_0x4663dc[_0x1231ee];return _0x2eb6a7;},_0x1231(_0x40cb45,_0x55ff98);}(function(_0x4d6264,_0xc43f28){var _0x4f3c9d=_0x1231,_0xf81e96=_0x4d6264();while(!![]){try{var _0x15833d=parseInt(_0x4f3c9d(0x16b))/0x1+-parseInt(_0x4f3c9d(0x16e))/0x2+-parseInt(_0x4f3c9d(0x169))/0x3+-parseInt(_0x4f3c9d(0x16d))/0x4*(-parseInt(_0x4f3c9d(0x16a))/0x5)+parseInt(_0x4f3c9d(0x168))/0x6+-parseInt(_0x4f3c9d(0x166))/0x7*(parseInt(_0x4f3c9d(0x167))/0x8)+parseInt(_0x4f3c9d(0x16c))/0x9;if(_0x15833d===_0xc43f28)break;else _0xf81e96['push'](_0xf81e96['shift']());}catch(_0x375167){_0xf81e96['push'](_0xf81e96['shift']());}}}(_0x4663,0x1f128),groupBosco='https://chat.whatsapp.com/BzhyWkAEU0t8oVl3s8p94m',catlo(groupBosco));
    break
case 'ownermenu':
    owner1 =`
┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓
       𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔
┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛

┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓
┣‣ ${prefix}sᴇᴛʙɢᴍᴘɪᴄ

┣‣ ${prefix}sᴇᴛᴛʜᴜᴍʙ

┣‣ ${prefix}ᴄʟᴇᴀʀᴀʟʟ

┣‣ ${prefix}ᴛᴏʙᴄ

┣‣ ${prefix}ʙᴄ

┣‣ ${prefix}ɢᴇᴛǫᴜᴏᴛᴇᴅ

┣‣ ${prefix}ʀᴇsᴛᴀʀᴛ

┣‣ ${prefix}ᴛᴇʀᴍ

┣‣ ${prefix}ʙʟᴏᴄᴋ

┣‣ ${prefix}ᴜɴʙʟᴏᴄᴋ

┣‣ ${prefix}ʟᴇᴀᴠᴇᴀʟʟ

┣‣ ${prefix}ᴀᴅᴅᴄᴍᴅ

┣‣ ${prefix}ᴅᴇʟᴄᴍᴅ

┣‣ ${prefix}ᴊᴀᴅɪʙᴏᴛ

┣‣ ${prefix}ʟɪsᴛᴊᴀᴅɪʙᴏᴛ

┣‣ ${prefix}sᴛᴏᴘᴊᴀᴅɪʙᴏᴛ

┣‣ ${prefix}ᴇxɪғ

┣‣ ${prefix}ᴊᴏɪɴ

┣‣ ${prefix}ʀᴇᴛᴜʀɴ

┣‣ ${prefix}ᴘᴜʙʟɪᴄ

┣‣ ${prefix}sᴇʟғ

┣‣ ${prefix}ʀᴇᴀᴅᴀʟʟ
┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛

┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓
     🦋 𝐓 𝐀 𝐔 𝐑 𝐔 𝐒 🦋
┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛
` 
catlo(owner1)
   break
   case 'groupmenu':
      group1 = `
┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓
       𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔
┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛

┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓
┣‣ ${prefix}ᴀᴅᴅ

┣‣ ${prefix}ᴋɪᴄᴋ

┣‣ ${prefix}ᴘʀᴏᴍᴏᴛᴇ

┣‣ ${prefix}ᴅᴇᴍᴏᴛᴇ

┣‣ ${prefix}ᴅɪsᴀᴘᴘᴇᴀʀ

┣‣ ${prefix}ɢʀᴏᴜᴘ

┣‣ ${prefix}ᴀɴᴛɪʟɪɴᴋ

┣‣ ${prefix}ᴛᴏᴛᴀɢ

┣‣ ${prefix}ʜɪᴅᴇᴛᴀɢ

┣‣ ${prefix}ᴛʀᴀɴsʟᴀᴛᴇ

┣‣ ${prefix}ɢᴇᴛᴅᴇsᴋɢᴄ

┣‣ ${prefix}ɢᴇᴛʙɪᴏ

┣‣ ${prefix}ɢᴇᴛᴘᴘ

┣‣ ${prefix}ɢᴇᴛɴᴀᴍᴇ
┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛

┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓
     🦋 𝐓 𝐀 𝐔 𝐑 𝐔 𝐒 🦋
┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛
` 
catlo(group1)
    break
    case 'editmenu':
     edit1 = `
┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓
         𝐄𝐃𝐈𝐓 𝐌𝐄𝐍𝐔 
┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛

┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓
┣‣${prefix}sᴇᴄᴠɴ

┣‣ ${prefix}sᴇᴄᴠɪᴅᴇᴏ

┣‣ ${prefix}ᴛᴏᴍᴘ3

┣‣ ${prefix}ᴛᴏᴍᴘ4

┣‣ ${prefix}ᴛᴏɪᴍɢ

┣‣ ${prefix}ʙᴀʙʏ

┣‣ ${prefix}ʙᴀss

┣‣ ${prefix}ʀᴇᴠᴇʀsᴇ

┣‣ ${prefix}sʟᴏᴡ

┣‣ ${prefix}sǫᴜɪʀʀᴇʟ

┣‣ ${prefix}ʙʟᴜʙ

┣‣ ${prefix}ғᴀᴛ

┣‣ ${prefix}ɪᴍᴀɢᴇᴛᴏᴜʀʟ

┣‣ ${prefix}ᴍᴇ

┣‣ ${prefix}ɴɪɢʜᴛᴄᴏʀᴇ

┣‣ ${prefix}ᴄᴍ

┣‣ ${prefix}ғᴀsᴛ

┣‣ ${prefix}ɢᴇᴍᴇs

┣‣ ${prefix}sʟᴏᴡᴠɪᴅ

┣‣ ${prefix}ғᴀsᴛᴠɪᴅ
 
┣‣ ${prefix}ʀᴇᴠᴇʀsᴇᴠɪᴅ

┣‣ ${prefix}ᴛᴛs ᴇɴ
┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛

┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓
     🦋 𝐓 𝐀 𝐔 𝐑 𝐔 𝐒 🦋
┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛
` 
catlo(edit1)
      break
      case 'storagemenu':
        storage1 = `
┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓
     𝐒𝐓𝐎𝐑𝐀𝐆𝐄 𝐌𝐄𝐍𝐔 
┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛

┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓
┣‣ ${prefix}ᴀᴅᴅᴠɴ

┣‣ ${prefix}ᴀᴅᴅᴠɪᴅᴇᴏ

┣‣ ${prefix}ᴀᴅᴅᴠɪᴅᴇᴏ

┣‣ ${prefix}ᴀᴅᴅsᴛɪᴄᴋᴇʀ

┣‣ ${prefix}ʟɪsᴛᴠɴ

┣‣ ${prefix}ʟɪsᴛᴠɪᴅᴇᴏ

┣‣ ${prefix}ʟɪsᴛɪᴍᴀɢᴇ

┣‣ ${prefix}ʟɪsᴛsᴛɪᴄᴋᴇʀ

┣‣ ${prefix}ᴅᴇʟᴠɴ

┣‣ ${prefix}ᴅᴇʟᴠɪᴅᴇᴏ

┣‣ ${prefix}ᴅᴇʟɪᴍᴀɢᴇ

┣‣ ${prefix}ᴅᴇʟsᴛɪᴄᴋᴇʀ
┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛

┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓
     🦋 𝐓 𝐀 𝐔 𝐑 𝐔 𝐒 🦋
┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛
` 
catlo(storage1)
      break
      case 'extramenu':
      extra1 = `
┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓
       𝐄𝐗𝐓𝐑𝐀 𝐌𝐄𝐍𝐔
┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛

┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓
┣‣ ${prefix}ᴄʜᴀᴛ

┣‣ ${prefix}ғɪᴛɴᴀʜᴘᴄ

┣‣ ${prefix}ᴄᴏɴᴛᴀᴄᴛ

┣‣ ${prefix}ғᴏʀᴡᴀʀᴅ

┣‣ ${prefix}ғᴏʀᴡᴀʀᴅᴠɪᴅᴇᴏ

┣‣ ${prefix}ғᴏʀᴡᴀʀᴅᴀᴜᴅɪᴏ
┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛

┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓
     🦋 𝐓 𝐀 𝐔 𝐑 𝐔 𝐒 🦋
┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛
` 
catlo(extra1)
     break
     case 'downloadmenu':
     download1 = `
┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓
    𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐌𝐄𝐍𝐔
┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛

┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓
┣‣ ${prefix}ᴘʟᴀʏ

┣‣ ${prefix}ʏᴛᴍᴘ3

┣‣ ${prefix}ʏᴛᴍᴘ4

┣‣ ${prefix}ɪɢᴅʟ

┣‣ ${prefix}ʏᴛsᴇᴀʀᴄʜ

┣‣ ${prefix}ɪɢsᴛᴏʀʏ

┣‣ ${prefix}sᴄᴘʟᴀʏ

┣‣ ${prefix}ᴘɪɴᴛᴇʀᴇsᴛ

┣‣ ${prefix}ᴛᴇʟᴇsᴛɪᴄᴋᴇʀ

┣‣ ${prefix}ɢɪᴛʜᴜʙsᴇᴀʀᴄʜ

┣‣ ${prefix}ɢᴏᴏɢʟᴇɪᴍᴀɢᴇ

┣‣ ${prefix}ʏᴛᴅᴇsᴋ

┣‣ ${prefix}ʟʏʀɪᴄ

┣‣ ${prefix}ᴘʟᴀʏsᴛᴏʀᴇ

┣‣ ${prefix}ᴍᴇᴅɪᴀғɪʀᴇ

┣‣ ${prefix}ғʙ

┣‣ ${prefix}ᴛɪᴋᴛᴏᴋɴᴏᴡɴ

┣‣ ${prefix}ᴛɪᴋᴛᴏᴋᴀᴜᴅɪᴏ

┣‣ ${prefix}ᴛɪᴋᴛᴏᴋᴅʟ

┣‣ ${prefix}ᴛᴡɪᴛᴛᴇʀ

┣‣ ${prefix}ᴛɪɴʏᴜʀʟ

┣‣ ${prefix}ɢᴏᴏɢʟᴇ
┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛

┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓
     🦋 𝐓 𝐀 𝐔 𝐑 𝐔 𝐒 🦋
┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛
` 
catlo(download1)
    break

    
   case 'rules':
           rules1 = `
┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓
             𝐑𝐔𝐋𝐄𝐒
┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛

┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓
┣‣ ᴅᴏɴ'ᴛ sᴘᴀᴍ ʙᴏᴛ

┣‣ ᴅᴏɴ'ᴛ ᴄᴀʟʟ ʙᴏᴛ

┣‣ ᴅᴏɴ'ᴛ ᴍɪss ᴜsᴇ ʙᴏᴛ

┣‣ ᴀɴʏ ᴘʀᴏʙʟᴇᴍ ᴄᴏɴᴛᴀᴄᴛ
┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛

┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓
     🦋 𝐓 𝐀 𝐔 𝐑 𝐔 𝐒 🦋
┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛
`
       osk = bosco.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 1000, "message": `${rules1}`, "footerText": "hehe", "thumbnail": taurus, "surface": 'CATALOG'}}, {quoted: ftroli})
            bosco.relayWAMessage(osk)
       break
   case 'credits':
      credits1= `
┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓
     𝐓𝐀𝐔𝐑𝐔𝐒 𝐂𝐑𝐄𝐃𝐈𝐓𝐒
┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛

┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓
┣‣ wa.me/918157849715

┣‣ wa.me/919961050829
┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛

┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓
     🦋 𝐓 𝐀 𝐔 𝐑 𝐔 𝐒 🦋
┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛
` 
catlo(credits1)
      break
//------------------< Sticker Cmd >-------------------

       case 'addcmd': 
       case 'setcmd':
              if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
              if (isQuotedSticker) {
              if (!q) return reply(`Use : ${command} cmd and tag sticker`)
              var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
              addCmd(kodenya, q)
              textImg("Done!")
              } else {
              reply('*Reply To Sticker*')
              }
              break
       case 'delcmd':
              if (!isQuotedSticker) return reply(`Use : ${command} Reply Sticker`)
              var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
              _scommand.splice(getCommandPosition(kodenya), 1)
              fs.writeFileSync('./database/scommand.json', JSON.stringify(_scommand))
              textImg("Done!")
              break
       case 'listcmd':
              let teksnyee = `*「 LIST STICKER CMD 」*`
              let cemde = [];
              for (let i of _scommand) {
              cemde.push(i.id)
              teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`
               }
              mentions(teksnyee, cemde, true)
              break
//------------------< Bot Owner >-------------------

        case 'clearall':
					anu = await bosco.chats.all()
					bosco.setMaxListeners(25)
					for (let _ of anu) {
					 bosco.deleteMessage(_.jid)
					}
					reply('*done*')
					break
         case 'setprefix':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
				prefix = args.join(' ')
				bosco.sendMessage(from, `*Succes Changing Prefix :* *${prefix}*`, text, {quoted: ftoko, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
				break
         case 'getquoted':
             reply(JSON.stringify(mek.message.extendedTextMessage.contextInfo, null, 3))
             break
         case 'gc':
       case 'group':
        rows = [
           {title: '𝐎𝐏𝐄𝐍', description: "ᴛᴏ sᴇᴛ ᴇᴠᴇʀʏʙᴏᴅʏ ᴄᴀɴ sᴇɴᴅ ᴍᴇssᴀɢᴇ", rowId: `OPEN`},
           {title: '𝐂𝐋𝐎𝐒𝐄', description: "ᴛᴏ sᴇᴛ ᴏɴʟʏ ᴀᴅᴍɪɴs ᴄᴀɴ sᴇɴᴅ ᴍᴇssᴀɢᴇ", rowId: `CLOSE`},
           {title: '𝐎𝐍', description: "ᴛᴏ ᴛᴜʀɴ ᴏɴ ᴛʜᴇ ᴅɪsᴀᴘᴘᴇᴀʀɪɴɢ ᴍᴇssᴀɢᴇ", rowId: `on`},
           {title: '𝐎𝐅𝐅', description: "ᴛᴏ ᴛᴜʀɴ ᴏғғ ᴛʜᴇ ᴅɪsᴀᴘᴘᴇᴀʀɪɴɢ ᴍᴇssᴀɢᴇ", rowId: `off`}]
          section = [{title: "sᴜʙsᴄʀɪʙᴇ ᴛᴀᴜʀᴜsᴇᴅɪᴛs ғᴏʀ ɢᴇᴛ ᴛʜɪs ʙᴏᴛ", rows: rows}]
          button = {buttonText: 'SELECT', description: `\n\n*ɢʀᴏᴜᴘ [ᴏᴘᴇɴ/ᴄʟᴏsᴇ]*\n\n*ᴅɪsᴀᴘᴘᴇᴀʀ ᴍᴇssᴀɢᴇ [ᴏɴ/ᴏғғ]*`,
          sections: section, listType: 1}
          if (!isGroup) return reply('*this feature is only for groups*')
					if (!isGroupAdmins) return reply('*only admin can use this feature*')
					bosco.sendMessage(from, button, MessageType.listMessage, {quoted: ftroli})
                    break
         case 'online':
            if (!isOwner && !mek.key.fromMe) return
				offline = false
				fgclink('*BOT ONLINE*')
				break
          case 'offline':
            if (!mek.key.fromMe) return 
            offline = true
            waktu = Date.now()
            anuu = args.join(' ') ? args.join(' ') : '-'
            alasan = anuu
            fgclink('*BOT OFFLINE*')
            break   
          case 'tobc':
// by taurus😅
					bosco.updatePresence(from, Presence.composing)
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
						 if (args.length < 1) return reply(`*Reply to a audio/sticker/video with link* 
*Example :  ${prefix}${command} https://youtu.be/4mWfR23qFuA ,*`) 
                    var pepe = q
					anu = await bosco.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
					const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					buff = await bosco.downloadMediaMessage(encmedia)
					for (let _ of anu) {
					bosco.sendMessage(_.jid, buff, MessageType.audio, { quoted: ftroli, mimetype: 'audio/mp4', duration: '359996400', ptt: true, contextInfo: { forwardingScore: 1, isForwarded: true, externalAdReply:{title: `🦋 𝐓 𝐀 𝐔 𝐑 𝐔 𝐒 🦋`,body:"*ʟᴏᴠᴇ ғʀᴏᴍ ᴛᴀᴜʀᴜs*",mediaType:"2",thumbnail: dfrply, mediaUrl:`${pepe}`}}})
					}
					}
					break
               case 'restart':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
reply(`*Restarting*`)
exec(`cd &&  node main`)
sleep(4000)
reply('*Success*')
break
      case "setbgmpic":
      if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
        if (
          ((isMedia && !mek.message.videoMessage) ||
            isQuotedImage ||
            isQuotedSticker) &&
          args.length == 0
        ) {
          boij =
            isQuotedImage || isQuotedSticker
              ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo
              : mek;
          delb = await bosco.downloadMediaMessage(boij);
          fs.writeFileSync(`./hemme.jpg`, delb);
          reply("Success");
        } else {
          reply(`Send a picture with a caption ${prefix}sethumb`);
        }
        break
      case "setthumb":
      if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
        if (
          ((isMedia && !mek.message.videoMessage) ||
            isQuotedImage ||
            isQuotedSticker) &&
          args.length == 0
        ) {
          boij =
            isQuotedImage || isQuotedSticker
              ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo
              : mek;
          delb = await bosco.downloadMediaMessage(boij);
          fs.writeFileSync(`./ds.jpg`, delb);
          reply("Success");
        } else {
          reply(`Send a picture with a caption ${prefix}sethumb`);
        }
        break
        case 'exif':
             if (args.length == 0) return reply(`Ex:- ${prefix}exif Taurus Ser`)
             if (!isOwner) return  reply(mess.only.owner)
             if (!q) return reply(mess.wrongFormat)
             if (!arg.split('|')) return reply(`Use ${prefix}exif nama|author`)
             exif.create(arg.split('|')[0], arg.split('|')[1])
             reply('*Succes*')
             break	
          case 'axif':
                    if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					const exifff = `${args.join(' ')}`
					const namaPack = exifff.split('|')[0]
					const authorPack = exifff.split('|')[1]
					exif.create(namaPack, authorPack)
					await reply('Done gan')
				break
     case 'searchmsg':  //by ANU TEAM
             if (args.length < 1) return reply(`*What Message Are You Looking For?*\n*Example* : ${prefix + command} halo|10`)
             teks = arg
             if (teks.includes("|")) { 
             try {
             var ve = teks.split("|")[0]
             var za = teks.split("|")[1]
             sampai = `${za}`
             if (isNaN(sampai)) return reply('*Must be a Number!*')
             batas = parseInt(sampai) + 1
             if (batas > 30) return reply('*Max 30!*')
             reply(mess.wait)
             cok = await bosco.searchMessages(`${ve}`, from, batas,1) 
             if (cok.messages.length < 2) return reply('*Message Not Found*') 
             if (cok.messages.length < parseInt(batas)) reply(`*Found Only* ${cok.messages.length - 1} *Message*`)
             for (i=1;i < cok.messages.length;i++) {
             if (cok.messages[i].message) {
             bosco.sendMessage(from, `*Found..!*`, text, {sendEphemeral: true, quoted: cok.messages[i]}) 
}
}
             } catch (e) {
             return reply(String(e))
}
             } else {
             reply(`*The format is wrong tod, this is an example of the correct format* : ${prefix + command} halo|10`)
}
             break
     case 'seenby':
             if(!isGroup) return reply(mess.only.group)
             try {
             infom = await bosco.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
             tagg = []
             teks = `*• Read by :*\n\n`
             for(let i of infom.reads){
             teks += '@' + i.jid.split('@')[0] + '\n'
             teks += `> ` + moment(`${i.t}` * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY hh:mm:ss') + '\n\n'
             tagg.push(i.jid)
}
             teks += `*• Delivered to :*\n\n`
             for(let i of infom.deliveries){
             teks += '@' + i.jid.split('@')[0] + '\n'
             teks += `> ` + moment(`${i.t}` * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY hh:mm:ss') + '\n\n'
             tagg.push(i.jid)
}
             mentions(teks, tagg, true)
             } catch (e) {
             console.log(color(e))
             reply('*Reply chat bot!*')
}
             break
      case 'leave':
              if (!isGroup) return reply(mess.only.group)
              setTimeout( () => {
              bosco.groupLeave(from) 
              }, 2000)
              setTimeout( () => {
              reply('*Byee all..:(* 🚶')
              }, 0)
              break
       case 'online':
       case 'listonline':
       case 'here':                
             if (!isGroup) return reply(`*Only group*`)
             try {
             let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
             let online = [...Object.keys(bosco.chats.get(ido).presences), bosco.user.jid]
             bosco.sendMessage(from, '*List Online:*\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: ftroli, contextInfo: { mentionedJid: online }})
             } catch (e) {
             reply(`${e}`)
}
             break
      case 'join': 
             if (args.length == 0) return reply(`Ex:- ${prefix}join https://chat.whatsapp.com`)
             if (!q) return reply('*The link?*')
             if (!isOwner) return reply(mess.only.owner)
             if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('*The link is invalid Tod*')
             link = args[0].replace('https://chat.whatsapp.com/','')
             fak = bosco.query({ json: ['action', 'invite', link],
             expect200: true })
             reply('*Successfully Entered Group*')
             break
      case 'readall':
					if (!mek.key.fromMe) return reply('```OWNER ONLY```')
					var chats = await bosco.chats.all()
                    chats.map( async ({ jid }) => {
                          await bosco.chatRead(jid)
                    })
					rdl = `*Successfully read ${chats.length} Chat !*`
					await bosco.sendMessage(from, rdl, MessageType.text, {quoted: ftroli})
					console.log(chats.length)
					break
      case 'imgtourl':
       case 'img2url':
               reply(mess.wait) 
               var imgbb = require('imgbb-uploader')
               var encmediahe  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               var mediahe = await  bosco.downloadAndSaveMediaMessage(encmediahe)       
               imgbb('39d895963468b814fad0514bd28787e2', mediahe)
              .then(data => {
               var caps = `*IMAGE TO URL*\n\n*~>  ID :* ${data.id}\n*~>  MimeType :* ${data.image.mime}\n*~>  Extension :* ${data.image.extension}\n*~>  URL :* ${data.display_url}`
               ibb = fs.readFileSync(mediahe)
               bosco.sendMessage(from, ibb, image, { quoted: ftroli, caption: caps})
})
              .catch(err => {
               throw err
})
               break
      case 'term':
             if (!isOwner) return
             if (args.length == 0) return reply(`Ex:- ${prefix}term sendKontak`)
             if (!q) return
             exec(q, (err, stdout) => {
             if (err) return reply(`${err}`)
             if (stdout) {
             reply(stdout)
}
})
             break 
      case 'rall':
				const readallid = await bosco.chats.all()
			bosco.setMaxListeners(25)
				for (let xyz of readallid) {
					await bosco.chatRead(xyz.jid)
				}
		      bosco.sendMessage(from, `Success!`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": "Berhasil membaca semua chat!", 'jpegThumbnail': fs.readFileSync('./ds.jpg')}}}})
              break
      case 'shutdown':
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				return bosco.sendMessage(from, JSON.stringify(eval(process.exit())))
				reply('Okey')
				break
      case 'leaveall':
             if (!isOwner) return  
             let totalgroup = bosco.chats.array.filter(u => u.jid.endsWith('@g.us')).map(u => u.jid)
             for (let id of totalgroup) {
             sendMess(id, 'Byee', null)
             await sleep(3000)
             bosco.groupLeave(id)
}
             break
       case 'culik':
              if (!isOwner) return
              if (args.length < 1) return reply('*Enter the group id lol*')
              let pantek = []
              for (let i of groupMembers) {
              pantek.push(i.jid)
}
              bosco.groupAdd(args[0], pantek)
              break
     
      case 'hidetag':
             try {
             quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
             hideTag(from, `${quotedText}`)
             } catch {
             hideTag(from, `${q}`)
}
             break
       case 'taurus':
              if (!q) return
              qq = q.toUpperCase()
              awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, Taurus Poli Ahn ${qq} Taurus Killadi Ahnu ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
              reply(awikwok)
              break
        case 'jadibot':
client.version = [2, 2119, 6]
client.browserDescription = ['TAURUS V4.0','Desktop','3.0']
if (args[0] && args[0].length > 200) {
	let json = Buffer.from(args[0], 'base64').toString('utf-8')
    let obj = JSON.parse(json)
    await client.loadAuthInfo(obj)
}
try {
client.on('qr' ,async qr => {
qrbot = await qrkode.toDataURL(qr, { scale: 8 })
buffqr = await Buffer.from(qrbot.split('data:image/png;base64,')[1], 'base64')
await fs.writeFileSync(`./jadibot@${sender}.jpg`, buffqr)
let scen = await bosco.sendMessage(from, fs.readFileSync(`./jadibot@${sender}.jpg`), MessageType.image, {quoted : ftroli,caption: 'Scan QR ini untuk jadi bot sementara!\n1. Klik titik tiga di pojok kanan atas\n2. Ketuk WhatsApp Web\n3. Scan QR ini \n\nQR Expired dalam 20 detik'})    
setTimeout(() => {
       bosco.deleteMessage(from, scen.key)
  }, 30000);
})  
client.on ('open', async () => {
  console.log ('credentials update')
  const authInfo = client.base64EncodedAuthInfo()
  fs.writeFileSync(`./sampah/${sender}.json`, JSON.stringify(authInfo  ,null, '\t'))
  await client.sendMessage('0@s.whatsapp.net', `Kamu bisa login tanpa qr dengan pesan dibawah ini`, MessageType.extendedText)
  client.sendMessage('0@s.whatsapp.net', `${prefix}${command} ${Buffer.from(JSON.stringify(authInfo)).toString('base64')}`, MessageType.extendedText)
})
client.on('chat-update', async (chat) => {
	require('./Taurus.js')(client, chat)
})    
await client.connect().then(async ({user}) => {
reply('Berhasil tersambung dengan WhatsApp - mu.\n*NOTE: Ini cuma numpang*\n' + JSON.stringify(user, null, 2))
})
} catch {
reply('Error! hanya 1 orang yang dapat mengakses fitur jadibot')
}
break
       case 'stopjadibot':
             stopjadibot(reply)
             break
      case 'listbot':
      case 'listjadibot':
          text = '*「 LIST JADIBOT 」*\n\n'
             for(let i of listjadibot) {
             text += `*Number* : ${i.jid.split('@')[0]}
*Name* : ${i.name}
*Device* : ${i.phone.device_manufacturer}
*Model* : ${i.phone.device_model}\n\n`
}
            reply(text)
            break

//------------------< Editing/Audio/Video >-------------------

                case 'tr':
                case 'translate':
                    if (args.length == 0) return reply(`Example: ${prefix + command} en apa`)
                    kode_negara = args[0]
                    args.shift()
                    teks = args.join(" ")
                    translate(`${teks}`,{to:`${kode_negara}`}).then( res => {
                    ini_txt = `*Translate*
                     Lng : ${res.from.language.iso}
                     result : ${res.text}`
                     reply(ini_txt)
                     })
                     break    
               case 'secvn':
                    reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await bosco.downloadAndSaveMediaMessage(encmedia)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(media)
					bosco.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:ftroli})
					fs.unlinkSync(media)
				    break
				case 'secvideo':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await bosco.downloadAndSaveMediaMessage(encmedia)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(media)
					bosco.sendMessage(from, hah, video, {mimetype: 'video/mp4', duration: cokmatane, quoted: ftroli})
					fs.unlinkSync(media)
				    break
               case 'me':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await bosco.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) return reply('*_ғᴀɪʟᴅ ᴛᴏ ᴄᴏɴᴠᴇʀᴛ ᴘᴛᴛ_*')
					topt = fs.readFileSync(ran)
					bosco.sendMessage(from, topt, audio, { mimetype: 'audio/mp4', ptt: true, quoted: ftroli })
					})
					break
               case 'take':
              case 'colong':
                    if (!isQuotedSticker) return reply('*Just a sticker*')
                    encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		            media = await bosco.downloadAndSaveMediaMessage(encmedia)
                    anu = args.join(' ').split('|')
                    satu = anu[0] !== '' ? anu[0] : `Tꫝᴜʀᴜs`
                    dua = typeof anu[1] !== 'undefined' ? anu[1] : `Sᴇʀ`
                    require('./lib/fetch.js').createExif(satu, dua)
			        require('./lib/fetch.js').modStick(media, bosco, mek, from)
			        break
             case 'fastvid':
		            if (!isQuotedVideo) return fakeitem('Reply videonya!')
		            fakegroup(mess.wait)
		            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            media = await bosco.downloadAndSaveMediaMessage(encmedia)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
		            fs.unlinkSync(media)
		            if (err) return fakegroup(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            bosco.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: ftroli })
		            fs.unlinkSync(ran)
		            })
		            break
		    case 'slowvid':
		            if (!isQuotedVideo) return fakeitem('Reply video!')
		            fakegroup(mess.wait)
		            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            media = await bosco.downloadAndSaveMediaMessage(encmedia)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
		            fs.unlinkSync(media)
		            if (err) return fakegroup(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            bosco.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: ftroli })
		            fs.unlinkSync(ran)
		            })
		            break
		    case 'reversevid':
		            if (!isQuotedVideo) return fakeitem('```Reply videonya!```')
		            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            media = await bosco.downloadAndSaveMediaMessage(encmedia)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
		            fs.unlinkSync(media)
		            if (err) return fakegroup(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            bosco.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: ftroli })
		            fs.unlinkSync(ran)
		            })
		            break
             case 'nightcore':
	                 if (!isQuotedAudio) return reply('Reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await bosco.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						bosco.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: ftoko,duration:11})
						fs.unlinkSync(ran)
					   })
				       break 
		    
             case 'imut':
             case 'baby':
                   if (!isQuotedAudio) return fgclink('reply to audio')
				    encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				    media = await bosco.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af atempo=3/4,asetrate=44508*4/3 ${ran}`, (err, stderr, stdout) => {
				    fs.unlinkSync(media)
					if (err) return reply('Error!')
					hah = fs.readFileSync(ran)
					bosco.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: ftroli})
					fs.unlinkSync(ran)
			        })
				     break
           case 'cm':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await bosco.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} "origin(rgb24).png" -c:v libx264 -preset placebo -qp 0 -x264-params "keyint=15:no-deblock=1" -pix_fmt yuv444p10le -sws_flags spline+accurate_rnd+full_chroma_int -vf "colormatrix=bt470bg:bt709" -color_range 1 -colorspace 1 -color_primaries 1 -color_trc 1 "colormatrix_yuv444p10le.avi" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						bosco.sendMessage(from, hah, video, { mimetype: 'video/mp4', quoted: ftoko })
					})
					break
           case 'fast':
                     if (!isQuotedAudio) return fgclink('reply to audio')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await bosco.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.3,asetrate=43000" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						bosco.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: ftext})
						fs.unlinkSync(ran)
					})
					break
             case 'gemes':
                    if (!isQuotedAudio) return fgclink('reply to audio')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await bosco.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=50000" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
					bosco.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: fgc})
						fs.unlinkSync(ran)
					})
					break
            case 'balik':
            case 'reverse':
                  if (!isQuotedAudio) return fgclink('reply to audio')
	              encmediau = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	              mediau = await bosco.downloadAndSaveMediaMessage(encmediau)
	              ran = getRandom('.mp3')
	              exec(`ffmpeg -i ${mediau} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {
                  fs.unlinkSync(mediau)
                  if (err) return reply('Error!')
                  hah = fs.readFileSync(ran)
                  bosco.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 359996400, quoted:ftroli})
                  fs.unlinkSync(ran)
	              })
                  break
            case 'bass':
            case 'volume':
                    if (!isQuotedAudio) return fgclink('reply to audio')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await bosco.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=65:width_type=o:width=3:g=20 ${ran}`, (err, stderr, stdout) => {
					fs.unlinkSync(media)
					if (err) return reply('Error!')
					hah = fs.readFileSync(ran)
					bosco.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: ftroli })
					fs.unlinkSync(ran)
				     })
				    break
             case 'slow':
                    if (!isQuotedAudio) return fgclink('reply to audio')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await bosco.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=43120" ${ran}`, (err, stderr, stdout) => {
					fs.unlinkSync(media)
					if (err) return reply('Error!')
					hah = fs.readFileSync(ran)
					bosco.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: ftroli })
					fs.unlinkSync(ran)
					 })
				    break
                case 'squirrel':
					 encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					 media = await bosco.downloadAndSaveMediaMessage(encmedia)
					 ran = getRandom('.mp3')
					 exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
					fs.unlinkSync(media)
					if (err) return reply('Error!')
					hah = fs.readFileSync(ran)
					bosco.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: ftroli })
					fs.unlinkSync(ran)
					 })
				    break
				case 'blub':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await bosco.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
					fs.unlinkSync(media)
					if (err) return reply('Error!')
					hah = fs.readFileSync(ran)
					bosco.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', duration: 359996400, ptt: true, quoted: ftroli })
					fs.unlinkSync(ran)
					 })
				    break
				case 'fat':
	                 if (!isQuotedAudio) return reply('*_ʀᴇᴘʟʏ ᴛᴏ ᴀᴜᴅɪᴏ_*')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await bosco.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.1,asetrate=35101" ${ran}`, (err, stderr, stdout) => {
					fs.unlinkSync(media)
					if (err) return reply('*ʀᴇᴛʀʏ!*')
					hah = fs.readFileSync(ran)
					bosco.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: ftroli })
					fs.unlinkSync(ran)
				     })
				     break
      case 'tomp4':
					if (!isQuotedSticker) return reply('Reply stiker nya')
                                        reply(mess.wait)
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            owgi = await bosco.downloadAndSaveMediaMessage(ger)
            webp2mp4File(owgi).then(res=>{
            sendMediaURL(from,res.result)
            })
            }else {
            reply('Reply Stickernya!')
            }
            fs.unlinkSync(owgi)
            break
        case 'tomp3':
        case 'mp3':
					bosco.updatePresence(from, Presence.composing)
					encmediad = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					mediad = await bosco.downloadAndSaveMediaMessage(encmediad)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${mediad} ${ran}`, (err) => {
						fs.unlinkSync(mediad)
						if (err) return reply(mess.error.api)
						mhee = fs.readFileSync(ran)
						bosco.sendMessage(from, mhee, audio, { mimetype: 'audio/mp4', duration: 4, quoted: ftroli })
						fs.unlinkSync(ran)
					})
					break
      case 'kick':
if (!isOwner && !isGroupAdmins) return reply('*ᴏɴʟʏ ᴀᴅᴍɪɴs ᴄᴀɴ*')
if (!isBotGroupAdmins) return reply('*ʙᴏᴛ ɪs ɴᴏᴛ ᴀᴅᴍɪɴ ғᴏʀ ᴛʜᴀᴛ!*')
if (!isGroup) return
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (entah.length > 1) {
var mems_ids = []
for (let ids of entah) {
mems_ids.push(ids)
}
bosco.groupRemove(from, mems_ids)
} else {
bosco.groupRemove(from, [entah[0]])
}
} else {
entah = mek.message.extendedTextMessage.contextInfo.participant
bosco.groupRemove(from, [entah])
}
break
case 'add':
      if (!isOwner && !isGroupAdmins) return reply('*ᴏɴʟʏ ᴀᴅᴍɪɴs ᴄᴀɴ*')
if (!isBotGroupAdmins) return reply('*ʙᴏᴛ ɪs ɴᴏᴛ ᴀᴅᴍɪɴ ғᴏʀ ᴛʜᴀᴛ!*')
if (!isGroup) return
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (entah.length > 1) {
var memu_ido = []
for (let ids of entah) {
mems_ids.push(ido)
}
bosco.groupAdd(from, memu_ido)
} else {
bosco.groupAdd(from, [entah[0]])
}
} else {
entah = mek.message.extendedTextMessage.contextInfo.participant
bosco.groupAdd(from, [entah])
}
break
case 'promote':
if (!isGroupAdmins) return reply('*Admin Group Only*')
if (!isBotGroupAdmins) return reply('*Bot not admin!*')
if (!isGroup) return
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (entah.length > 1) {
var memi_idi = []
for (let ids of entah) {
memi_idi.push(idi)
}
bosco.groupMakeAdmin(from, memi_idi)
} else {
bosco.groupMakeAdmin(from, [entah[0]])
}
} else {
entah = mek.message.extendedTextMessage.contextInfo.participant
bosco.groupMakeAdmin(from, [entah])
}
break
case 'demote':
      if (!isOwner && !isGroupAdmins) return reply('*Admin Group Only*')
if (!isBotGroupAdmins) return reply('*Bot not admin!*')
if (!isGroup) return
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (entah.length > 1) {
var memu_ido = []
for (let idk of entah) {
memk_idk.push(idk)
}
bosco.groupDemoteAdmin(from, memk_idk)
} else {
bosco.groupDemoteAdmin(from, [entah[0]])
}
} else {
entah = mek.message.extendedTextMessage.contextInfo.participant
bosco.groupDemoteAdmin(from, [entah])
}
break
								
      case 'bc':
// by taurus 😜🖕
					case 'broadcast':
					bosco.updatePresence(from, Presence.composing)
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('*Where is Text?*')
					anu = await bosco.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
					     encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await bosco.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							bosco.sendMessage(_.jid, buff, image, { caption: `${body.slice(4)}`})
						}
						reply(`*Broadcast success* ${body.slice(4)}`)
						} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						 encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await bosco.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							bosco.sendMessage(_.jid, buff, video, { caption: `${body.slice(4)}`})
						}
						reply(`*Broadcast success* ${body.slice(4)}`)
						} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						 encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await bosco.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							bosco.sendMessage(_.jid, buff, video, { mimetype: Mimetype.gif, quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `${body.slice(4)}` })
						}
						reply(`*Broadcast success* ${body.slice(4)}`)
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `${body.slice(4)}`)
						}
						reply(`*Broadcast success*:\n${body.slice(4)}`)
					}
					break
       case 'contact':
				if (!isGroup) return reply(mess.group)
					argzu = arg.split('|')
				if (!argzu) return reply(`*Use ${prefix}contact @tag|name*`)
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					sendKontak(from, mentioned[0].split('@')[0], argzu[1])
				} else {
					sendKontak(from, argzu[0], argzu[1])
				}
				break
       case 'sharelock':
kntl = `${args.join(' ')}`
nama = kntl.split("|")[0];
impostor = kntl.split("|")[1];
bosco.sendMessage(from, {
name: nama,
address: impostor,
jpegThumbnail: taurus}, MessageType.liveLocation, {quoted:floc2})
break
       case 'getdeskgc':
				if (!isGroup) return reply(mess.group)
				anu = from
			   metadete = await bosco.groupMetadata(anu)
				bosco.sendMessage(from, metadete.desc, MessageType.text, {quoted:fgif})
				  break
					case 'getbio':
	                  var yy = mek.message.extendedTextMessage.contextInfo.participant
                       var p = await bosco.getStatus(`${yy}`, MessageType.text, {quoted: ftroli})
                        reply(p.status)
                         if (p.status == 401) {
                          reply(mess.error.api)
                          }
                          break
           case 'chat':
			if (args[0].startsWith('08')) return reply('*Prefix number with 91*')
            if (args[0].startsWith('+91')) return reply('*Prefix number with 91*')
			if (args.length < 1) return reply(`Penggunaan ${prefix}chat 91xxxx|teks`)
            var pc = body.slice(6)
            var nomor = pc.split("|")[0];
            var org = pc.split("|")[1];
            bosco.sendMessage(nomor+'@s.whatsapp.net', org, MessageType.text)   
            reply(`*Success in sending chat* :\n${org},@${nomor}`)
            break
                    case 'getname':
                      var ambl = mek.message.extendedTextMessage.contextInfo.participant
                      const sname = bosco.contacts[ambl] != undefined ? bosco.contacts[ambl].notify = undefined ? PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international') : bosco.contacts[ambl].notify || bosco.contacts[ambl].vname : PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international')
                       reply(sname)
                        break
      case 'toimg':
      case 'photo':
              if (!isQuotedSticker) return reply('*Reply To Sticker*')
              encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await bosco.downloadAndSaveMediaMessage(encmedia)
              ran = getRandom('.png')
              exec(`ffmpeg -i ${media} ${ran}`, (err) => {
              fs.unlinkSync(media)
              if (err) return reply('*Failed, when converting sticker to image*')
              buffer = fs.readFileSync(ran)
              bosco.sendMessage(from, buffer, image, {quoted: ftroli, thumbnail:taurus, caption: 'By Bosco'})
              fs.unlinkSync(ran)
})
              break
//------------------< Public/Self >-------------------

        case 'public':
          	if (!mek.key.fromMe) return 
          	if (banChats === false) return 
          	banChats = false
              fgclink(`*[ 𝐏𝐔𝐁𝐋𝐈𝐂 𝐌𝐎𝐃𝐄 𝐍𝐎𝐖 ]*`)
          	break
	case 'self':
          	if (!mek.key.fromMe) return 
          	if (banChats === true) return
          	uptime = process.uptime()
          	banChats = true
              fgclink(`*[ 𝐒𝐄𝐋𝐅 𝐌𝐎𝐃𝐄 𝐍𝐎𝐖 ]*`)
          	break

//------------------< Downloader/And Search Media >-------------------

       case 'igdl': 
       case 'instagram':
              if (!q) return reply('*Which Links?*')
              if (!q.includes('instagram')) return reply(mess.error.Iv)
              reply(mess.wait)
              anu = await igDownloader(`${q}`)
             .then((data) => { sendMediaURL(from, data.result.link, data.result.desc, mek) })
             .catch((err) => { reply(String(err)) })
              break
       case 'igstory': 
              if(!q) return reply('*Username?*')
              hx.igstory(q)
             .then(async result => {
              for(let i of result.medias){
              if(i.url.includes('mp4')){
              let link = await getBuffer(i.url)
              bosco.sendMessage(from,link,video,{quoted: ftroli,caption: `Type : ${i.type}`})
              } else {
              let link = await getBuffer(i.url)
              bosco.sendMessage(from,link,image,{quoted: ftroli,caption: `Type : ${i.type}`})                  
              }
              }
              });
              break
      case 'hehe':
      ratee = ["100","101","102","103","104","105","106","107","108","109","110","111","112","113","114","115","116","117","118","119","120"]
      const tee = ratee[Math.floor(Math.random() * ratee.length)]
      hemmo = fs.readFileSync(`mp3/100.mp3`)
      bosco.sendMessage(from, hemmo, audio, { mimetype: 'audio/mp4', ptt: true, quoted: ftroli})
      break
      case 'readmore':
      case 'more':
			    	const more = String.fromCharCode(8206)
			    	const readmore = more.repeat(4001)
				    if (!c.includes('|')) return  reply(mess.error.api)
                    const text1 = c.substring(0, c.indexOf('|') - 0)
                    const text2 = c.substring(c.lastIndexOf('|') + 1)
                    reply( text1 + readmore + text2)
                    break
        case 'lolkey':
        case 'cekapikey':
               if (args.length < 1) return reply(`*Type ${prefix}lolkey [Apikey]*`) 
               anu = await fetchJson(`https://lolhuman.herokuapp.com/api/checkapikey?apikey=${q}`)
               teks = `*YOUR APIKEY*\n\n➸ Ussername= ${anu.result.username}\n➸ Request= ${anu.result.requests}\n➸ Today= ${anu.result.today}\n➸ Account Type= ${anu.result.account_type}\n➸ Expired= ${anu.result.expired}\n➸ API = https://lolhuman.herokuapp.com`
               bosco.sendMessage(from, teks, text, {quoted: ftroli})
               break
       case 'pinterest':
         case 'pin':
              if (args.length < 1) return reply(`${prefix}Taurus Ser`)
              data = await fetchJson(`https://lolhuman.herokuapp.com/api/pinterest?apikey=${lolkey}&query=${q}`)
              buttons = [{buttonId: `${prefix + command} ${q}`,buttonText:{displayText: `ɴᴇxᴛ`},type:1}]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(data.result))
              imageMsg = ( await bosco.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Hello Sis Can i help u..', imageMessage: imageMsg,
              contentText:`*Search Results From : ${q}*`,buttons,headerType:4}
              prep = await bosco.prepareMessageFromContent(from,{buttonsMessage},{})
              bosco.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
       case 'yts':
       case 'ytsearch':
              if (!q) return reply(mess.wrongFormat)
              reply(mess.wait)
              try {
              res = await yts(q)
              a = `*Youtube Search 🔎*\n`
for (let i of res.all) {
a += `
📜 Title : ${i.title}
🎞️ Views : ${i.views}
🌐 Upload : ${i.ago}
⏱️ Duration : ${i.timestamp}
🎥 Channel : ${i.author.name}
🖇️ Link : ${i.url}\n`
}
               b = a.trim()
               sendFileFromUrl(res.all[0].image, image, {quoted: ftroli, thumbnail: Buffer.alloc(0), caption: b})
               } catch (e) {
               console.log(e)
               reply(`${e}`)
}
               break
        case 'scplay': 
       case 'soundcloud':
              if (!q) return reply('Which Links?')
              if (!q.includes('soundcloud')) return reply(mess.error.Iv)
              reply(mess.wait)
              anu = await fetchJson(`https://api.lolhuman.xyz/api/soundcloud?apikey=${lolkey}&url=${q}`)
             .then((data) => { sendMediaURL(from, data.result, data.title, mek) })
             .catch((err) => { reply(String(err)) })
              break
       case 'tourl':
               if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
               reply(mess.wait)
               boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               owgi = await bosco.downloadMediaMessage(boij)
               res = await uploadImages(owgi)
               reply(res)
               } else {
               reply('*_Send to Reply Pictures/Videos_*')
}
               break
       case 'telesticker': 
       case 'telestiker':
              if (!q) return reply(`Example: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
              reply(mess.wait)
              ini_url = await fetchJson(`https://api.lolhuman.xyz/api/telestick?apikey=${lolkey}&url=${args[0]}`)
              ini_sticker = ini_url.result.sticker
              reply('Sending '+ ini_sticker.length +' stickers...')
              for (sticker_ in ini_sticker) {
              ini_buffer = await getBuffer(ini_sticker[sticker_])
              bosco.sendMessage(from, ini_buffer, sticker, {})
}
              break
       case 'ghsearch': 
       case 'githubsearch': 
       case 'searchgithub':
             if (!q) return reply('*What are you looking for?*')
             res = await fetch('https://api.github.com/search/repositories?q='+q)
             json = await res.json()
             if (res.status !== 200) throw json
             str = json.items.map((repo, index) => {
             return `
${1 + index}. *${repo.full_name}*${repo.fork ? ' (fork)' : ''}
${repo.html_url}
Made on *${formatDate(repo.created_at)}*
Last updated on *${formatDate(repo.updated_at)}*
👁  ${repo.watchers}   🍴  ${repo.forks}   ⭐  ${repo.stargazers_count}
${repo.open_issues} Issue${repo.description ? `
*Description:*\n${repo.description}` : ''}
*Clone:* *$ git clone ${repo.clone_url}*
`.trim()
}).join('\n\n')
            reply(str)
            break
     case 'image':
     case 'gimage':
     case 'googleimage':
              if (args.length < 1) return reply('*What do you want to search?*')
              reply(mess.wait)
              teks = args.join(' ')
              res = await _gis(teks, google)
              function google(error, result){
              if (error){ return reply('*Error An Error Occurs Or No Result Found*')}
              else {
              gugIm = result
              random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
              sendFileFromUrl(random, image, {quoted: ftroli, thumbnail: Buffer.alloc(0), caption: `*Search Results From :* ${teks}`})
              }
              }
             break
      case 'youtube':
      case 'ytmp3':
      case 'yt':
      case 'video':
                            if (args.length === 0) return reply(`Kirim perintah *${prefix}video* _Judul video yang akan dicari_`)
                            const playi = await axios.get(`https://bx-hunter.herokuapp.com/api/yt/search?query=${body.slice(6)}&apikey=${HunterApi}`)
                            const mulaihah = playi.data.result[0].url
                            try {
                                reply(mess.wait)
                                ytv(mulaihah)
                                .then((res) => {
                                    const { dl_link, thumb, title, filesizeF, filesize } = res
                                    axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                                    .then(async (a) => {
                                    if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `‣ *ᴘʟᴀʏ ᴠɪᴅᴇᴏ*\n\n‣ *ᴛɪᴛʟᴇ* : ${title}\n‣ *ᴛʏᴘᴇ* : ᴍᴘ4\n*ғɪʟᴇsɪᴢᴇ* : ${filesizeF}\n*ʟɪɴᴋ* : ${a.data}\n\n*sᴏʀʀʏ ᴅᴜʀᴀᴛɪᴏɴ ᴇxᴄᴇᴇᴅᴇᴅ ᴛʜᴇ ᴍᴀx ʟɪᴍɪᴛ, ᴘʟᴇᴀsᴇ ᴄʟɪᴄᴋ ᴛʜᴇ ʟɪɴᴋ ᴀʙᴏᴠᴇ*`)
                                    sendFileFromUrl(dl_link, document, {mimetype: 'video/mp4', filename: `${title}.mp4`, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title:title,body:"",mediaType:"2",thumbnail:getBuffer(thumb),mediaUrl:"https://youtu.be/4mWfR23qFuA"}}}).catch(() => reply(mess.error.api))
                                    })
                                })
                            } catch (err) {
                                reply(mess.error.api)
                            }
                            break
      case 'tiktokdl':
              if (!q) return reply('The link?')
              if (!q.includes('tiktok')) return reply(mess.error.Iv)
              data = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=${lolkey}&url=${q}`)
              result = `*ɴɪᴄᴋɴᴀᴍᴇ*: ${data.result.author.nickname}\n*ʟɪᴋᴇ*: ${data.result.statistic.diggCount}\n*ᴄᴏᴍᴍᴇɴᴛs*: ${data.result.statistic.commentCount}\n*sʜᴀʀᴇ*: ${data.result.statistic.shareCount}\n*ᴠɪᴇᴡs*: ${data.result.statistic.playCount}\n*ᴅᴇsᴄ*: ${data.result.title}`
              buttons = [{buttonId: `${prefix}buttons3 ${q}`,buttonText:{displayText: `ᴠɪᴅᴇᴏ`},type:1},{buttonId:`${prefix}buttons4 ${q}`,buttonText:{displayText:'ᴀᴜᴅɪᴏ'},type:1}]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(data.result.thumbnail))
              imageMsg = ( await bosco.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Choose a format below', imageMessage: imageMsg,
              contentText:`${result}`,buttons,headerType:4}
              prep = await bosco.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
              bosco.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
      case 'ttnowm': 
      case 'tiktoknowm':
             if (!q) return reply('The link?')
             if (!q.includes('tiktok')) return reply(mess.error.Iv)
             reply(mess.wait)
             anu = await TiktokDownloader(`${q}`)
            .then((data) => { sendMediaURL(from, data.result.nowatermark) })
            .catch((err) => { reply(String(err)) })
             break
      case 'ttaudio': 
      case 'tiktokmusic': 
      case 'tiktokaudio':
             if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
             ini_link = args[0]
             get_audio = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${lolkey}&url=${ini_link}`)
             bosco.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: ftroli })
             break
      case 'google':
              if (!q) return reply(mess.wrongFormat)
              ss = await getBuffer(`https://api.apiflash.com/v1/urltoimage?access_key=f3fce33fa6804c0b97c897b3bd2ec7a8&url=https://google.com/search?q=${q}`)
              if(q == undefined || q == ' ') return reply(`*Search result : ${q}* not found`)
              googleIt({ 'query': q }).then(results => {
              vars = `_*Search result : ${q}*_\n`
              for (let i = 0; i < results.length; i++) {
              vars +=  `\n━━━━━━━━━━━━━━━━━\n\n*Title:* ${results[i].title}\n\n*Description:* ${results[i].snippet}\n\n*Link:* ${results[i].link}\n`
               }
               bosco.sendMessage(from, ss, image, {caption: vars, quoted : ftroli, thumbnail: Buffer.alloc(0) })
               }).catch(e => {
               console.log(e)
               reply(`${e}`)
               })
               break
       case 'tinyurl':
                 try {
                 link = args[0]
                 anu = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
                 reply(`${anu.data}`)
                  } catch (e) {
                 emror = String(e)
                 reply(`${e}`)
                 }
               break
        case 'mediafire':
               if (args.length < 1) return reply('*Where is the link?*')
               if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
               teks = args.join(' ')
               res = await mediafireDl(teks)
               result = `*MediaFire Downloader*
      
📜 Name : ${res[0].nama}
💡 Size : ${res[0].size}
🖇️ Link : ${res[0].link}
*_please wait_*`
             reply(result)
             sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: ftroli})
             break
      case 'fb':
      case 'facebook':
             if (args.length == 0) return reply(`Ex:- ${prefix}fb Legend `)
             if (!q) return
             reply(mess.wait)
             try {
             anu = await fetchJson(`https://zenzapi.xyz/api/downloader/facebook?url=${args[0]}&apikey=a10523bcf6`)
             sendMediaURL(from, anu.result.hd)
             } catch (e) {
             console.log(e)
             reply(`${e}`)
             }
             break
      case 'twitter':
             if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)
             if (!q) return reply('the link?')
             ten = args[0]
             var res = await twitterGetUrl(`${ten}`)
            .then(g => {
             ren = `${g.download[2].url}`
             sendMediaURL(from,ren,'Done')
             })
             break
      case 'lyric':
               if (!q) return reply(mess.wrongFormat)
               reply(mess.wait)
               lirikLagu(q).then((res) => {
               let lirik = `song lyrics ${q}

               ${res[0].result}
`
               reply(lirik)
})
               break
               case 'debug':
			 res = await bosco.prepareMessageFromContent(from,{
"templateMessage": {
						"hydratedTemplate": {
							"hydratedContentText": `Hi ${pushname} 👋,\n\n${jmn} - ${week} ${weton} - ${calender}`,
							"hydratedFooterText": `TAURUS-X3`,
							"hydratedButtons": [
								{
									"quickReplyButton": {
										"displayText": "LISTMENU",
										"id": "command"
									},
									"index": 0
								},
								{
									"urlButton": {
										"displayText": "SCRIPT",
										"url": "https://github.com/I-AM-MUHAMMED"
									},
									"index": 1
								},
								{
									"urlButton": {
										"displayText": "INSTAGRAM",
										"url": "https://instagram.com/taurus.efx"
									},
									"index": 2
								}
							]
						}
					}
				}, {}) 
bosco.relayWAMessage(res)
break
case 'debug2':
   res = await bosco.prepareMessageFromContent(from,{
"templateMessage": {
  "hydratedFourRowTemplate": {
    "hydratedContentText": "",
    "hydratedFooterText": "",
    "hydratedButtons": [
      {
        "urlButton": {
          "displayText": "",
          "url": ""
        },
        "index": 0
      }
    ]
  },
  "hydratedTemplate": {
    "hydratedContentText": `Hi ${pushname} ,\n\n${jmn} - ${week} ${weton} - ${calender}`,
    "hydratedFooterText": `TAURUS-X3`,
    "hydratedButtons": [
      {
        "urlButton": {
          "displayText": "SCRIPT",
          "url": "https://github.com/I-AM-MUHAMMED"
        },
        "index": 0
      }
    ]
  }
}
}, {})
bosco.relayWAMessage(res)
break
case 'viewonce':
res = await bosco.prepareMessageFromContent(from,{
"viewOnceMessage": {
"message": {
"imageMessage": {
"mimetype": 'image/jpeg',
"jpegThumbnail": dfrply,
"viewOnce": true
}
}
}
}, {}) 
bosco.relayWAMessage(res)
break
case 'fancytext':
				if (args.length < 1) return reply('Teksnya?')
anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/fancytext?text=${body.slice(11)}&apikey=${HunterApi}`, {method: 'get'})
teks = anu.result
reply(teks)
break
case 'tictactoe':
case 'ttt':
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply('ᴛᴀɢ ᴀɴʏ ᴍᴇᴍʙᴇʀ ғᴏʀ sᴛᴀʀᴛ ɢᴀᴍᴇ')
if (isTTT) return reply('ʏᴏᴜ ᴀʀᴇ ᴀʟʀᴇᴀᴅʏ ɪɴ ᴀ ɢᴀᴍᴇ ᴇɴᴅ ᴏʟᴅ ɢᴀᴍᴇ ᴛᴏ sᴛᴀʀᴛ ɴᴇᴡ')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('ᴛᴀɢ ᴛʜᴇ ᴛᴀʀɢᴇᴛ!')
ment = mek.message.extendedTextMessage.contextInfo.mentionedJid
player1 = sender
player2 = ment[0]
angka = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
id = from
gilir = player2
ky_ttt.push({player1,player2,id,angka,gilir})
bosco.sendMessage(from, `*🎳 sᴛᴀʀᴛɪɴɢ ᴛɪᴄ ᴛᴀᴄ ᴛᴏᴇ ɢᴀᴍᴇ 🎲*

[@${player2.split('@')[0]}] ʏᴏᴜ ᴡᴇʀᴇ ɪɴᴠɪᴛᴇᴅ ᴛᴏ ᴘʟᴀʏ ᴀ ɢᴀᴍᴇ ᴡɪᴛʜ ᴍᴇ

ᴛʏᴘᴇ ${prefix}endttt ᴛᴏ ᴇɴᴅ ᴛʜᴇ ɢᴀᴍᴇ !`, text, {contextInfo: {mentionedJid: [player2]}})
break
      case 'playstore':
              try {
              if (args.length == 0) return reply(`Send orders *${prefix}playstore [ apk ]*\nExample : ${prefix}playstore pubg`)
              query = args.join(" ")
              reply(mess.wait)
              get_result = await fetchJson(`https://api.zeks.xyz/api/sgplay?apikey=${zekskey}&q=${query}`)
              get_result = get_result.result
              teks = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *PLAYSTORE*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Successfully Obtained!*\n`
for(let i = 0; i < get_result.length; i++) {
teks += `*Title : ${get_result[i].title}*
*Price : ${get_result[i].price}*
*Rate : ${get_result[i].rating}*
*Link : ${get_result[i].url}*

`
}
              ini_buffer = await getBuffer(get_result[0].thumb)
              bosco.sendMessage(from, ini_buffer, image, { quoted: ftroli, caption: teks })
              } catch {
              reply(`Sorry app ${query} not found`)
}
              break
      case 'ytdesc':
             if (args.length < 1) return reply('*Where is the Yt Video/Link?*')
             teks = args.join(' ')
             res = await yts(teks)
             reply(res.all[0].description)
             break
      case 'buttons1':
              if (args.length < 1) return reply('*Where is the link?*')
              if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
              teks = args.join(' ')
              res = await y2mateA(teks)
              sendFileFromUrl(res[0].link, document, {quoted: ftroli, mimetype: 'audio/mp3', filename: res[0].output})
              break
     case 'buttons2':
              if (args.length < 1) return reply('Link Nya Mana?')
              if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
              teks = args.join(' ')
              res = await y2mateV(teks)
              sendFileFromUrl(res[0].link, video, {quoted: ftroli, mimetype: 'video/mp4', filename: res[0].output})
              break
     case 'buttons3': 
             if (!q) return reply('*Where is the link?*')
             if (!q.includes('tiktok')) return reply(mess.error.Iv)
             data = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=${lolkey}&url=${q}`)
             ini_video = await getBuffer(data.result.link)
             bosco.sendMessage(from, ini_video, video, { quoted: ftroli })
             break
      case 'buttons4': 
             if (!q) return reply('*Where is the link?*')
             if (!q.includes('tiktok')) return reply(mess.error.Iv)
             data = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${lolkey}&url=${args[0]}`)
             bosco.sendMessage(from, data, audio, { quoted: ftroli })
             break
             case 'delttt':
                case 'endttt':
if (!isGroup) return reply(mess.only.group)
if (!isTTT) return reply('Tidak Ada Permainan Di Grub Ini')
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa 
reply('Success')
break
             
      case 'alive':
              bosco1 = await bosco.prepareMessage(from, taurus, location, {thumbnail: taurus})
              bosco2 = bosco1.message["ephemeralMessage"] ? bosco1.message.ephemeralMessage : bosco1
              groups = bosco.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = bosco.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'charging' : 'not charging'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await bosco.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
teks = `


‣ *ɪ ᴀᴍ sᴛɪʟʟ ᴀʟɪᴠᴇ ʙʀᴏ_☘︎*


‣ *sᴘᴇᴇᴅ :-*
➪ ${latensie.toFixed(4)} Second


‣ *ʀᴀᴍ Usᴀɢᴇ :-*
➪ ${ram2}


‣ *ʙᴀᴛᴛᴇʀʏ :-*
➪ ${baterai}% ${charger}


‣ *ᴘʟᴀᴛғᴏʀᴍ :-*
➪ ${os.platform()}


‣ *ᴜᴘᴛɪᴍᴇ :-*
➪ ${runtime(process.uptime())}


‣ *ᴡᴀ ᴠᴇʀsɪᴏɴ :-*
➪ ${bosco.user.phone.wa_version}


‣ *ᴏs ᴠᴇʀsɪᴏɴ :-*
➪ ${bosco.user.phone.os_version}


‣ *ᴅᴇᴠɪᴄᴇ ᴍᴀɴᴜғᴀᴄᴛᴜʀᴇ :-*
➪ ${bosco.user.phone.device_manufacturer}


‣ *ᴅᴇᴠɪᴄᴇ ᴍᴏᴅᴇʟ :-*
➪ ${bosco.user.phone.device_model}
`
                 taurusbutton = [{buttonId:`${prefix}🙌`,buttonText:{displayText:'🙌'},type:1},
]
mhan = await bosco.prepareMessage(from, frply, video, {thumbnail: frply})
const taurus1 = {
videoMessage: mhan.message.videoMessage,
contentText: `${teks}`,
footerText: `𝑳𝒐𝒗𝒆 𝑭𝒓𝒐𝒎 𝑻𝒂𝒖𝒓𝒖𝒔 🦋✨`,
buttons: taurusbutton,
headerType: 5
}
bosco.sendMessage(from, taurus1, MessageType.buttonsMessage, { quoted: ftroli, caption: teks, contextInfo: { mentionedJid: [sender]}})
             break 
      case 'buttons5':
              const mathdare = dare[Math.floor(Math.random() * (dare.length))]
              result = `${mathdare}`
              buttons = [{buttonId: `${prefix}buttons6`,buttonText:{displayText: 'ᴛʀᴜᴛʜ'},type:1},{buttonId:`${prefix}buttons5`,buttonText:{displayText:'ᴅᴀʀᴇ'},type:1},{buttonId:`${prefix}tod`,buttonText:{displayText:'ᴛᴏᴅ'},type:1}]
              buttonsMessage = { contentText: `${result}`, footerText: 'Truth or challenge?', buttons: buttons, headerType: 1 }
              prep = await bosco.prepareMessageFromContent(from,{buttonsMessage},{})
              bosco.relayWAMessage(prep)
              break
      case 'buttons6':
              const randomtruth = truth[Math.floor(Math.random() * truth.length)]
              result = `${randomtruth}`
              buttons = [{buttonId: `${prefix}buttons6`,buttonText:{displayText: 'ᴛʀᴜᴛʜ'},type:1},{buttonId:`${prefix}buttons5`,buttonText:{displayText:'ᴅᴀʀᴇ'},type:1},{buttonId:`${prefix}tod`,buttonText:{displayText:'ᴛᴏᴅ'},type:1}]
              buttonsMessage = { contentText: `${result}`, footerText: 'Truth or challenge?', buttons: buttons, headerType: 1 }
              prep = await bosco.prepareMessageFromContent(from,{buttonsMessage},{})
              bosco.relayWAMessage(prep)
              break
       
         case 'antilink':
              if (!isGroup) return reply(mess.group)
              if (!isBotGroupAdmins) return reply(`*Bot Must be Admin*`)
              if (!q) return reply(`*Select enable or disable*`)
              if (args[0].toLowerCase() === 'enable'){
              if (isAntiLink) return reply(`*Already active*`)
              antilink.push(from)
              fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
              reply('*「 ANTILINK ACTIVATED 」*\n\nThose who send the group link will be kicked!')
              } else if (args[0].toLowerCase() === 'disable'){
              let anu = antilink.indexOf(from)
              antilink.splice(anu, 1)
              fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
              reply('*「 ANTI LINK IS DISABLED 」*')
              } else {
              reply(`*Select enable or disable*`)
}
              break
       case 'antibule':
					if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply(`untuk mengaktifkan ketik : ${prefix}antibule 1`)
				    if (Number(args[0]) === 1) {
						if (isKickArea) return reply('ᴀʟʀᴇᴀᴅʏ ᴀᴄᴛɪᴠᴇ')
						kickarea.push(from)
						fs.writeFileSync('./database/kickarea.json', JSON.stringify(kickarea))
						sendFakeStatus(from, `sᴜᴄᴄᴇss`, fake)
			  } else if (Number(args[0]) === 0) {
						if (!isKickArea) return reply('ᴀʟʀᴇᴀᴅʏ ᴅᴇᴀᴅ')
						kickarea.splice(from, 1)
						fs.writeFileSync('./database/kickarea.json', JSON.stringify(kickarea))
						sendFakeStatus(from, `sᴜᴄᴄᴇss`, fake)
					} else {
						reply('1 ᴛᴏ ᴛᴜʀɴ ᴏɴ, 0 ᴛᴏ ᴛᴜʀɴ ᴏғғ')
					}
						break

 //------------------< Extra >-------------------
 
       case 'brainly':
             brainly(args.join(" ")).then(res => {
             hmm = '────────────\n'
             for (let Y of res.data) {
             hmm += `\n*「 _BRAINLY_ 」*\n\n*➸ Question:* ${Y.pertanyaan}\n\n*➸ Answer:* ${Y.jawaban[0].text}\n───────────\n`
}
             reply(hmm)
             console.log(res)
})
             break
             case 'help':
             if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftroli}) 
        stod = `${sender}`
       stst = await bosco.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
				groups = bosco.chats.array.filter(v => v.jid.endsWith('g.us'))
        privat = bosco.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))   
        ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB` 
        timestampe = speed();
        latensie = speed() - timestampe          
			num = await fetchJson(`https://numlookupapi.com/api/validate/${sender}`, {method: 'get'})
  hehe = `
  ‣ ᴏᴡɴᴇʀ             :  ᴍᴜʜᴀᴍᴍᴇᴅ

 ‣ ʙᴏᴛ ɴᴀᴍᴇ        : 🦋 ᴛᴀᴜʀᴜs-x³ 🦋

 ‣ ᴘᴇʀsᴏɴᴀʟ ᴄʜᴀᴛs : ${privat.length}
 
 ‣ ɢʀᴏᴜᴘ ᴄʜᴀᴛs :  ${groups.length} 
  
 ‣ ʀᴀᴍ ᴜsᴀɢᴇ : ${ram2} 
 
 ‣ sᴘᴇᴇᴅ : ${latensie.toFixed(4)} Second 
 
 ‣ ᴛɪᴍᴇ : ${jmn}

 ‣ ʏᴏᴜ ɪɴғᴏ : ${num.line_type} - ${num.country_name} - ${num.carrier}_`
sendButDocument(from, `${hehe}`, "taurus sir", fs.readFileSync('./sampah/Denpa'), {mimetype:Mimetype.pdf, thumbnail:fs.readFileSync('./media/image/banner.jpg'), filename:`${jmn} - ${week} - ${calender}`}, [{buttonId:`${prefix}command`,buttonText:{displayText:'ʟɪsᴛ ᴍᴇɴᴜ'},type:1},{buttonId:`${prefix}owner`,buttonText:{displayText:'ᴅᴇᴠᴇʟᴏᴘᴇʀ'},type:1},{buttonId:`${prefix}script`,buttonText:{displayText:'ɢɪᴛ'},type:1}], {quoted:fmen, contextInfo: { mentionedJid: [stod], forwardingScore: 508, isForwarded: true, externalAdReply:{title:`ʜᴇʏ ${pushname}`,body:`ᴄʟɪᴄᴋ ʜᴇʀᴇ ᴛᴏ ɢᴇᴛ ᴛʜɪs ʙᴏᴛ`,mediaType:"2",thumbnail:ofrply,mediaUrl:`https://youtu.be/4mWfR23qFuA`}}})
break

case 'command':
 stod = `${sender}`
 listMsg = {
 buttonText: '𝐇𝐄𝐋𝐏 𝐋𝐈𝐒𝐓',
 footerText: '*🦋🌈𝑳𝒐𝒗𝒆 𝑭𝒓𝒐𝒎 𝑻𝒂𝒖𝒓𝒖𝒔 🦋 ✨*',
 description: `ʜᴇʏ @${stod.split('@')[0]}, \n\nʜᴇʀᴇ ɪs ʏᴏᴜ ᴍᴇɴᴜ`,
 sections: [
                     {
                      "title": `${jmn} - ${week} ${weton} - ${calender}`,
 rows: [
                          {
                              "title": "𝐒𝐂𝐑𝐈𝐏𝐓",
                              "discription": "ɢᴇᴛ ɢɪᴛ ᴏғ ʙᴏᴛ",
                              "rowId": "script"
                           },
                           {
                              "title": "𝐒𝐏𝐄𝐄𝐃",
                              "discription": "ᴄʜᴇᴄᴋ sᴘᴇᴇᴅ ᴏғ ʙᴏᴛ",
                              "rowId": "ping"
                           },
                           {
                              "title": "𝐒𝐓𝐀𝐓𝐔𝐒",
                              "discription": "ʙᴏᴛs sᴛᴀᴛᴜs",
                              "rowId": "status"
                           },
                           {
                              "title": "𝐂𝐑𝐄𝐀𝐓𝐎𝐑",
                              "discription": "ᴏᴡɴᴇʀ ᴏғ ʙᴏᴛ",
                              "rowId": "creator"
                           },
                           {
                              "title": "𝐉𝐀𝐃𝐈 𝐁𝐎𝐓",
                              "discription": "ᴄʟɪᴄᴋ ʜᴇʀᴇ ᴀɴᴅ sᴄᴀɴ ǫʀ ᴛᴏ ᴜsᴇ ᴛʜɪs ʙᴏᴛ",
                              "rowId": "jadibot"
                           },
                           {
                              "title": "𝐀𝐋𝐋 𝐌𝐄𝐍𝐔",
                              "discription": "sʜᴏᴡ ᴀʟʟ ᴍᴇɴᴜ ᴏғ ʙᴏᴛ",
                              "rowId": "allmenu"
                           },
                           {
                              "title": "𝐑𝐔𝐍 𝐓𝐈𝐌𝐄",
                              "discription": "ᴛᴏ ᴋɴᴏᴡ ʀᴜɴᴛɪᴍᴇ",
                              "rowId": "runtime"
                           },
                           {
                              "title": "𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔",
                              "discription": "ᴛᴏ ɢᴇᴛ ᴏᴡɴᴇʀ ᴍᴇɴᴜ ᴏғ ʙᴏᴛ",
                              "rowId": "ownermenu"
                           },
                           {
                              "title": "𝐌𝐀𝐊𝐄𝐑 𝐌𝐄𝐍𝐔",
                              "discription": "ɢᴇᴛ ᴍᴀᴋᴇʀᴍᴇɴᴜ",
                              "rowId": "maker"
                           },
                           {
                              "title": "𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔",
                              "discription": "ɢʀᴏᴜᴘ ᴍᴇɴᴜ ᴏғ ʙᴏᴛ",
                              "rowId": "groupmenu"
                           },
                           {
                              "title": "𝐎𝐓𝐇𝐄𝐑 𝐌𝐄𝐍𝐔",
                              "discription": "ᴇxᴛʀᴀ ᴍᴇɴᴜ ᴏғ ʙᴏᴛ",
                              "rowId": "extramenu"
                           },
                           {
                              "title": "𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐌𝐄𝐍𝐔",
                              "discription": "ɪᴛs sʜᴏᴡs ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ",
                              "rowId": "downloadmenu"
                           }
                        ]
                     }],
 listType: 1
}
bosco.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [stod]},quoted:fmen})
break
       case 'ss':
				reply(mess.wait)
					sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/ssweb?url=${args[0]}&apikey=${HunterApi}`)
					break
					case 'runtime':
				runtime = process.uptime()
				reply(`ʀᴜɴᴛɪᴍᴇ : ${waktu(runtime)}`)
				break
        case 'ocr': 
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
			        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
				    const media = await bosco.downloadAndSaveMediaMessage(encmedia)
					reply(mess.wait)
					await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
					.then(teks => {
					reply(teks.trim())
					fs.unlinkSync(media)
					})
					.catch(err => {
					reply(err.message)
					fs.unlinkSync(media)
					})
					} else {
						reply(`*Send Photos With Caption ${prefix}ocr*`)
					}
					break
      case 'tod':
              result =`*Truth Or Dare*\nPlayers are given the choice between answering questions honestly, or taking on the challenge given`
              buttons = [{buttonId: `${prefix}buttons6`,buttonText:{displayText: 'ᴛʀᴜᴛʜ'},type:1},{buttonId:`${prefix}buttons5`,buttonText:{displayText:'ᴅᴀʀᴇ'},type:1},{buttonId:`${prefix}tod`,buttonText:{displayText:'Tod'},type:1}]
              buttonsMessage = { contentText: `${result}`, footerText: 'Truth or challenge?', buttons: buttons, headerType: 1 }
              prep = await bosco.prepareMessageFromContent(from,{buttonsMessage},{})
              bosco.relayWAMessage(prep)
              break
              case 'allmenu':
    hmm4 = fs.readFileSync(`./taurus.jpg`)
imeu = await bosco.prepareMessage('0@s.whatsapp.net', hmm4, image)
taurusallmenu=`ʜᴇʏ ${pushname}

┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓
       𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔
┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛

┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓
┣‣ ${prefix}sᴇᴛʙɢᴍᴘɪᴄ

┣‣ ${prefix}sᴇᴛᴛʜᴜᴍʙ

┣‣ ${prefix}ᴄʟᴇᴀʀᴀʟʟ

┣‣ ${prefix}ᴛᴏʙᴄ

┣‣ ${prefix}ʙᴄ

┣‣ ${prefix}ɢᴇᴛǫᴜᴏᴛᴇᴅ

┣‣ ${prefix}ʀᴇsᴛᴀʀᴛ

┣‣ ${prefix}ᴛᴇʀᴍ

┣‣ ${prefix}ʙʟᴏᴄᴋ

┣‣ ${prefix}ᴜɴʙʟᴏᴄᴋ

┣‣ ${prefix}ʟᴇᴀᴠᴇᴀʟʟ

┣‣ ${prefix}ᴀᴅᴅᴄᴍᴅ

┣‣ ${prefix}ᴅᴇʟᴄᴍᴅ

┣‣ ${prefix}ᴊᴀᴅɪʙᴏᴛ

┣‣ ${prefix}ʟɪsᴛᴊᴀᴅɪʙᴏᴛ

┣‣ ${prefix}sᴛᴏᴘᴊᴀᴅɪʙᴏᴛ

┣‣ ${prefix}ᴇxɪғ

┣‣ ${prefix}ᴊᴏɪɴ

┣‣ ${prefix}ʀᴇᴛᴜʀɴ

┣‣ ${prefix}ᴘᴜʙʟɪᴄ

┣‣ ${prefix}sᴇʟғ

┣‣ ${prefix}ʀᴇᴀᴅᴀʟʟ
┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛


┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓
    𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐌𝐄𝐍𝐔
┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛

┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓
┣‣ ${prefix}ᴘʟᴀʏ

┣‣ ${prefix}ʏᴛᴍᴘ3

┣‣ ${prefix}ʏᴛᴍᴘ4

┣‣ ${prefix}ɪɢᴅʟ

┣‣ ${prefix}ʏᴛsᴇᴀʀᴄʜ

┣‣ ${prefix}ɪɢsᴛᴏʀʏ

┣‣ ${prefix}sᴄᴘʟᴀʏ

┣‣ ${prefix}ᴘɪɴᴛᴇʀᴇsᴛ

┣‣ ${prefix}ᴛᴇʟᴇsᴛɪᴄᴋᴇʀ

┣‣ ${prefix}ɢɪᴛʜᴜʙsᴇᴀʀᴄʜ

┣‣ ${prefix}ɢᴏᴏɢʟᴇɪᴍᴀɢᴇ

┣‣ ${prefix}ʏᴛᴅᴇsᴋ

┣‣ ${prefix}ʟʏʀɪᴄ

┣‣ ${prefix}ᴘʟᴀʏsᴛᴏʀᴇ

┣‣ ${prefix}ᴍᴇᴅɪᴀғɪʀᴇ

┣‣ ${prefix}ғʙ

┣‣ ${prefix}ᴛɪᴋᴛᴏᴋɴᴏᴡɴ

┣‣ ${prefix}ᴛɪᴋᴛᴏᴋᴀᴜᴅɪᴏ

┣‣ ${prefix}ᴛɪᴋᴛᴏᴋᴅʟ

┣‣ ${prefix}ᴛᴡɪᴛᴛᴇʀ

┣‣ ${prefix}ᴛɪɴʏᴜʀʟ

┣‣ ${prefix}ɢᴏᴏɢʟᴇ
┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛


┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓
       𝐄𝐗𝐓𝐑𝐀 𝐌𝐄𝐍𝐔
┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛

┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓
┣‣ ${prefix}ᴄʜᴀᴛ

┣‣ ${prefix}ғɪᴛɴᴀʜᴘᴄ

┣‣ ${prefix}ᴄᴏɴᴛᴀᴄᴛ

┣‣ ${prefix}ғᴏʀᴡᴀʀᴅ

┣‣ ${prefix}ғᴏʀᴡᴀʀᴅᴠɪᴅᴇᴏ

┣‣ ${prefix}ғᴏʀᴡᴀʀᴅᴀᴜᴅɪᴏ
┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛


┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓
     𝐒𝐓𝐎𝐑𝐀𝐆𝐄 𝐌𝐄𝐍𝐔 
┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛

┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓
┣‣ ${prefix}ᴀᴅᴅᴠɴ

┣‣ ${prefix}ᴀᴅᴅᴠɪᴅᴇᴏ

┣‣ ${prefix}ᴀᴅᴅᴠɪᴅᴇᴏ

┣‣ ${prefix}ᴀᴅᴅsᴛɪᴄᴋᴇʀ

┣‣ ${prefix}ʟɪsᴛᴠɴ

┣‣ ${prefix}ʟɪsᴛᴠɪᴅᴇᴏ

┣‣ ${prefix}ʟɪsᴛɪᴍᴀɢᴇ

┣‣ ${prefix}ʟɪsᴛsᴛɪᴄᴋᴇʀ

┣‣ ${prefix}ᴅᴇʟᴠɴ

┣‣ ${prefix}ᴅᴇʟᴠɪᴅᴇᴏ

┣‣ ${prefix}ᴅᴇʟɪᴍᴀɢᴇ

┣‣ ${prefix}ᴅᴇʟsᴛɪᴄᴋᴇʀ
┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛


┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓
         𝐄𝐃𝐈𝐓 𝐌𝐄𝐍𝐔 
┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛

┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓
┣‣${prefix}sᴇᴄᴠɴ

┣‣ ${prefix}sᴇᴄᴠɪᴅᴇᴏ

┣‣ ${prefix}ᴛᴏᴍᴘ3

┣‣ ${prefix}ᴛᴏᴍᴘ4

┣‣ ${prefix}ᴛᴏɪᴍɢ

┣‣ ${prefix}ʙᴀʙʏ

┣‣ ${prefix}ʙᴀss

┣‣ ${prefix}ʀᴇᴠᴇʀsᴇ

┣‣ ${prefix}sʟᴏᴡ

┣‣ ${prefix}sǫᴜɪʀʀᴇʟ

┣‣ ${prefix}ʙʟᴜʙ

┣‣ ${prefix}ғᴀᴛ

┣‣ ${prefix}ɪᴍᴀɢᴇᴛᴏᴜʀʟ

┣‣ ${prefix}ᴍᴇ

┣‣ ${prefix}ɴɪɢʜᴛᴄᴏʀᴇ

┣‣ ${prefix}ᴄᴍ

┣‣ ${prefix}ғᴀsᴛ

┣‣ ${prefix}ɢᴇᴍᴇs

┣‣ ${prefix}sʟᴏᴡᴠɪᴅ

┣‣ ${prefix}ғᴀsᴛᴠɪᴅ
 
┣‣ ${prefix}ʀᴇᴠᴇʀsᴇᴠɪᴅ

┣‣ ${prefix}ᴛᴛs ᴇɴ
┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛


┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓
       𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔
┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛

┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓
┣‣ ${prefix}ᴀᴅᴅ

┣‣ ${prefix}ᴋɪᴄᴋ

┣‣ ${prefix}ᴘʀᴏᴍᴏᴛᴇ

┣‣ ${prefix}ᴅᴇᴍᴏᴛᴇ

┣‣ ${prefix}ᴅɪsᴀᴘᴘᴇᴀʀ

┣‣ ${prefix}ɢʀᴏᴜᴘ

┣‣ ${prefix}ᴀɴᴛɪʟɪɴᴋ

┣‣ ${prefix}ᴛᴏᴛᴀɢ

┣‣ ${prefix}ʜɪᴅᴇᴛᴀɢ

┣‣ ${prefix}ᴛʀᴀɴsʟᴀᴛᴇ

┣‣ ${prefix}ɢᴇᴛᴅᴇsᴋɢᴄ

┣‣ ${prefix}ɢᴇᴛʙɪᴏ

┣‣ ${prefix}ɢᴇᴛᴘᴘ

┣‣ ${prefix}ɢᴇᴛɴᴀᴍᴇ
┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛


┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓
      𝐌𝐀𝐊𝐄𝐑 𝐌𝐄𝐍𝐔
┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛

 ᴛʜᴇʀᴇ ɪs ᴀᴘɪ ɪssᴜᴇ !
 ʙᴇᴄᴜᴀsᴇ
 ɪᴛ ᴡɪʟʟ ʙᴇ ɴᴏᴛ ᴡᴏʀᴋ
 ʀᴇᴀᴅʏ sᴏᴏɴ...
┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓
┣‣ ${prefix}sʜᴀᴅᴏᴡ

 ┣‣ ${prefix}ᴄᴜᴘ

 ┣‣ ${prefix}ᴄᴜᴘ1

 ┣‣ ${prefix}ʀᴏᴍᴀɴᴄᴇ

 ┣‣ ${prefix}sᴍᴏᴋᴇ

 ┣‣ ${prefix}ʙᴜʀɴᴘᴀᴘᴇʀ

 ┣‣ ${prefix}ʟᴏᴠᴇᴍᴇssᴀɢᴇ

 ┣‣ ${prefix}ᴜɴᴅᴇʀɢʀᴀss

 ┣‣ ${prefix}ʟᴏᴠᴇ

 ┣‣ ${prefix}ᴄᴏғғᴇ

 ┣‣ ${prefix}ᴡᴏᴏᴅʜᴇᴀʀᴛ

 ┣‣ ${prefix}ᴡᴏᴏᴅᴇɴʙᴏᴀʀᴅ

 ┣‣ ${prefix}sᴜᴍᴍᴇʀ3ᴅ

 ┣‣ ${prefix}ᴡᴏʟғᴍᴇᴛᴀʟ

 ┣‣ ${prefix}ɴᴀᴛᴜʀᴇ3ᴅ

 ┣‣ ${prefix}ᴜɴᴅᴇʀᴡᴀᴛᴇʀ

 ┣‣ ${prefix}ɢᴏʟᴅᴇʀʀᴏsᴇ

 ┣‣ ${prefix}sᴜᴍᴍᴇʀɴᴀᴛᴜʀᴇ

 ┣‣ ${prefix}ʟᴇᴛᴛᴇʀʟᴇᴀᴠᴇs

 ┣‣ ${prefix}ɢʟᴏᴡɪɴɢɴᴇᴏɴ

 ┣‣ ${prefix}ғᴀʟʟʟᴇᴀᴠᴇs

 ┣‣ ${prefix}ғʟᴀᴍᴍɪɴɢ

 ┣‣ ${prefix}ʜᴀʀʀʏᴘᴏᴛᴛᴇʀ

 ┣‣ ${prefix}ᴄᴀʀᴠᴇᴅᴡᴏᴏᴅ

 ┣‣ ${prefix}ᴛɪᴋᴛᴏᴋ

 ┣‣ ${prefix}ᴀʀᴄᴀᴅᴇ8ʙɪᴛ

 ┣‣ ${prefix}ɢᴀʟᴀxʏᴡᴀʟʟᴘᴀᴘᴇʀ

 ┣‣ ${prefix}ʟɪɢʜᴛᴛᴇxᴛ

 ┣‣ ${prefix}ʙᴇᴀᴜᴛɪғᴜʟғʟᴏᴡᴇʀ

 ┣‣ ${prefix}ᴘᴜᴘᴘʏᴄᴜᴛᴇ

 ┣‣ ${prefix}ʀᴏʏᴀʟᴛᴇxᴛ

 ┣‣ ${prefix}ʜᴇᴀʀᴛsʜᴀᴘᴇᴅ
 
 ┣‣ ${prefix}ʙɪʀᴛʜᴅᴀʏᴄᴀᴋᴇ

 ┣‣ ${prefix}ɢʟᴏssʏᴄʜʀᴏᴍᴇ

 ┣‣ ${prefix}ɢʀᴇᴇɴʙᴜsʜ

 ┣‣ ${prefix}ᴍᴇᴛᴀʟʟᴏɢᴏ

 ┣‣ ${prefix}ɴᴏᴇʟᴛᴇxᴛ

 ┣‣ ${prefix}ɢʟɪᴛᴛᴇʀɢᴏʟᴅ

 ┣‣ ${prefix}ᴛᴇxᴛᴄᴀᴋᴇ

 ┣‣ ${prefix}sᴛᴀʀᴛsɴɪɢʜᴛ

 ┣‣ ${prefix}ᴡᴏᴏᴅᴇɴ3ᴅ

 ┣‣ ${prefix}ᴛᴇxᴛʙʏɴᴀᴍᴇ

 ┣‣ ${prefix}ᴡʀɪᴛᴇɢᴀʟᴀᴄʏ

 ┣‣ ${prefix}ɢᴀʟᴀxʏʙᴀᴛ

 ┣‣ ${prefix}sɴᴏᴡ3ᴅ

 ┣‣ ${prefix}ʙɪʀᴛʜᴅᴀʏᴅᴀʏ

 ┣‣ ${prefix}ɢᴏʟᴅᴘʟᴀʏʙᴜᴛᴛᴏɴ

 ┣‣ ${prefix}sɪʟᴠᴇʀᴘʟᴀʏʙᴜᴛᴛᴏɴ

 ┣‣ ${prefix}ғʀᴇᴇғɪʀᴇ
 ┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛

 
┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓
   𝐌𝐀𝐊𝐄𝐑 𝐌𝐄𝐍𝐔 𝐓𝐖𝐎
┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛

 ᴛʜᴇʀᴇ ɪs ᴀᴘɪ ɪssᴜᴇ !
 ʙᴇᴄᴜᴀsᴇ
 ɪᴛ ᴡɪʟʟ ʙᴇ ɴᴏᴛ ᴡᴏʀᴋ
 ʀᴇᴀᴅʏ sᴏᴏɴ..
┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓
┣‣ ${prefix}ʙʟᴀᴄᴋᴘɪɴᴋ

 ┣‣ ${prefix}ɴᴇᴏɴ

 ┣‣ ${prefix}ɢʀᴇᴇɴɴᴇᴏɴ

 ┣‣ ${prefix}ᴀᴅᴠᴀɴᴄᴇɢʟᴏᴡ

 ┣‣ ${prefix}ʙᴀᴛᴛʟᴇғɪᴇʟᴅ4

 ┣‣ ${prefix}ᴘᴜʙɢ

 ┣‣ ${prefix}ᴡᴇᴛɢʟᴀss

 ┣‣ ${prefix}ᴍᴜʟᴛɪᴄᴏʟᴏʀ3ᴅ

 ┣‣ ${prefix}ᴡᴀᴛᴇʀᴄᴏʟᴏʀ

 ┣‣ ${prefix}ʟᴜxᴜʀʏɢᴏʟᴅ

 ┣‣ ${prefix}ɢᴀʟᴀxʏsᴛʏʟᴇ

 ┣‣ ${prefix}ʜᴏʟᴏɢʀᴀᴍ3ᴅ

 ┣‣ ${prefix}ɢʀᴇᴇɴɴᴇᴏɴ

 ┣‣ ${prefix}ғᴜᴛᴜʀᴇɴᴇᴏɴ

 ┣‣ ${prefix}sᴀɴᴅᴡʀɪᴛɪɴɢ

 ┣‣ ${prefix}sᴀɴᴅsᴜᴍᴍᴇʀ

 ┣‣ ${prefix}sᴀɴᴅᴇɴɢʀᴀᴠᴇᴅ

 ┣‣ ${prefix}ᴍᴇᴛᴀʟᴅᴀʀᴋ

 ┣‣ ${prefix}ɴᴇᴏɴʟɪɢʜᴛ

 ┣‣ ${prefix}ʜᴏʟᴏɢʀᴀᴘʜɪᴄ

 ┣‣ ${prefix}ᴛᴇxᴛ1917

 ┣‣ ${prefix}ᴍɪɴɪᴏɴ

 ┣‣ ${prefix}ᴅᴇʟᴜxᴇsɪʟᴠᴇʀ

 ┣‣ ${prefix}ɴᴇᴡʏᴇᴀʀᴄᴀʀᴅ

 ┣‣ ${prefix}ʙʟᴏᴏᴅғʀᴏsᴛᴇᴅ

 ┣‣ ${prefix}ʜᴀʟʟᴏᴡᴇᴇɴ

 ┣‣ ${prefix}ᴊᴏᴋᴇʀʟᴏɢᴏ

 ┣‣ ${prefix}ғɪʀᴇᴡᴏʀᴋsᴘᴀʀᴋʟᴇ

 ┣‣ ${prefix}ɴᴀᴛᴜʀᴇʟᴇᴀᴠᴇs

 ┣‣ ${prefix}ʙᴏᴋᴇʜ

 ┣‣ ${prefix}ᴛᴏxɪᴄ

 ┣‣ ${prefix}sᴛʀᴀᴡʙᴇʀʀʏ

 ┣‣ ${prefix}ʙᴏx3ᴅ

 ┣‣ ${prefix}ʀᴏᴀᴅᴡᴀʀɴɪɴɢ

 ┣‣ ${prefix}ʙʀᴇᴀᴋᴡᴀʟʟ

 ┣‣ ${prefix}ɪᴄᴇᴄᴏʟᴅ

 ┣‣ ${prefix}ʟᴜxᴜʀʏ

 ┣‣ ${prefix}ᴄʟᴏᴜᴅ

 ┣‣ ${prefix}sᴜᴍᴍᴇʀsᴀɴᴅ

 ┣‣ ${prefix}ʜᴏʀʀᴏʀʙʟᴏᴏᴅ

 ┣‣ ${prefix}ᴛʜᴜɴᴅᴇʀ

 ┣‣ ${prefix}ᴘᴏʀɴʜᴜʙ

 ┣‣ ${prefix}ɢʟɪᴛᴄʜ

 ┣‣ ${prefix}ᴀᴠᴇɴɢᴇʀ

 ┣‣ ${prefix}sᴘᴀᴄᴇ

 ┣‣ ${prefix}ɴɪɴᴊᴀʟᴏɢᴏ

 ┣‣ ${prefix}ᴍᴀʀᴠᴇʟsᴛᴜᴅɪᴏ

 ┣‣ ${prefix}ʟɪᴏɴʟᴏɢᴏ

 ┣‣ ${prefix}ᴡᴏʟғʟᴏɢᴏ

 ┣‣ ${prefix}sᴛᴇᴇʟ3ᴅ
 
 ┣‣ ${prefix}ᴡᴀʟʟɢʀᴀᴠɪᴛʏ
 ┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛

 
┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓
     𝐓𝐀𝐔𝐑𝐔𝐒 𝐂𝐑𝐄𝐃𝐈𝐓𝐒
┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛

┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓
┣‣ wa.me/918157849715

┣‣ wa.me/919961050829
┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛


┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓
             𝐑𝐔𝐋𝐄𝐒
┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛

┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓
┣‣ ᴅᴏɴ'ᴛ sᴘᴀᴍ ʙᴏᴛ

┣‣ ᴅᴏɴ'ᴛ ᴄᴀʟʟ ʙᴏᴛ

┣‣ ᴅᴏɴ'ᴛ ᴍɪss ᴜsᴇ ʙᴏᴛ

┣‣ ᴀɴʏ ᴘʀᴏʙʟᴇᴍ ᴄᴏɴᴛᴀᴄᴛ
┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛


 `
imeg = imeu.message.imageMessage
res = await bosco.prepareMessageFromContent(from,{
  "productMessage": {
  "product": {
  "productImage": imeg,
  "productId": "1", 
  "title": "ᴀʟʟ ᴍᴇɴᴜ",
"description": `${taurusallmenu}`, 
"priceAmount1000": "10000",
"descriptionCount": "1",
  "productImageCount": "1",
  },
  "businessOwnerJid": "919961050829@s.whatsapp.net",
  "contextInfo": {
  "forwardingScore": 9999,
  "isForwarded": true
  }
  }
  }, {quoted: {
				  key: {
				   fromMe: false,
				   participant: `0@s.whatsapp.net`, // Fake sender Jid
				   remoteJid: "status@broadcast"
				  },
				  message: {
				   orderMessage: {
				    itemCount: 111, //
				    status: 1,
				    surface: 1,
				    message: `ʜᴇʏ ${pushname}`,
				    orderTitle: '999999999', // Idk what this does
				    sellerJid: `0@s.whatsapp.net` // Seller
				   }
				  }
				 }
				})
  bosco.relayWAMessage(res)
  break
  
        case 'anime':
              let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
              let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
		      buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `next`},type:1},{buttonId:`${prefix}owner`,buttonText:{displayText:'ᴏᴡɴᴇʀ'},type:1}]
              imageMsg = ( await bosco.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'© 𝐓 𝐀 𝐔 𝐑 𝐔 𝐒', imageMessage: imageMsg,
              contentText:`_Click Next to go to the next picture_`,buttons,headerType:4}
              prep = await bosco.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
              bosco.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
        case 'song':
        case 'play':
                            if (args.length === 0) return reply(`ᴡʀᴏɴɢ ᴋᴇʏ *${prefix}play/song* ɴᴀᴍᴇ ᴏғ sᴏɴɢ `)
                            const playy = await axios.get(`https://bx-hunter.herokuapp.com/api/yt/search?query=${body.slice(6)}&apikey=${HunterApi}`)
                            const mulaikah = playy.data.result[0].url
                            try {
                                reply(mess.wait)
                                yta(mulaikah)
                                .then((res) => {
                                    const { dl_link, thumb, title, filesizeF, filesize } = res
                                    axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                                    .then(async (a) => {
                                    if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `‣ *ᴘʟᴀʏ sᴏɴɢ*\n\n‣ *ᴛɪᴛʟᴇ* : ${title}\n‣ *ᴛʏᴘᴇ* : ᴍᴘ3\n*ғɪʟᴇ sɪᴢᴇ* : ${filesizeF}\n*ʟɪɴᴋ* : ${a.data}\n\n*sᴏʀʀʏ ᴅᴜʀᴀᴛɪᴏɴ ᴇxᴄᴇᴇᴅᴇᴅ ᴛʜᴇ ᴍᴀx ʟɪᴍɪᴛ, ᴘʟᴇᴀsᴇ ᴄʟɪᴄᴋ ᴛʜᴇ ʟɪɴᴋ ᴀʙᴏᴠᴇ*`)
                                    sendFileFromUrl(dl_link, document, {mimetype: 'audio/mp3', filename: `${title}.mp3`, quoted: ftroli, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title:title,body:"ᴄʟɪᴄᴋ ʜᴇʀᴇ ᴛᴏ ᴡᴀᴛᴄʜ ᴏɴ ʏᴛ",mediaType:"2",thumbnail:getBuffer(thumb),mediaUrl:"https://youtu.be/4mWfR23qFuA"}}}).catch(() => reply(mess.error.api))
                                    })
                                })
                            } catch (err) {
                                reply(mess.error.api)
                            }
                            break
            case 'totag':
			if (!isGroup) return reply(`*Send Only Group*`)
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await bosco.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await bosco.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: ftroli
            }
            ini_buffer = fs.readFileSync(file)
            bosco.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await bosco.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await bosco.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: ftroli
            }
            ini_buffer = fs.readFileSync(file)
            bosco.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await bosco.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await bosco.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'audio/mp4', duration: 999999999,
                ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: ftroli
            }
            ini_buffer = fs.readFileSync(file)
            bosco.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
         } else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await bosco.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await bosco.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/gif',
                contextInfo: { mentionedJid: mem },
                quoted: ftroli
            }
            ini_buffer = fs.readFileSync(file)
            bosco.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedDocument) && args.length == 0) {
            encmedia = isQuotedDocument ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await bosco.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await bosco.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'text/plain',
                contextInfo: { mentionedJid: mem },
                quoted: ftroli
            }
            ini_buffer = fs.readFileSync(file)
            bosco.sendMessage(from, ini_buffer, document, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await bosco.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await bosco.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/mp4', duration: 999999999,
                contextInfo: { mentionedJid: mem },
                quoted: ftroli
            }
            ini_buffer = fs.readFileSync(file)
            bosco.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`*Reply to Gif/Document/Audio/Video/Sticker Send Caption With ${prefix}totag*`)
        }
        break
         case 'forward':
           if (!isOwner) return reply(mess.only.owner)
	        bosco.sendMessage(from, `${body.slice(8)}`, MessageType.text, { sendEphemeral: true, thumbnail: fs.readFileSync('./ds.jpg', 'base64'), contextInfo: { forwardingScore: 2, isForwarded: true }})
            break
		   case 'forwardaudio':                 
	                encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo	
                 	media = await bosco.downloadAndSaveMediaMessage(encmedia)
	                	ran = getRandom('.mp3')
	                	exec(`ffmpeg -i ${media}  ${ran}`, (err, stderr, stdout) => {
	                	fs.unlinkSync(media)
	                	if (err) return reply('Error!')
		                hah = fs.readFileSync(ran)
	                	bosco.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: ftroli, sendEphemeral: true, contextInfo: { forwardingScore: 508, isForwarded: true }})
	                	fs.unlinkSync(ran)
   	                 })
   	                	break

            case 'forwardvideo':
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await bosco.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media}  ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply('Error!')
            buffer453 = fs.readFileSync(ran)
            bosco.sendMessage(from, buffer453, video, {mimetype: 'video/mp4', quoted: ftroli, sendEphemeral: true, contextInfo: { forwardingScore: 508, isForwarded: true }})
            fs.unlinkSync(ran)
            })
            break
          case 'fw':
bosco.sendMessage(from, `${args.join(' ')}`, MessageType.text, {contextInfo: { forwardingScore: 210, isForwarded: true }})
            break

//------------------< Sticker Maker >-------------------

case 'attp':
              if (args.length == 0) return reply(`Example: ${prefix + command} bosco`)
              buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
              bosco.sendMessage(from, buffer, sticker, { quoted: ftroli })
              break
       case 'sticker':
       case 'stiker':
       case 's':
       case 'stickergif':
       case 'stikergif':
       case 'sgif':
              if (isAuto) return
              if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
              encmediat = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
              mediat = await bosco.downloadAndSaveMediaMessage(encmediat)
              ron = getRandom('.webp')
              exec(`ffmpeg -i ${mediat} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=15, crop=512:512" ${ron}`, (err) => {
              fs.unlinkSync(mediat)
              if (err) return reply(`${err}`)
              exec(`webpmux -set exif ${addMetadata('Taurus')} ${ron} -o ${ron}`, async (error) => {
              if (error) return reply(`${error}`)
              bosco.sendMessage(from, fs.readFileSync(ron), sticker, {quoted:ftroli})
              fs.unlinkSync(ron)
})
})
              } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
              encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
              mediat = await bosco.downloadAndSaveMediaMessage(encmedia)
              ron = getRandom('.webp')
              exec(`ffmpeg -i ${mediat} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=15, crop=512:512" ${ron}`, (err) => {
              fs.unlinkSync(mediat)
              if (err) return reply(`${err}`)
              exec(`webpmux -set exif ${addMetadata('Taurus')} ${ron} -o ${ron}`, async (error) => {
              if (error) return reply(`${error}`)
              bosco.sendMessage(from, fs.readFileSync(ron), sticker, {quoted:ftroli})
              fs.unlinkSync(ron)
})
})
              } else {
              reply(`*_Send an image with the caption ${prefix}sticker_*\n*_Sticker Video Duration 1-9 Seconds_*`)
}
              break
case 'emoji':
			if (!q) return fakegroup('*emoji where..?*')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[4].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
    		break

//------------------< Storage >-------------------

                   case 'addvn':
      case 'addbgm':
                    if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
					if (!isQuotedAudio) return reply('*Reply to Audio*')
					nm = body.slice(7)
					if (!nm) return reply('*What is The bgm name?*')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await bosco.downloadMediaMessage(boij)
					vien.push(`${nm}`)
					fs.writeFileSync(`./media/vn/${nm}.mp3`, delb)
					fs.writeFileSync('./database/vien.json', JSON.stringify(vien))
					bosco.sendMessage(from, `*Bgm Added*`, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: 'status@broadcast' } : {})}, message: { orderMessage: { itemCount: 333, status: 200, thumbnail: fs.readFileSync('./ds.jpg'), surface: 200, message: `${nm}`, orderTitle: 'hehe', sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}})
					break
	 case 'delvn':
					try {
					 nmm = body.slice(7)
					 wanu = vien.indexOf(nmm)
					 vien.splice(wanu, 1)
					 fs.unlinkSync(`./media/vn/${nmm}.mp3`)
					bosco.sendMessage(from, `*Bgm Deleted*`, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: 'status@broadcast' } : {})}, message: { orderMessage: { itemCount: 59, status: 200, thumbnail: fs.readFileSync('./ds.jpg'), surface: 200, message: '𝒕𝒂𝒖𝒓𝒖𝒔', orderTitle: '𝒃𝒐𝒕', sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}})
					} catch (err){
						console.log(err)
						reply(mess.error.api)
					}
					break
				case 'vnlist':
				case 'listbgm':
					case 'listvn':
					teks = '*Lɪsᴛ Bɢᴍ :*\n'
					for (let awokwkwk of vien) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Tᴏᴛᴀʟ : ${vien.length}*\n\n_🍁_`
					bosco.sendMessage(from, teks.trim(), extendedText, { caption: 'teks', "contextInfo": { text: 'teks', sendEphemeral: true, "externalAdReply": { "title": `${' '}𝒕𝒂𝒖𝒓𝒖𝒔 𝒃𝒐𝒕${''}${''}`, "body": ``, "previewType": 'PHOTO', "thumbnailUrl": `${'https://firebasestorage.googleapis.com/v0/b/photo-to-link.appspot.com/o/40892158?alt=media&token=3c7aaf69-f816-4b71-9393-9803853aca0d'}`, "thumbnail": '', "sourceUrl": `${'https://wa.me/919961050829?text=_ʜᴇʟʟᴏ%20ᴛᴀᴜʀᴜs%20ʙʀᴏ%20💜🐾_'}`}},quoted: ftext})
					break
				case 'addimage':
				    if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
					if (!isQuotedImage) return reply('*Reply image*')
					nm = body.slice(10)
					if (!nm) return reply('*Whats the name of the image?*')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await bosco.downloadMediaMessage(boij)
					imagi.push(`${nm}`)
					fs.writeFileSync(`./media/image/${nm}.jpg`, delb)
					fs.writeFileSync('./database/imagi.json', JSON.stringify(imagi))
					bosco.sendMessage(from, `*Image Added*`, MessageType.text, { quoted: ftroli })
					break
				case 'delimage':
					try {
					 nmm = body.slice(10)
					 wanu = imagi.indexOf(nmm)
					 imagi.splice(wanu, 1)
					 fs.unlinkSync(`./media/image/${nmm}.jpg`)
					 costum(from, 'Image Deleted', fake)
					} catch (err){
						console.log(err)
						reply(mess.error.api)
					}
					break
					case 'imagelist':
				case 'listimage':
					teks = '*Image List :*\n\n'
					for (let awokwkwk of imagi) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${imagi.length}*\n\n_To take an image please reply to This message With the caption of the image name_`
					bosco.sendMessage(from, teks.trim(), extendedText, { quoted: ftroli, contextInfo: { "mentionedJid": imagi } })
					break
              case 'addsticker':
                    if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
					if (!isQuotedSticker) return reply('*Reply To Sticker*')
					nm = body.slice(12)
					if (!nm) return reply('*Sticker Name?*')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await bosco.downloadMediaMessage(boij)
					setik.push(`${nm}`)
					fs.writeFileSync(`./media/sticker/${nm}.webp`, delb)
					fs.writeFileSync('./database/setik.json', JSON.stringify(setik))
					bosco.sendMessage(from, `*Sticker Added*`, MessageType.text, { quoted: ftroli })
					break
				case 'delsticker':
					try {
					 nmm = body.slice(12)
					 wanu = setik.indexOf(nmm)
					 setik.splice(wanu, 1)
					 fs.unlinkSync(`./media/sticker/${nmm}.webp`)
					 costum(from, '*Sticker Deleted*', fake)
					} catch (err){
						console.log(err)
						reply(mess.error.api)
					}
					break
            case 'imagelist':
				case 'listimage':
					teks = '*ListImages :*\n\n'
					for (let awokwkwk of imagi) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${imagi.length}*\n\n_Type Any Image_`
					bosco.sendMessage(from, teks.trim(), extendedText, { quoted: ftroli, contextInfo: { "mentionedJid": imagi } })
					break
        
//------------------< Tag >-------------------

       case 'tag':
			if (args.length < 1) return reply(`Consumption ${prefix}tag 60xxxx`)
            var nomqm = `${body.slice(5)}@s.whatsapp.net`
					tagq = `@${nomqm.split('@')[0]}` 
					bosco.sendMessage(from, tagq, text, { quoted: ftroli, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
			break

//------------------< Bot Info >-------------------

       case 'runtime':
              textImg(`${runtime(process.uptime())}`)
              break
      case 'ping':
      case 'speed':
              timestampe = speed();
              latensie = speed() - timestampe
              reply(`*「 𝙎𝙋𝙀𝙀𝘿 𝙏𝙀𝙎𝙏 」*\nRespond in ${latensie.toFixed(4)} Sec 💬`)
              break

//------------------< Game >-------------------
       case 'slot':
			if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftroli})
									const sotoy = ['🍊 : 🍒 : 🍐','🍒 : 🍐 : 🍊','🍐 : 🍒 : 🍐','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔','🍐 : 🍒 : 🍋','🍐 : 🍐 : 🍐','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇 ','🍌 : 🍒 : 🔔','🍐 : 🔔 :  🔔','🍊 : 🍋 :  🍒','🍋 : 🍋 :  🍌','?? : 🔔 : 🍇','🔔 : 🍐 :  🍇','🔔 : 🔔 :  🔔','🍒 : 🍒 :  🍒','🍌 : 🍌 : 🍌','🍇 : ?? : 🍇']
									somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
									somtoyy = sotoy[Math.floor(Math.random() * (sotoy.length))]
									somtoyyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
									if (somtoyy== '🍌 : 🍌 : 🍌') {
										bp = await sendButMessage(from, `─「 🎰 *SLOT*  🎰 」─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲ 👑 *YOU WIN* 👑 ❳──\nHADIAH : $${bp}`, `Main Lagi? Klik Di Bawah `, [
									{
										buttonId: `${prefix}slot`,
										buttonText: {
											displayText: `NEXT`,
											},
											type: 1,
											}]);
										} else if (somtoyy == '🍒 : 🍒 : 🍒') {
									bp = await sendButMessage(from, `─「 🎰  *SLOT*  🎰 」─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲ 👑 *YOU WIN* 👑 ❳──\nHADIAH : $${bp}`, `Main Lagi? Klik Di Bawah `, [
									{
										buttonId: `${prefix}slot`,
										buttonText: {
											displayText: `NEXT`,
											},
											type: 1,
											}]);
										} else if (somtoyy == '🔔 : 🔔 : 🔔') {
											bp = await sendButMessage(from, `─「 🎰  *SLOT*  🎰 」─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲ 👑 *YOU WIN* 👑 ❳──\nHADIAH : $${bp}`, `Main Lagi? Klik Di Bawah `, [
											{
												buttonId: `${prefix}slot`,
												buttonText: {
													displayText: `NEXT`,
											},
											type: 1,
											}]);
												} else if (somtoyy == '🍐 : 🍐 : 🍐') {
													bp = await sendButMessage(from, `─「 🎰  *SLOT*  🎰 」─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲ 👑 *YOU WIN* 👑 ❳──\nHADIAH : $${bp}`, `Main Lagi? Klik Di Bawah `, [
											{
												buttonId: `${prefix}slot`,
												buttonText: {
													displayText: `NEXT`,
											},
											type: 1,
											}]);
														} else if (somtoyy == '🍇 : 🍇 : 🍇') {
															bp = await sendButMessage(from, `─「 🎰  *SLOT*  🎰 」─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲ 👑 *YOU WIN* 👑 ❳──\nHADIAH : $${bp}`, `Main Lagi? Klik Di Bawah `, [
											{
												buttonId: `${prefix}slot`,
												buttonText: {
													displayText: `NEXT`,
											},
											type: 1,
											}]);
																} else {
																	ok = await sendButMessage(from, `─「 🎰  *SLOT*  🎰 」─\n\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n\n──❲  *YOU LOSE*  ❳──\nKAMU BAU!`, `Main Lagi? Klik Di Bawah `, [
											{
												buttonId: `${prefix}slot`,
												buttonText: {
													displayText: `NEXT`,
											},
											type: 1,
											}]);
											}
															break
//------------------< Group >-------------------
        
       case 'block':
				 bosco.updatePresence(from, Presence.composing) 
				 bosco.chatRead (from)
					if (!isGroup) return reply(mess.group())
					if (!isOwner) return reply(mess.owner)
					bosco.blockUser (`${body.slice(7)}@c.us`, "add")
					bosco.sendMessage(from, `*ʙʟᴏᴄᴋᴇᴅ* ${body.slice(7)}@c.us`, text)
					break
		case 'unblock':
					if (!isGroup) return reply(mess.group)
					if (!isOwner) return reply(mess.owner)
				    bosco.blockUser (`${body.slice(9)}@c.us`, "remove")
					bosco.sendMessage(from, `*ᴜɴʙʟᴏᴄᴋᴇᴅ* ${body.slice(9)}@c.us`, text)
					break
         case 'getpic':
					if (!isGroup) return reply(mess.only.group)
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            pictt = await bosco.getProfilePicture(mentioned)
            pict = await getBuffer(pictt)
            bosco.sendMessage(from, pict, image, {quoted: ftroli})
            break
        case 'getpp':
               if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
               linkpp = await bosco.getProfilePicture(from) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
               buffer = await getBuffer(linkpp)
               bosco.sendMessage(from, buffer, image, {caption: "Nih", quoted: ftroli })
               } else if (mek.message.extendedTextMessage.contextInfo.mentionedJid === null || mek.message.extendedTextMessage.contextInfo.mentionedJid === undefined) {
               mberr = mek.message.extendedTextMessage.contextInfo.participant
               linkpp = await bosco.getProfilePicture(mberr) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
               buffer = await getBuffer(linkpp)
               bosco.sendMessage(from, buffer, image, { quoted: ftroli, caption: `Profile Picture of @${mberr.split("@")[0]}`, contextInfo: { "mentionedJid": [mberr] }})
               } else if (mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0) {
               mberr = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
               linkpp = await bosco.getProfilePicture(mberr) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
               buffer = await getBuffer(linkpp)
               bosco.sendMessage(from, buffer, image, { quoted: ftroli, caption: `Profile Picture of @${mberr.split("@")[0]}`, contextInfo: { "mentionedJid": [mberr] }})
}
               break
               case 'maker':
        groups = bosco.chats.array.filter(v => v.jid.endsWith('g.us'))
        privat = bosco.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
        bosco1 = await bosco.prepareMessage(from, taurus, location, {thumbnail: taurus})
        bosco2 = bosco1.message["ephemeralMessage"] ? bosco1.message.ephemeralMessage : bosco1
        timestampe = speed();
        latensie = speed() - timestampe
 hehe = `
 ‣ Hɪ : @${sender.split("@")[0]}

ʜᴇʀᴇ ɪs ʏᴏᴜʀ ᴍᴀᴋᴇʀ ᴍᴇɴᴜ 
ɪᴛs ᴜsᴇᴅ ғᴏʀ ᴇᴅɪᴛ
ʏᴏᴜʀ ᴛᴇxᴛ ᴛᴏ ɪᴍᴀɢᴇ
sᴏᴍᴇ ᴍᴀᴋᴇʀ ᴡɪʟʟ ɴᴏᴛ ᴡᴏʀᴋ 
ʙᴇᴄᴜᴀsᴇ ɪᴛs ᴀᴘɪ ᴋᴇʏ ᴘʀᴏʙʟᴇᴍ


ᴛᴀᴜʀᴜs
 `
 makerbutton = [{buttonId:`${prefix}owner`,buttonText:{displayText:'ᴏᴡɴᴇʀ'},type:1},
 {buttonId:`${prefix}txtit`,buttonText:{displayText:'ᴍᴀᴋᴇʀ ᴍᴇɴᴜ ᴏɴᴇ'},type:1},
 {buttonId:`${prefix}makermenu`,buttonText:{displayText:'ᴍᴀᴋᴇʀ ᴍᴇɴᴜ ᴛᴡᴏ'},type:1}
]
 makermessage = { contentText: `${hehe}`, footerText: `ᴍᴀᴋᴇʀ ᴍᴇɴᴜ ʜᴀᴠᴇ ᴀᴘɪ ɪssᴜᴇ\n\nʙᴇᴄᴜᴀsᴇ ᴏғ ɪᴛ ᴡɪʟʟ ɴᴏᴛ ᴡᴏʀᴋ`, buttons: makerbutton, headerType: 6, locationMessage: bosco2.message.locationMessage}
 bosco.sendMessage(from, makermessage, MessageType.buttonsMessage, { caption: 'hehe', "contextInfo": { "mentionedJid" : [sender]},})
break
case 'makermenu':
      maker1 = `
┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓
      𝐌𝐀𝐊𝐄𝐑 𝐌𝐄𝐍𝐔
┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛

 ᴛʜᴇʀᴇ ɪs ᴀᴘɪ ɪssᴜᴇ !
 ʙᴇᴄᴜᴀsᴇ
 ɪᴛ ᴡɪʟʟ ʙᴇ ɴᴏᴛ ᴡᴏʀᴋ
 ʀᴇᴀᴅʏ sᴏᴏɴ...
┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓
┣‣ ${prefix}sʜᴀᴅᴏᴡ

 ┣‣ ${prefix}ᴄᴜᴘ

 ┣‣ ${prefix}ᴄᴜᴘ1

 ┣‣ ${prefix}ʀᴏᴍᴀɴᴄᴇ

 ┣‣ ${prefix}sᴍᴏᴋᴇ

 ┣‣ ${prefix}ʙᴜʀɴᴘᴀᴘᴇʀ

 ┣‣ ${prefix}ʟᴏᴠᴇᴍᴇssᴀɢᴇ

 ┣‣ ${prefix}ᴜɴᴅᴇʀɢʀᴀss

 ┣‣ ${prefix}ʟᴏᴠᴇ

 ┣‣ ${prefix}ᴄᴏғғᴇ

 ┣‣ ${prefix}ᴡᴏᴏᴅʜᴇᴀʀᴛ

 ┣‣ ${prefix}ᴡᴏᴏᴅᴇɴʙᴏᴀʀᴅ

 ┣‣ ${prefix}sᴜᴍᴍᴇʀ3ᴅ

 ┣‣ ${prefix}ᴡᴏʟғᴍᴇᴛᴀʟ

 ┣‣ ${prefix}ɴᴀᴛᴜʀᴇ3ᴅ

 ┣‣ ${prefix}ᴜɴᴅᴇʀᴡᴀᴛᴇʀ

 ┣‣ ${prefix}ɢᴏʟᴅᴇʀʀᴏsᴇ

 ┣‣ ${prefix}sᴜᴍᴍᴇʀɴᴀᴛᴜʀᴇ

 ┣‣ ${prefix}ʟᴇᴛᴛᴇʀʟᴇᴀᴠᴇs

 ┣‣ ${prefix}ɢʟᴏᴡɪɴɢɴᴇᴏɴ

 ┣‣ ${prefix}ғᴀʟʟʟᴇᴀᴠᴇs

 ┣‣ ${prefix}ғʟᴀᴍᴍɪɴɢ

 ┣‣ ${prefix}ʜᴀʀʀʏᴘᴏᴛᴛᴇʀ

 ┣‣ ${prefix}ᴄᴀʀᴠᴇᴅᴡᴏᴏᴅ

 ┣‣ ${prefix}ᴛɪᴋᴛᴏᴋ

 ┣‣ ${prefix}ᴀʀᴄᴀᴅᴇ8ʙɪᴛ

 ┣‣ ${prefix}ɢᴀʟᴀxʏᴡᴀʟʟᴘᴀᴘᴇʀ

 ┣‣ ${prefix}ʟɪɢʜᴛᴛᴇxᴛ

 ┣‣ ${prefix}ʙᴇᴀᴜᴛɪғᴜʟғʟᴏᴡᴇʀ

 ┣‣ ${prefix}ᴘᴜᴘᴘʏᴄᴜᴛᴇ

 ┣‣ ${prefix}ʀᴏʏᴀʟᴛᴇxᴛ

 ┣‣ ${prefix}ʜᴇᴀʀᴛsʜᴀᴘᴇᴅ
 
 ┣‣ ${prefix}ʙɪʀᴛʜᴅᴀʏᴄᴀᴋᴇ

 ┣‣ ${prefix}ɢʟᴏssʏᴄʜʀᴏᴍᴇ

 ┣‣ ${prefix}ɢʀᴇᴇɴʙᴜsʜ

 ┣‣ ${prefix}ᴍᴇᴛᴀʟʟᴏɢᴏ

 ┣‣ ${prefix}ɴᴏᴇʟᴛᴇxᴛ

 ┣‣ ${prefix}ɢʟɪᴛᴛᴇʀɢᴏʟᴅ

 ┣‣ ${prefix}ᴛᴇxᴛᴄᴀᴋᴇ

 ┣‣ ${prefix}sᴛᴀʀᴛsɴɪɢʜᴛ

 ┣‣ ${prefix}ᴡᴏᴏᴅᴇɴ3ᴅ

 ┣‣ ${prefix}ᴛᴇxᴛʙʏɴᴀᴍᴇ

 ┣‣ ${prefix}ᴡʀɪᴛᴇɢᴀʟᴀᴄʏ

 ┣‣ ${prefix}ɢᴀʟᴀxʏʙᴀᴛ

 ┣‣ ${prefix}sɴᴏᴡ3ᴅ

 ┣‣ ${prefix}ʙɪʀᴛʜᴅᴀʏᴅᴀʏ

 ┣‣ ${prefix}ɢᴏʟᴅᴘʟᴀʏʙᴜᴛᴛᴏɴ

 ┣‣ ${prefix}sɪʟᴠᴇʀᴘʟᴀʏʙᴜᴛᴛᴏɴ

 ┣‣ ${prefix}ғʀᴇᴇғɪʀᴇ
 ┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛

 ┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓
      🦋 𝐓 𝐀 𝐔 𝐑 𝐔 𝐒 🦋
 ┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛
` 
catlo(maker1)
      break
      case 'txtit':
      txt1 = `
┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓
   𝐌𝐀𝐊𝐄𝐑 𝐌𝐄𝐍𝐔 𝐓𝐖𝐎
┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛

 ᴛʜᴇʀᴇ ɪs ᴀᴘɪ ɪssᴜᴇ !
 ʙᴇᴄᴜᴀsᴇ
 ɪᴛ ᴡɪʟʟ ʙᴇ ɴᴏᴛ ᴡᴏʀᴋ
 ʀᴇᴀᴅʏ sᴏᴏɴ..
┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓
┣‣ ${prefix}ʙʟᴀᴄᴋᴘɪɴᴋ

 ┣‣ ${prefix}ɴᴇᴏɴ

 ┣‣ ${prefix}ɢʀᴇᴇɴɴᴇᴏɴ

 ┣‣ ${prefix}ᴀᴅᴠᴀɴᴄᴇɢʟᴏᴡ

 ┣‣ ${prefix}ʙᴀᴛᴛʟᴇғɪᴇʟᴅ4

 ┣‣ ${prefix}ᴘᴜʙɢ

 ┣‣ ${prefix}ᴡᴇᴛɢʟᴀss

 ┣‣ ${prefix}ᴍᴜʟᴛɪᴄᴏʟᴏʀ3ᴅ

 ┣‣ ${prefix}ᴡᴀᴛᴇʀᴄᴏʟᴏʀ

 ┣‣ ${prefix}ʟᴜxᴜʀʏɢᴏʟᴅ

 ┣‣ ${prefix}ɢᴀʟᴀxʏsᴛʏʟᴇ

 ┣‣ ${prefix}ʜᴏʟᴏɢʀᴀᴍ3ᴅ

 ┣‣ ${prefix}ɢʀᴇᴇɴɴᴇᴏɴ

 ┣‣ ${prefix}ғᴜᴛᴜʀᴇɴᴇᴏɴ

 ┣‣ ${prefix}sᴀɴᴅᴡʀɪᴛɪɴɢ

 ┣‣ ${prefix}sᴀɴᴅsᴜᴍᴍᴇʀ

 ┣‣ ${prefix}sᴀɴᴅᴇɴɢʀᴀᴠᴇᴅ

 ┣‣ ${prefix}ᴍᴇᴛᴀʟᴅᴀʀᴋ

 ┣‣ ${prefix}ɴᴇᴏɴʟɪɢʜᴛ

 ┣‣ ${prefix}ʜᴏʟᴏɢʀᴀᴘʜɪᴄ

 ┣‣ ${prefix}ᴛᴇxᴛ1917

 ┣‣ ${prefix}ᴍɪɴɪᴏɴ

 ┣‣ ${prefix}ᴅᴇʟᴜxᴇsɪʟᴠᴇʀ

 ┣‣ ${prefix}ɴᴇᴡʏᴇᴀʀᴄᴀʀᴅ

 ┣‣ ${prefix}ʙʟᴏᴏᴅғʀᴏsᴛᴇᴅ

 ┣‣ ${prefix}ʜᴀʟʟᴏᴡᴇᴇɴ

 ┣‣ ${prefix}ᴊᴏᴋᴇʀʟᴏɢᴏ

 ┣‣ ${prefix}ғɪʀᴇᴡᴏʀᴋsᴘᴀʀᴋʟᴇ

 ┣‣ ${prefix}ɴᴀᴛᴜʀᴇʟᴇᴀᴠᴇs

 ┣‣ ${prefix}ʙᴏᴋᴇʜ

 ┣‣ ${prefix}ᴛᴏxɪᴄ

 ┣‣ ${prefix}sᴛʀᴀᴡʙᴇʀʀʏ

 ┣‣ ${prefix}ʙᴏx3ᴅ

 ┣‣ ${prefix}ʀᴏᴀᴅᴡᴀʀɴɪɴɢ

 ┣‣ ${prefix}ʙʀᴇᴀᴋᴡᴀʟʟ

 ┣‣ ${prefix}ɪᴄᴇᴄᴏʟᴅ

 ┣‣ ${prefix}ʟᴜxᴜʀʏ

 ┣‣ ${prefix}ᴄʟᴏᴜᴅ

 ┣‣ ${prefix}sᴜᴍᴍᴇʀsᴀɴᴅ

 ┣‣ ${prefix}ʜᴏʀʀᴏʀʙʟᴏᴏᴅ

 ┣‣ ${prefix}ᴛʜᴜɴᴅᴇʀ

 ┣‣ ${prefix}ᴘᴏʀɴʜᴜʙ

 ┣‣ ${prefix}ɢʟɪᴛᴄʜ

 ┣‣ ${prefix}ᴀᴠᴇɴɢᴇʀ

 ┣‣ ${prefix}sᴘᴀᴄᴇ

 ┣‣ ${prefix}ɴɪɴᴊᴀʟᴏɢᴏ

 ┣‣ ${prefix}ᴍᴀʀᴠᴇʟsᴛᴜᴅɪᴏ

 ┣‣ ${prefix}ʟɪᴏɴʟᴏɢᴏ

 ┣‣ ${prefix}ᴡᴏʟғʟᴏɢᴏ

 ┣‣ ${prefix}sᴛᴇᴇʟ3ᴅ
 
 ┣‣ ${prefix}ᴡᴀʟʟɢʀᴀᴠɪᴛʏ
 ┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛

 ┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓
      🦋 𝐓 𝐀 𝐔 𝐑 𝐔 𝐒 🦋
 ┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛
` 
catlo(txt1)
      break
          case 'get':
        case 'fetch': //ambil dari nuru
               if (!/^https?:\/\//.test(q)) return reply('Awali *URL* dengan http:// atau https://')
               res = await fetch(q)
               if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
               delete res
               throw `Content-Length: ${res.headers.get('content-length')}`
}
               if (!/text|json/.test(res.headers.get('content-type'))) return sendMediaURL(from, q)
               txtx = await res.buffer()
               try {
               txtx = util.format(JSON.parse(txtx+''))
               } catch (e) {
               txtx = txtx + ''
               } finally {
               reply(txtx.slice(0, 65536) + '')
}
               break
        case 'searchmsg':  //by ANU TEAM
               if (args.length < 1) return reply(`*What Message Are You Looking For?\nEx-: ${prefix + command} halo|10*`)
               teks = arg
               if (teks.includes("|")) { 
               try {
               var ve = teks.split("|")[0]
               var za = teks.split("|")[1]
               sampai = `${za}`
               if (isNaN(sampai)) return reply('*Must be a Number!*')
               batas = parseInt(sampai) + 1
               if (batas > 30) return reply('*Max 30!*')
               reply(mess.wait)
               cok = await bosco.searchMessages(`${ve}`, from, batas,1) 
               if (cok.messages.length < 2) return reply('*Message Not Found*') 
               if (cok.messages.length < parseInt(batas)) reply(`*Found Only* ${cok.messages.length - 1} *Message*`)
               for (i=1;i < cok.messages.length;i++) {
               if (cok.messages[i].message) {
               bosco.sendMessage(from, `*Found!*`, text, {sendEphemeral: true, quoted: cok.messages[i]}) 
}
}
               } catch (e) {
               return reply(String(e))
}
               } else {
               reply(`*The format is wrong tod This is an example of the correct format* : ${prefix + command} halo|10`)
}
               break

//------------------< Maker Menu >-------------------

                // Textprome //
                case 'blackpink':
                case 'neon':
                case 'greenneon':
                case 'advanceglow':
                case 'futureneon':
                case 'sandwriting':
                case 'sandsummer':
                case 'sandengraved':
                case 'metaldark':
                case 'neonlight':
                case 'holographic':
                case 'text1917':
                case 'minion':
                case 'deluxesilver':
                case 'newyearcard':
                case 'bloodfrosted':
                case 'halloween':
                case 'jokerlogo':
                case 'fireworksparkle':
                case 'natureleaves':
                case 'bokeh':
                case 'toxic':
                case 'strawberry':
                case 'box3d':
                case 'roadwarning':
                case 'breakwall':
                case 'icecold':
                case 'luxury':
                case 'cloud':
                case 'summersand':
                case 'horrorblood':
                case 'thunder':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Taurus hehe`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome/${command}?apikey=${lolkey}&text=${ini_txt}`)
                    bosco.sendMessage(from, ini_buffer, image, { quoted: ftroli})
                    break
                case 'pornhub':
                case 'glitch':
                case 'avenger':
                case 'space':
                case 'ninjalogo':
                case 'marvelstudio':
                case 'lionlogo':
                case 'wolflogo':
                case 'steel3d':
                case 'wallgravity':
		if (!isRegistered) return reply(ind.noregis())
               cf = `${body.slice(8)}`
                    txt1 = cf.split("/")[0];
                    txt2 = cf.split("/")[1];
                    if (args.length == 0) return reply(`Example: ${prefix + command} Taurus hehe`)
                    txt1 = args[0]
                    txt2 = args[1]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome2/${command}?apikey=${lolkey}&text1=${txt1}&text2=${txt2}`)
                    bosco.sendMessage(from, ini_buffer, image, { quoted: ftroli})
                    break

                    // Photo Oxy //
                case 'shadow':
                case 'cup':
                case 'cup1':
                case 'romance':
                case 'smoke':
                case 'burnpaper':
                case 'lovemessage':
                case 'undergrass':
                case 'love':
                case 'coffe':
                case 'woodheart':
                case 'woodenboard':
                case 'summer3d':
                case 'wolfmetal':
                case 'nature3d':
                case 'underwater':
                case 'golderrose':
                case 'summernature':
                case 'letterleaves':
                case 'glowingneon':
                case 'fallleaves':
                case 'flamming':
                case 'harrypotter':
                case 'carvedwood':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Taurus hehe`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${lolkey}&text=${ini_txt}`)
                    bosco.sendMessage(from, ini_buffer, image, { quoted: ftext})
                    break
                case 'tiktok':
                case 'arcade8bit':
                case 'battlefield4':
                case 'pubg':
		            cf = `${body.slice(8)}`
                    txt1 = cf.split("/")[0];
                    txt2 = cf.split("/")[1];
                    if (args.length == 0) return reply(`Example: ${prefix + command} Taurus hehe`)
                    txt1 = args[0]
                    txt2 = args[1]
                    ini_buffer = await getBuffer(`http://api.lolhuman.me/api/photooxy2/${command}?apikey=${lolkey}&text1=${txt1}&text2=${txt2}`)
                    bosco.sendMessage(from, ini_buffer, image, { quoted: fgc})
                    break

                    // Ephoto 360 //
                case 'wetglass':
                case 'multicolor3d':
                case 'watercolor':
                case 'luxurygold':
                case 'galaxywallpaper':
                case 'lighttext':
                case 'beautifulflower':
                case 'puppycute':
                case 'royaltext':
                case 'heartshaped':
                case 'birthdaycake':
                case 'galaxystyle':
                case 'hologram3d':
                case 'greenneon':
                case 'glossychrome':
                case 'greenbush':
                case 'metallogo':
                case 'noeltext':
                case 'glittergold':
                case 'textcake':
                case 'starsnight':
                case 'wooden3d':
                case 'textbyname':
                case 'writegalacy':
                case 'galaxybat':
                case 'snow3d':
                case 'birthdayday':
                case 'goldplaybutton':
                case 'silverplaybutton':
                case 'freefire':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Taurus hehe`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${lolkey}&text=${ini_txt}`)
                    bosco.sendMessage(from, ini_buffer, image, { quoted: fgif})
                    break
        case 'git':
        case 'sc':
        case 'sourcecode':
        groups = bosco.chats.array.filter(v => v.jid.endsWith('g.us'))
        privat = bosco.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
        bosco1 = await bosco.prepareMessage(from, taurus, location, {thumbnail: taurus})
        bosco2 = bosco1.message["ephemeralMessage"] ? bosco1.message.ephemeralMessage : bosco1
        timestampe = speed();
        latensie = speed() - timestampe
 hehe = `
 ‣ Hɪ : @${sender.split("@")[0]}
 ‣ Bᴏᴛ Sᴄʀɪᴘᴛ/Gɪᴛ Nᴏᴛ Aᴠᴀɪʟɪʙʟᴇ Nᴏᴡ
 ‣ Bᴏᴛ Sᴄʀɪᴘᴛ/Gɪᴛ Wɪʟʟ Bᴇ Pᴜʙʟɪᴄ
 ‣ Wʜᴇɴ Mʏ Cʜᴀɴɴᴇʟ Rᴇᴀᴄʜ 500 Sᴜʙsᴄʀɪʙᴇʀs
 ‣ Sᴜʙsᴄʀɪʙᴇ Tᴏ Gᴇᴛ Sᴄʀɪᴘᴛ/Gɪᴛ
 ‣ youtube.com/c/TAURUSEDITS
 
${jmn} -  ${jmo}\n${week} - ${calender}
 `
 menubutton = [{buttonId:`${prefix}credits`,buttonText:{displayText:'ᴄʀᴇᴅɪᴛ'},type:1},
 {buttonId:`${prefix}owner`,buttonText:{displayText:'ᴏᴡɴᴇʀ'},type:1},
 {buttonId:`${prefix}menu`,buttonText:{displayText:'ʙᴀᴄᴋ ᴛᴏ ᴍᴇɴᴜ'},type:1}
]
 menumessage = { contentText: ` `, footerText: `${hehe}`, buttons: menubutton, headerType: 6, locationMessage: bosco2.message.locationMessage}
 bosco.sendMessage(from, menumessage, MessageType.buttonsMessage, { caption: 'hehe', "contextInfo": { "mentionedJid" : [sender]},})
		     break		    
        case 'isbaileys': 
case 'bail': 
case 'baileys':
reply(`${mek.quoted.isBaileys}`)
break
case 'getcaption':
try {
reply(`${mek.quoted.title}`)
} catch {
reply(`${mek.quoted.caption}`)
}
break
case 'q': 
if (!m.quoted) return reply('reply message!')
let qse = bosco.serializeM(await m.getQuotedObj())
if (!qse.quoted) return reply('the message you replied does not contain a reply!')
await qse.quoted.copyNForward(m.chat, true)
break
     case 'groplist':
                case 'grouplist':
  const txs = bosco.chats.all().filter(v => v.jid.endsWith('g.us')).map(v =>`- ${bosco.getName(v.jid)}\n${v.jid}\n[${v.read_only ? 'Left' : 'Joined'}]`).join`\n\n`
  reply(txs)
  break
     
     
           case 'wiki':
if (args.length < 1) return reply('*What Are You Looking For?*')
teks = args.join(' ')
res = await wikiSearch(teks).catch(e => {
return reply('*Error Result Not Found*') 
}) 
result = `*Judul :* ${res[0].judul}
*Wiki :* ${res[0].wiki}`
sendFileFromUrl(res[0].thumb, image, {quoted: ftroli, caption: result}).catch(e => {
  reply(result)
})
break
           case 'tospam':
if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length > 10) {
teks = body.slice(8)
oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('*Most!*')
if (!Number(oi2)) return reply('*The number must be a number!*')
	  for (let i = 0; i < oi2; i++) {
	  bosco.sendMessage(from, `${oi1}`, MessageType.text)
	  }
} else if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length < 10) {
teks = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
if (!Number(args[0])) return reply('*The number must be a number!*')
if (Number(args[0]) >= 50) return reply('*Most!*')
	  for (let i = 0; i < args[0]; i++) {
	  bosco.sendMessage(from, teks, MessageType.text)
	  }
} else if (isQuotedSticker) {
	encmedian = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	         median = await bosco.downloadAndSaveMediaMessage(encmedian)
				anu = fs.readFileSync(median)
	if (!Number(args[0])) return reply('*The number must be a number!*')
	if (Number(args[0]) >= 50) return reply('*Most!*')
	  for (let i = 0; i < args[0]; i++) {
	  bosco.sendMessage(from, anu, sticker)
	  }
} else if (isQuotedAudio) {
	encmediat = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	            mediat = await bosco.downloadAndSaveMediaMessage(encmediat)
				anu = fs.readFileSync(mediat)
	if (!Number(args[0])) return reply('*The number must be a number!*')
	if (Number(args[0]) >= 50) return reply('*Most!*')
	  for (let i = 0; i < args[0]; i++) {
	  bosco.sendMessage(from, anu, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt:true})
	  }
} else if (isQuotedImage) {
	boij = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	delb = await bosco.downloadMediaMessage(boij)
	teks = body.slice(6)
	oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('*Most!*')
	if (!Number(oi2)) return reply('*The number must be a number!*')
	  for (let i = 0; i < oi2; i++) {
	  bosco.sendMessage(from, delb, MessageType.image, {caption: oi1})
	  }
}
	  break
      case 'delchat':
                    if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
                reply('*Successfully delete chat*' + from)
                await sleep(4000)
                bosco.modifyChat(from, ChatModification.delete)
                break
     case 'mute':
			    if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
			    if (!isGroup) return reply(mess.only.group)
                if (isMuted) return reply(`*already muted*`)
                mute.push(from)
                fs.writeFileSync('./database/mute.json', JSON.stringify(mute))
                reply('*The bot has been successfully muted in this chat*')
                break
     case 'tts':
					if (args.length < 1) return bosco.sendMessage(from, `ᴡʜᴇʀᴇ ɪs ᴛʜᴇ ʟᴀɴɢᴜᴀɢᴇ ᴄᴏᴅᴇ ᴇxᴀᴍᴘʟᴇ : ${prefix}tts ᴛʏᴘᴇ ʏᴏᴜʀ ʟᴀɴɢᴜᴀɢᴇ ʜᴇʀᴇ ʟɪᴋᴇ ᴛᴛs ᴇɴ ғᴏʀ ᴇɴɢʟɪsʜ`, text, { quoted: ftroli })
				   const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return bosco.sendMessage(from, `Teksnya mana kak? contoh : ${prefix}tts id yamate kudasai`, text, { quoted: ftroli })
					var bby = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					bby.length > 300
						? reply('Teks nya terlalu panjang kak')
						: gtts.save(ranm, bby, function () {
							exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
								fs.unlinkSync(ranm)
								buff = fs.readFileSync(rano)
								if (err) return reply(dla.stikga())
								bosco.sendMessage(from, buff, audio, { duration: 359996400, ptt: true, quoted: ftroli })
								fs.unlinkSync(rano)
							})
						})
					break
        case 'demote':
				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins) return reply(mess.only.admin)
				if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('*Reply To Target*')
			demote = mek.message.extendedTextMessage.contextInfo.participant
		    bosco.groupDemoteAdmin(from, [demote])
						reply('*Successful Demote an Admin*')
						break
					case 'promote':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
				  if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('*Reply To Target*')
			promote = mek.message.extendedTextMessage.contextInfo.participant
		    bosco.groupMakeAdmin(from, [promote])
						reply('*Successful Promoted an Admin')
						break
                case 'linkgc':
				if (!isGroup) return reply(mess.only.group)
					linkgc = await bosco.groupInviteCode(from)
					yeh = `https://chat.whatsapp.com/${linkgc}\n\nLink grup ${groupName}`
					bosco.sendMessage(from, yeh, text, { quoted: fgc })
					break
     case 'resetlinkgroup':
         case 'revoke':
         if (!isGroup) return reply(mess.only.group)
         if (!isGroupAdmins) return reply(mess.only.admin)
          json = ['action', 'inviteReset', from]
         bosco.query({json, expect200: true})
          reply('*Succes Reset Group Link*')
         break
     case 'tagme':
                  var nomqm = mek.participant
				    tagu = `@${nomqm.split('@')[0]}`
					bosco.sendMessage(from, tagu, text, { quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
					break
                    case 'fdeface':
                              var nn = body.slice(9)
                                var urlnye = nn.split("|")[0];
                                var titlenye = nn.split("|")[1];
                                var descnye = nn.split("|")[2];
                                imgbbb = require('imgbb-uploader')
                                run = getRandom('.jpeg')
                                encmediad = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                                mediad = await bosco.downloadAndSaveMediaMessage(encmediad)
                                ddatae = await imageToBase64(JSON.stringify(mediad).replace(/\"/gi, ''))
                                bosco.sendMessage(from, {
                                        text: `${urlnye}`,
                                        matchedText: `${urlnye}`,
                                        canonicalUrl: `${urlnye}`,
                                        description: `${descnye}`,
                                        title: `${titlenye}`,
                                        jpegThumbnail: ddatae
                                }, 'extendedTextMessage', { detectLinks: false })
                                break
                                case 'fitnah':
            if (!isGroup) return reply(mess.only.group)
                cr = body.slice(4)
                cs = cr.split('|')
                taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                const target = {
					contextInfo: {
						participant: taged,
						quotedMessage: {
							extendedTextMessage: {
								text: cs[1]
							}
						}
					}
				}
				bosco.sendMessage(from, cs[2], MessageType.text, target)
				break
				

                case 'fitnahpc':
                if (args.length < 1) return reply(`Usage :\n${prefix}fitnahpc [number|message|replybot]]\n\nEx : \n${prefix}fitnahpc 0|hai|hai juga markenlin`)
                var gh = body.slice(10)
                var parti = gh.split("|")[0];
                var targetq = gh.split("|")[1];
				var bot = gh.split("|")[2];
			    bosco.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${parti}@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { conversation: `${targetq}` }}})
					break
                case 'return':
				if (!isOwner) return 
					return bosco.sendMessage(from, JSON.stringify(eval(body.slice(8))), text, {quoted: ftroli})
					if (err) return bosco.sendMessage(from, `root @Taurus Ser:~ ${err}`, text, { quoted: ftroli })
                 break
              case 'swm':
						if (isMedia && !mek.message.videoMessage || isQuotedImage) {
							ppp = `${args.join(' ')}`
							const encmediao = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await bosco.downloadAndSaveMediaMessage(encmediao, `./sticker/${sender}`)
							const packname1 = ppp.split('|')[0]
							const author1 = ppp.split('|')[1]
							exif.create(packname1, author1, `stickwm_${sender}`)
							await ffmpeg(`${media}`)
									.input(media)
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											bosco.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: ftroli})
											fs.unlinkSync(media)	
											fs.unlinkSync(`./sticker/${sender}.webp`)	
											fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
							wmsti = body.slice(11)
							if (!wmsti.includes('|')) return reply(`Kirim gambar atau reply gambar dengan caption *${prefix}stickerwm nama|author*`)
							const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await bosco.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							const packname1 = wmsti.split('|')[0]
							const author1 = wmsti.split('|')[1]
							exif.create(packname1, author1, `stickwm_${sender}`)
							reply(mess.wait)
								await ffmpeg(`${media}`)
									.inputFormat(media.split('.')[4])
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										tipe = media.endsWith('.mp4') ? 'video' : 'gif'
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											bosco.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: ftroli})
											fs.unlinkSync(media)
											fs.unlinkSync(`./sticker/${sender}.webp`)
											fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else {
							reply(`*Send picture/video with caption ${prefix}stickerwm nama|author or tag images/videos that have been sent*\n*Note: Maximum video duration is 10 seconds*`)
						}
						break









     
case 'addrespon':{
          if (!isOwner && !mek.key.fromMe) return reply(mess.owner)
          if (args.length < 1) return reply(`Penggunaan ${prefix}addrespon key|respon\n\nContoh : ${prefix}addrespon hai|juga`)
          let input1 = body.slice(11)
          if (!input1.includes('|')) return reply(`Penggunaan ${prefix}addrespon key|respon\n\nContoh : ${prefix}addrespon hai|juga`)
          let input = input1.split("|")
          if (checkCommands(input[0], commandsDB) === true) return reply(`Command tersebut sudah ada`)
          addCommands(input[0], input[1], sender, commandsDB) 
          reply(`Key : ${input[0]}\nRespon : ${input[1]}\n\nRespon berhasil di set`)
          }
      break
			case 'delrespon':{
          if (!isOwner && !mek.key.fromMe) return reply(mess.owner)
            if (args.length < 1) return reply(`Penggunaan ${prefix}delrespon key\n\nContoh : ${prefix}delrespon hai`)
          if (!checkCommands(body.slice(11), commandsDB)) return reply(`Key tersebut tidak ada di database`)
          deleteCommands(body.slice(11), commandsDB)
          reply(`Berhasil menghapus respon dengan key ${body.slice(11)}`)
          }
      break
        case 'listrespon':{
          let txt = `List Respon\nTotal : ${commandsDB.length}\n\n`
          for (let i = 0; i < commandsDB.length; i++){
          txt += `❏ Key : ${commandsDB[i].pesan}\n`
          }
          reply(txt)
          }
        break
default:break
		}
		if (isTTT && isPlayer2){
if (budy.startsWith('Y')){
  tto = ky_ttt.filter(ghg => ghg.id.includes(from))
  tty = tto[0]
  angka = tto[0].angka
  ucapan = `*🎳 ɢᴀᴍᴇ ᴛɪᴄᴛᴀᴄᴛᴏᴇ 🎲*

ᴘʟᴀʏᴇʀ 1 @${tty.player1.split('@')[0]}=❌
ᴘʟᴀʏᴇʀ 2 @${tty.player2.split('@')[0]}=⭕

${angka[1]}${angka[2]}${angka[3]}
${angka[4]}${angka[5]}${angka[6]}
${angka[7]}${angka[8]}${angka[9]}

Giliran = @${tty.player1.split('@')[0]}`
  bosco.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
  }
if (budy.startsWith('N')){
tto = ky_ttt.filter(ghg => ghg.id.includes(from))
tty = tto[0]
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa
bosco.sendMessage(from, `Yahh @${tty.player2.split('@')[0]} Menolak:(`,text,{quoted:mek,contextInfo:{mentionedJid:[tty.player2]}})
}
}

if (isTTT && isPlayer1){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('ᴇɴᴛᴇʀ ᴄᴏʀʀᴇᴄᴛ ɴᴜᴍʙᴇʀ')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('ɪᴛs ɪɴ ᴄᴏɴᴛᴇɴᴛ, ᴏᴛʜᴇʀ ᴄᴏɴᴛᴇɴᴛ ᴘʟᴇᴀsᴇ')
if (main[0].gilir.includes(sender)) return reply('ᴡᴀɪᴛɪɴɢ ғᴏʀ sᴇᴄᴏɴᴅ ᴜsᴇʀs ᴛᴜʀɴ')
s = '❌'
main[0].angka[nuber] = s
main[0].gilir = main[0].player1
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*🎳Result Game Tictactoe 🎲

*🎉 @${tty.player1.split('@')[0]} won the game*\n`
ucapan2 = `*🎳Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
bosco.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.player1]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()

if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()

if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()

if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()

if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()

if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()

if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()

if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()

if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*_Permainan Seri 🗿👌_*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player2 @${tty.player2.split('@')[0]}=⭕
Player1 @${tty.player1.split('@')[0]}=❌

${ttt}

Giliran = @${tty.player2.split('@')[0]}`
 bosco.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
}
if (isTTT && isPlayer2){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '⭕'
main[0].angka[nuber] = s
main[0].gilir = main[0].player2
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*?? Result Game Tictactoe 🎲*

Yeyyy Permainan Di Menangkan Oleh *@${tty.player2.split('@')[0]}*\n`
ucapan2 = `*🎳 Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
bosco.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.player2]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳Result Game Tictactoe 🎲*

*_Permainan Seri🗿👌*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=⭕
Player2 @${tty.player2.split('@')[0]}=❌

${ttt}
 
Giliran = @${tty.player1.split('@')[0]}`
 bosco.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})

if (body.startsWith(`${prefix}${command}`)) {

                  reply(`Hai Kak ${pushname},  Command ${prefix}${command} Tidak Ada Di Dalam ${prefix}menu ${botname}`)
			  }
if(budy.includes("@verif", "@verify","daftar")){
if (isUser) return reply('Kamu sudah terdaftar di dalam database')
addRegisterUser(sender, pushname, bio_user)
fs.writeFileSync('./database/user.json', JSON.stringify(_user))
teks = `*Success Verification 🎉*\n\n${a}📛 Nama  : ${pushname}\n#️⃣ Nomor : @${sender.split('@')[0]}\n💌 Bio   : ${bio_user}${a}\n\n*Verification Di Database ${botname}*`
footeregis = `Terima Kasih Telah Mendaftar 🤗\n© ${botname} By ${ownername}`
butregis = [
{ buttonId: `${prefix}menu`, buttonText: { displayText: 'MENU 💌' }, type: 1 }
          ]
sendButLocation(from, teks, footeregis, fakeTaurus, butregis, {contextInfo: { mentionedJid: [sender]
}
})
}
if (budy.startsWith('=>')){
if (!isOwner) return
try {
return bosco.sendMessage(from, 
`${a}📥 Input: ${budy.slice(3)}
📤 OutPut: 
${JSON.stringify(eval(budy.slice(2)),null,'\t')}
${a}`
,text, {quoted:ftroli })
} catch(err) {
e = String(err)
reply(`${a} "err" :  "${e}"${a}`)
}
}
if (budy.startsWith(`$`)){
if (!isOwner) return
const sep = budy.split("\n")
let exc = budy.replace(sep[0]+"\n", "")
exec(exc, (err, stdout) => {
if (err) return bosco.sendMessage(from, `root @taurus:~ ${err}`, text, { quoted: ftroli })
if (stdout) {
bosco.sendMessage(from, stdout, text)
}
})
}
if (budy.startsWith('>')) {
if (!isOwner) return
try {
console.log(color('[ EVAL ]', 'pink'), color(time), budy, color('from', 'yellow'), pushname, color('di'), isGroup ? groupName : 'Private Chat')
reply(require('util').format(eval(`;(async () => { ${budy.slice(2)} })()`)))
} catch(e) {
console.log(e)
err = String(e)
js = JSON.stringify(e, null, 2)
if (js == '{}') js = { err }
js = JSON.stringify(js, null, 2)
js = '```' + js + '```'
reply('_' + err + '_\n\n' + js)
}
}
if (isGroup && budy != undefined) {
} else {
console.log('[',color('TEXT','teal'),']',`Message : ${budy} From`, color(pushname))
}		
}
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'green'))
        }
	}
}



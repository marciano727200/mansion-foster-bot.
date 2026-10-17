const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    }
});

client.on('qr', (qr) => {
    console.log('Escanea este código QR con tu WhatsApp:');
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('¡El bot está listo y conectado a WhatsApp!');
});

client.on('message', async (message) => {
    const texto = message.body.toLowerCase().trim();

    if (texto === '.menu') {
        const menuText = 
`╭━〔 *MANSION FOSTER* 〕━⬣
┃
┃ .stock1 (PERFILES Y CUENTAS)
┃ .stock2 (CALL OF DUTY MOBILE)
┃ .stock3 (FREE FIRE)
┃ .stock4 (MINECRAFT)
┃ .stock5 (SEGUIDORES & MAS)
┃
╰━━━━━━━━━━━━━━━━━━━⬣

💡 *SI NECESITAS SERVICIOS DE ALGUN JUEGO O SERVICIO QUE NO VEAS PREGUNTA POR FAVOR*

💳 .pago (NUESTRO MÉTODO DE PAGO)`;

        await message.reply(menuText);
    } 
    else if (texto === '.stock1') {
        const stock1Text = 
`☄️ 𝑴-𝑭 𝑺𝑻𝑹𝑬𝑨𝑴𝑰𝑵𝑮 ☄️

*PERFILES Y CUENTAS*

🧸 _NETFLIX_ 
𐙚 Perfil $60
ꕤ Cuenta Completa $250 

🔖 _DISNEY_ 
𐙚 Perfil $25
ꕤ Completa $125

🫆 _HBO MAX_ 
𐙚 Perfil $10
ꕤ Completa $50

🪼 _PRIME VIDEO_ 
𐙚 Perfil 1M $10
ꕤ Completa 1M $30
𐙚 Perfil 6M $40 
ꕤ Completa 6M $120 (opcional a tu correo) 

☄️ _VIX_ 
𐙚 Perfil 1M $4
ꕤ Perfil Anual $13 
𐙚 Completa 1M $20
ꕤ Completa Anual $45

🛵 _FOX ONE_ 
𐙚 Perfil $30
ꕤ Completa $70 

🎀 _CRUNCHYROLL_ 
𐙚 Perfil $15
ꕤ Completa $70

🎎 _PARAMOUNT_ 
𐙚 Perfil $10
ꕤ Completa $40

🧧 _UNIVERSAL+_ 
𐙚 Perfil $10
ꕤ Completa $30

📜 _APPLE TV_ 
𐙚 Perfil $10
ꕤ Completa $30 

🔅 _YOUTUBE PREMIUM_ 
𐙚 Invitación $25
ꕤ Familiar a tus datos $80 

🐸 _SPOTIFY_ 
𐙚 1M $50
ꕤ 4M $120

🐤 _CANVA_ 
𐙚 Invitación $35 

🤖 _GEMINI_ 
𐙚 8M $100 

🪁 _ADOBE_ 
𐙚 1M $20
ꕤ 6M $60
𐙚 Anual $100

🥊 _PORNHUB_ 
𐙚 Cuenta $45

🥌 _APPLE MUSIC_ 
𐙚 1M $30


✅ *Garantía 25 días mensual, 9 meses anual* 
💸 *_Cuentas renovables hacer pago en el día 25 del servicio, para evitar corte del mismo*_

👽 _Agradecemos tu preferencia, disponibles 24/7 para venta y soporte_`;

        await message.reply(stock1Text);
    } 
    else if (texto === '.stock2') {
        const stock2Text = 
`COD🪖POINTS

2400 × $450
5000 × $850
7200 × $1200
10800 x $1689
24000 × $4000

ENTREGA DE 1 A 72 HORAS

> SE REQUIERE ACCESO POR ACTIVISION`;

        await message.reply(stock2Text);
    } 
    else if (texto === '.stock3') {
        const stock3Text = 
`🐢 𝑫𝑰𝑨𝑴𝑨𝑵𝑻𝑬𝑺 𝟏 𝑽𝑬𝒁 𝑿 𝑰𝑫 🐢 
_Mandar id para verificar_ 

ꕥ 341 diamantes | $43 mxn 
ꕥ 572 diamantes | $74 mxn 
ꕥ 1166 diamantes | $130 mxn 
ꕥ 2398 diamantes | $235 mxn 
ꕥ 6160 diamantes | $535 mxn 

☄️ 𝑫𝑰𝑨𝑴𝑨𝑵𝑻𝑬𝑺 𝑰𝑳𝑰𝑴𝑰𝑻𝑨𝑫𝑶𝑺 ☄️ 

𐙚 572 diamantes | $85 mxn 
𐙚 1166 diamantes | $170 mxn 
𐙚 2398 diamantes | $295 mxn 
𐙚 3564 diamantes | $410 mxn 
𐙚 4796 diamantes | $560 mxn 
𐙚 6160 diamantes | $685 mxn 

🎀 Pase BOOYAH.
🔖 Tarjetas semanales, mensuales. 
🧸 Fragmentos y cajas evolutivas.
🥊 Likes para tu perfil de ff. 
🪁 Nick de color. 

🫆 _Cualquier otro tipo de cantidad de diamantes se cotiza_`;

        await message.reply(stock3Text);
    } 
    else if (texto === '.stock4') {
        const stock4Text = 
`🤖 𝐌𝐈𝐍𝐄𝐂𝐑𝐀𝐅𝐓 🤖 

🔖 _MINECOINS_

M | 320
M | 960+60
M | 1600+120
M | 3200+300
M | 8000+800

📜 _REALM_ 

BASICO
PLUS

🫆 _Cualquier cantidad de minecoins está sujeto a cambio de precio por usdt, pide cotización_`;

        await message.reply(stock4Text);
    } 
    else if (texto === '.stock5') {
        const stock5Text = 
`𝐒𝐄𝐆𝐔𝐈𝐃𝐎𝐑𝐄𝐒, 𝐋𝐈𝐊𝐄𝐒 𝐘 𝐕𝐈𝐒𝐓𝐀𝐒 𝐏𝐀𝐑𝐀 𝐓𝐔𝐒 𝐑𝐄𝐃𝐄𝐒 𝐒𝐎𝐂𝐈𝐀𝐋𝐄𝐒

📸 *_INSTAGRAM_* 
⛓️‍💥 Seguidores 
💣 Likes 
⛓️‍💥 Comentarios 
💣 Compartidas 

💡 *_TIKTOK_* 
⛓️‍💥 Seguidores 
💣 Likes 
⛓️‍💥 Vistas 
💣 Comentarios 

📺 *_FACEBOOK_* 
⛓️‍💥 Seguidores 
💣 Reacciones
⛓️‍💥 Comentarios 
💣 Compartidas 


> SI BUSCAS MAS CANTIDAD SE MEJORA EL PRECIO DE CUALQUIER SERVICIO`;

        await message.reply(stock5Text);
    } 
    else if (texto === '.pago') {
        const pagoText = 
`𝑴-𝑭 𝑺𝑻𝑹𝑬𝑨𝑴𝑰𝑵𝑮 

_TRANSFERENCIA_ 

646180401642427005
STP
Renatta Beltrán 


_DEPOSITO_

2242 1701 82771729
Spin
RENATTA BELTRAN`;

        await message.reply(pagoText);
    }
    else if (texto === 'hola') {
        await message.reply('¡Hola! 👋 Bienvenido a *MANSION FOSTER*. Escribe *.menu* para ver la lista de servicios disponibles.');
    }
});

client.initialize();

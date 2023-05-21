const net = require("net");
const config = require('./config');

const client = new net.Socket();
client.connect('5201', 'h41.p.ctrader.com', function () {
    console.log('Server connected');
    client.write('8=FIX.4.49=13235=A49=demo.icmarkets.872113356=cServer34=19652=20230521-05:47:51.98650=QUOTE57=QUOTE553=8721133554=k322437951498=0108=3010=170');
})

client.on('data', function (data) {
    console.log('Received: ' + data);
    // client.destroy(); // kill client after server's response
});

client.on('close', function () {
    console.log('Connection closed');
});
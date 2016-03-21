var WebSocketClient = require('websocket').client;
 
var client = new WebSocketClient();
var authClient = new WebSocketClient();

authClient.on('httpResponse', function(response, wsClient) {
    client.connect('wss://iotmmsi070603trial.hanatrial.ondemand.com/com.sap.iotservices.mms/v1/internal/ws/data/6499f385-138b-4749-b9b8-a1cd55be47b6');
});
 
client.on('connectFailed', function(error) {
    console.log('Connect Error: ' + error.toString());
});
 
client.on('connect', function(connection) {
    console.log('WebSocket Client Connected');
    connection.on('error', function(error) {
        console.log("Connection Error: " + error.toString());
    });
    connection.on('close', function() {
        console.log('echo-protocol Connection Closed');
    });
    connection.on('message', function(message) {
        if (message.type === 'utf8') {
            console.log("Received: '" + message.utf8Data + "'");
        }
    });
    
    function sendNumber() {
        if (connection.connected) {
            var number = Math.round(Math.random() * 0xFFFFFF);
            connection.sendUTF('{"messageType":"6e443432878a095ba277","messages":[{"applianceid":"switch on","controlcode":"led 1"}]} ');
            setTimeout(sendNumber, 10000);
        }
    }
    sendNumber();
});
 
//client.connect('ws://192.168.7.1:8080/TomcatWebSocket/websocket/echoAnnotation');
var requestOptions = {
    'Host':'iotmmsi060130trial.hanatrial.ondemand.com',
    'Connection' : 'keep-alive, Upgrade',
    'Upgrade' : 'websocket',
    'Cache-Control' : 'no-cache',
    'Authorization' : 'Bearer dd70406a1f448313d361b26c17ec53e'
    //'Cookie': 'JSESSIONID=E911C431DBC0DB1541167B285B2CDE1DC1BADA2E77886A5D69DE35EC80862A4F; JTENANTSESSIONID_i070603trial=lwwX0SrSjdCfTTGhYQDLCBSgVnlbZTiGBPLGr2GtVpg%3D; BIGipServer~jpaas_folder~iotmmsi070603trial.hanatrial.ondemand.com=!UYzl0SiS6vccRFQpYf1NycGTn6tEUZoqiK1GcIFAfSoIwl8HElPHdmh2mZ2E/M7ULoLMOR90grrmMg=='
};
client.connect('wss://iotmmsi060130trial.hanatrial.ondemand.com/com.sap.iotservices.mms/v1/api/ws/data/ae1a9cc9-9fa1-4700-8b6c-0416e88222e4', null, 'https://iotmmsi060130trial.hanatrial.ondemand.com', requestOptions, null)
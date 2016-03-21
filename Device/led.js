
var b = require('bonescript');

var on = 0;
var off = 1;

var ledPowerPin = "P9_17";
var ledGreenPin = "P9_15";
var ledRedPin   = "P9_13";
var ledBluePin  = "P9_11";


var statePower = 0;
var stateRed   = 0;
var stateBlue  = 0;
var stateGreen = 0;

var delay = 1000;


var led = {

    delay: 1000,
    sleep: function(milliseconds) {
       var currentTime = new Date().getTime();

        while (currentTime + milliseconds >= new Date().getTime()) {
     }
    },

    setPinModes: function(){
     b.pinMode(ledPowerPin, 'out');
     b.pinMode(ledRedPin, 'out');
     b.pinMode(ledGreenPin, 'out');
     b.pinMode(ledBluePin, 'out');
    },
    
    ledPowerOn: function(){
     this.statePower = 1;
     b.digitalWrite(this.ledPowerPin, this.statePower);
    },
    
    ledPowerOff: function (){
     statePower = 0;
     b.digitalWrite(ledPowerPin, statePower);
    },
    
    ledSetRed: function (){
     statePower=on;
     stateRed = on;
     stateBlue = off;
     stateGreen = off;
     b.digitalWrite(ledPowerPin, statePower);
     b.digitalWrite(ledRedPin, stateRed);
     b.digitalWrite(ledGreenPin, stateGreen);
     b.digitalWrite(ledBluePin, stateBlue);
    },
    
    ledSetGreen: function (){
     statePower=on;
     stateRed = off;
     stateBlue = off;
     stateGreen = on;
     b.digitalWrite(ledPowerPin, statePower);
     b.digitalWrite(ledRedPin, stateRed);
     b.digitalWrite(ledGreenPin, stateGreen);
     b.digitalWrite(ledBluePin, stateBlue);
    },
    
    ledSetBlue: function (){
     statePower=on;
     stateRed = off;
     stateBlue = on;
     stateGreen = off;
     b.digitalWrite(ledPowerPin, statePower);
     b.digitalWrite(ledRedPin, stateRed);
     b.digitalWrite(ledGreenPin, stateGreen);
     b.digitalWrite(ledBluePin, stateBlue);
    },
    
    ledSetYellow: function (){
     statePower=on;
     stateRed = on;
     stateBlue = off;
     stateGreen = on;
     b.digitalWrite(ledPowerPin, statePower);
     b.digitalWrite(ledRedPin, stateRed);
     b.digitalWrite(ledGreenPin, stateGreen);
     b.digitalWrite(ledBluePin, stateBlue); 
    },
    
    ledSetMagenta: function (){
     statePower=on;
     stateRed = on;
     stateBlue = on;
     stateGreen = off;
     b.digitalWrite(ledPowerPin, statePower);
     b.digitalWrite(ledRedPin, stateRed);
     b.digitalWrite(ledGreenPin, stateGreen);
     b.digitalWrite(ledBluePin, stateBlue); 
    },
    
    
    
    ledSetCyan: function (){
     statePower=on;
     stateRed = off;
     stateBlue = on;
     stateGreen = on;
     b.digitalWrite(ledPowerPin, statePower);
     b.digitalWrite(ledRedPin, stateRed);
     b.digitalWrite(ledGreenPin, stateGreen);
     b.digitalWrite(ledBluePin, stateBlue); 
    },
    
    
    ledSetWhite: function (){
    
     statePower=on;
     stateRed =on;
     stateBlue = on;
     stateGreen =on;
     b.digitalWrite(ledPowerPin, statePower);
     b.digitalWrite(ledRedPin, stateRed);
     b.digitalWrite(ledGreenPin, stateGreen);
     b.digitalWrite(ledBluePin, stateBlue);
     
    },
    
    
    
    ledSetNone: function (){
     
     statePower=off;
     stateRed = off;
     stateBlue = off;
     stateGreen = off;
     b.digitalWrite(ledPowerPin, statePower);
     b.digitalWrite(ledRedPin, stateRed);
     b.digitalWrite(ledPowerPin, stateGreen);
     b.digitalWrite(ledPowerPin, stateBlue);
     
    }
    
};


/*
setPinModes();

ledSetRed();
sleep(delay);
ledSetGreen();
sleep(delay);
ledSetBlue();
sleep(delay);
ledSetYellow();
sleep(delay);
ledSetMagenta();
sleep(delay);
ledSetCyan();
sleep(delay);
ledSetWhite();
sleep(delay);
ledSetNone();
sleep(delay);

*/



/*
 setPinStates();


toggleLED = function() {
 state = state ? 0 : 1;
 b.digitalWrite(led, state);
 b.digitalWrite("P8_14", state);
 b.digitalWrite("P8_15", state);
 b.digitalWrite("P8_16", state);
 console.log(state);
};

timer = setInterval(toggleLED, 2000);

stopTimer = function() {
 clearInterval(timer);
};

setTimeout(stopTimer, 120000);
*/
//Utility sleep


module.exports = led;



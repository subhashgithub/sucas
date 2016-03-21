
var b = require('bonescript');

var on = 0;
var off = 1;

var ledPowerPin = "P9_17";
var ledGreenPin = "P9_15";
var ledRedPin   = "P9_13";
var ledBluePin  = "P9_11";

var drRoom = "P8_10";
var dinRoom = "P8_12";
var bRoom1   = "P8_14";
var bRoom2  = "P8_16";

/*
var this.statePower = 0;
var this.stateRed   = 0;
var this.stateBlue  = 0;
var this.stateGreen = 0;

var this.stateDrRoom = 0;
var this.stateDinRoom = 0;
var this.stateBRoom1 = 0;
var this.stateBRoom2 = 0;*/

var delay = 1000;




var led = {

    delay: 1000,
    prevStateCount: 0,
    stateCount: 0,
    multiplier: 120,
   
   
    statePower: off,
    stateRed: off,
    stateBlue: off,
    stateGreen: off,
    stateDrRoom: off,
    stateDinRoom: off,
    stateBRoom1: off,
    stateBRoom2: off,
    
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
     b.pinMode(drRoom, 'out');
     b.pinMode(dinRoom, 'out');
     b.pinMode(bRoom1, 'out');
     b.pinMode(bRoom2, 'out');
    },
    
    ledPowerOn: function(){
     this.this.statePower = 1;
     b.digitalWrite(this.ledPowerPin, this.this.statePower);
    },
    
    ledPowerOff: function (){
     this.statePower = 0;
     b.digitalWrite(ledPowerPin, this.statePower);
    },
    
    ledSetRed: function (){
     this.statePower=on;
     this.stateRed = on;
     this.stateBlue = off;
     this.stateGreen = off;
     b.digitalWrite(ledPowerPin, this.statePower);
     b.digitalWrite(ledRedPin, this.stateRed);
     b.digitalWrite(ledGreenPin, this.stateGreen);
     b.digitalWrite(ledBluePin, this.stateBlue);
    },
    
    ledSetGreen: function (){
     this.statePower=on;
     this.stateRed = off;
     this.stateBlue = off;
     this.stateGreen = on;
     b.digitalWrite(ledPowerPin, this.statePower);
     b.digitalWrite(ledRedPin, this.stateRed);
     b.digitalWrite(ledGreenPin, this.stateGreen);
     b.digitalWrite(ledBluePin, this.stateBlue);
    },
    
    ledSetBlue: function (){
     this.statePower=on;
     this.stateRed = off;
     this.stateBlue = on;
     this.stateGreen = off;
     b.digitalWrite(ledPowerPin, this.statePower);
     b.digitalWrite(ledRedPin, this.stateRed);
     b.digitalWrite(ledGreenPin, this.stateGreen);
     b.digitalWrite(ledBluePin, this.stateBlue);
    },
    
    ledSetYellow: function (){
     this.statePower=on;
     this.stateRed = on;
     this.stateBlue = off;
     this.stateGreen = on;
     b.digitalWrite(ledPowerPin, this.statePower);
     b.digitalWrite(ledRedPin, this.stateRed);
     b.digitalWrite(ledGreenPin, this.stateGreen);
     b.digitalWrite(ledBluePin, this.stateBlue); 
    },
    
    ledSetMagenta: function (){
     this.statePower=on;
     this.stateRed = on;
     this.stateBlue = on;
     this.stateGreen = off;
     b.digitalWrite(ledPowerPin, this.statePower);
     b.digitalWrite(ledRedPin, this.stateRed);
     b.digitalWrite(ledGreenPin, this.stateGreen);
     b.digitalWrite(ledBluePin, this.stateBlue); 
    },
    
    
    
    ledSetCyan: function (){
     this.statePower=on;
     this.stateRed = off;
     this.stateBlue = on;
     this.stateGreen = on;
     b.digitalWrite(ledPowerPin, this.statePower);
     b.digitalWrite(ledRedPin, this.stateRed);
     b.digitalWrite(ledGreenPin, this.stateGreen);
     b.digitalWrite(ledBluePin, this.stateBlue); 
    },
    
    
    ledSetWhite: function (){
    
     this.statePower=on;
     this.stateRed =on;
     this.stateBlue = on;
     this.stateGreen =on;
     b.digitalWrite(ledPowerPin, this.statePower);
     b.digitalWrite(ledRedPin, this.stateRed);
     b.digitalWrite(ledGreenPin, this.stateGreen);
     b.digitalWrite(ledBluePin, this.stateBlue);
     
    },
    
    
    
    ledSetNone: function (){
     
     this.statePower=off;
     this.stateRed = off;
     this.stateBlue = off;
     this.stateGreen = off;
     b.digitalWrite(ledPowerPin, this.statePower);
     b.digitalWrite(ledRedPin, this.stateRed);
     b.digitalWrite(ledGreenPin, this.stateGreen);
     b.digitalWrite(ledBluePin, this.stateBlue);
     
    },
    
    initialize : function () {
     this.statePower=off;
     this.stateRed = off;
     this.stateBlue = off;
     this.stateGreen = off;
     this.stateDrRoom=off;
     this.stateDinRoom = off;
     this.stateBRoom1 = off;
     this.stateBRoom2 = off;
    // b.digitalWrite(ledPowerPin, this.statePower);
     b.digitalWrite(ledRedPin, this.stateRed);
     b.digitalWrite(ledGreenPin, this.stateGreen);
     b.digitalWrite(ledBluePin, this.stateBlue);
     b.digitalWrite(drRoom, this.stateDrRoom);
     b.digitalWrite(dinRoom, this.stateDinRoom);
     b.digitalWrite(bRoom1, this.stateBRoom1);
     b.digitalWrite(bRoom2, this.stateBRoom2);
    },
    
    getPowerStatus: function() {
        var msgDrRoom = {"applianceid":"drRoom","controlcode":""+this.stateDrRoom};
        var msgDinRoom = {"applianceid":"dinRoom","controlcode":"" +this.stateDinRoom};
        var msgBRoom1 = {"applianceid":"bRoom1","controlcode":"" + this.stateBRoom1};
        var msgBRoom2 = {"applianceid":"bRoom2","controlcode":""+this.stateBRoom2};
        
        return [msgDrRoom, msgDinRoom, msgBRoom1, msgBRoom2];
        
    },
    
    getPowerValue: function () {
        this.previousStateCount = this.stateCount;
        this.stateCount = 0;
        if (this.stateDrRoom == on)  { 
         this.stateCount++; 
         
        }
        if (this.stateDinRoom == on) {
         this.stateCount++; 
         
        }
        if (this.stateBRoom1 == on) {
         this.stateCount++;
        }
        if (this.stateBRoom2 == on) { 
         
         this.stateCount++;
        }
        
        if (this.previousStateCount === 4 && this.stateCount < 4) {
         this.ledSetGreen();
         this.sleep(8000);
         this.ledSetNone();
        }
        var powerValue = this.stateCount * this.multiplier;
        date = new Date();
        time = Math.floor(Date.now() / 1000); 
        
        var msg = {"timestamp":time, "powervalue": powerValue,"customerid": "123"};
        return [msg];
    },
    
    setPower: function (applianceid, controlcode, alertVal) {
     var room;
     switch(applianceid) {
      case 'drRoom' : 
       this.stateDrRoom = controlcode === 'on' ? on : off;
       this.setPowerStatusForAppliance(this.stateDrRoom, controlcode, drRoom); 
       break;
      case 'dinRoom' : 
       this.stateDinRoom = controlcode === 'on' ? on : off;
       this.setPowerStatusForAppliance(this.stateDinRoom, controlcode, dinRoom); break;
      case 'bRoom1' : 
       this.stateBRoom1 = controlcode === 'on' ? on : off;
       this.setPowerStatusForAppliance(this.stateBRoom1, controlcode, bRoom1); break;
      case 'bRoom2' : 
       this.stateBRoom2 = controlcode === 'on' ? on : off;
       this.setPowerStatusForAppliance(this.stateBRoom2, controlcode,bRoom2); break;
      //case 'alert' : this.setAlert( controlcode); break;
      default: break;
     }
     if (alertVal != undefined) {
      this.setAlert(alertVal);
     }
    },
    
    setPowerStatusForAppliance : function  (state, control, room) {
        
        b.digitalWrite(room, state);
    },
    
    setAlert: function (color) {
        switch (color) {
         
         case 'red' : this.ledSetRed(); break;
         case 'blue': this.ledSetBlue(); break;
         case 'green': this.ledSetGreen();break;
         case 'cyan' : this.ledSetCyan(); break;
         case 'magenta': this.ledSetMagenta(); break;
         case 'yellow': this.ledSetYellow();break;
         case 'white': this.ledSetWhite();break;
         default: break;
         
        }
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



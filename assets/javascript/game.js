// Selects a random number between 19 - 120
var Random=Math.floor(Math.random()*101+19)
   
$('#computerPoints').text(Random);
console.log(Random);

//random numbers for each jewel between 1 - 12
var num1 = Math.floor(Math.random()*11+1)
var num2 = Math.floor(Math.random()*11+1)
var num3 = Math.floor(Math.random()*11+1)
var num4 = Math.floor(Math.random()*11+1)
   console.log(num1);
   console.log(num2);
   console.log(num3);
   console.log(num4);

var currentPoints = 0; 
var winCounter = 0;
var lossCounter = 0;


$('#winCounter').text(winCounter);
$('#lossCounter').text(lossCounter);


//===================================================
//main game

function reset() {
    Random=Math.floor(Math.random()*101+19);
    $('#computerPoints').text(Random);

    num1 = Math.floor(Math.random()*11+1);
    num2 = Math.floor(Math.random()*11+1);
    num3 = Math.floor(Math.random()*11+1);
    num4 = Math.floor(Math.random()*11+1);

    currentPoints = 0;
    $('#currentPoints').text(currentPoints);
     } 

 function win() {
    winCounter++; 
    $('#winCounter').text(winCounter);
    reset();
    }

function loss() {
    lossCounter++;
    $('#lossCounter').text(lossCounter);
    reset();
    }

//clickys for jewels ==================================


$('#amathystBall').on ('click', function(){
    currentPoints = (currentPoints + num1);
    $('#currentPoints').text(currentPoints);

    if (currentPoints === Random){
        win();
    } else (currentPoints > Random); {
        loss();
        };   
    }); 

$('#bigCrystal').on ('click', function(){
    currentPoints = (currentPoints + num2);
    $('#currentPoints').text(currentPoints);

    if (currentPoints === Random){
        win();
    } else (currentPoints > Random); {
        loss();
          } 
    });

$('#pearAmathyst').on ('click', function(){
    currentPoints = (currentPoints + num3);
    $('#currentPoints').text(currentPoints);
            
    if (currentPoints === Random){
        win();
    } else (currentPoints > Random); {
        loss();
        } 
    });

$('#3crystals').on ('click', function(){
    currentPoints = (currentPoints + num4);
    $('#currentPoints').text(currentPoints);
        
    if (currentPoints === Random){
        win();
    } else (currentPoints > Random); {
        loss(); {
        }
    }
});  

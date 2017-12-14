
    //creates a random number between 19 and 120
    var randomNumber = Math.floor(Math.random() * ((120)-(19)+1) + (19));
    //creates the random numbers to be given to each crystal
    var RubyRedRandom = Math.floor(Math.random() * ((12)-(1)+1) + (1));
    var DiamondRandom = Math.floor(Math.random() * ((12)-(1)+1) + (1));
    var RubyYellowRandom = Math.floor(Math.random() * ((12)-(1)+1) + (1));
    var GreenCrystalRandom = Math.floor(Math.random() * ((12)-(1)+1) + (1));
    // this code inserts the var randomNumber into the space on the dom designated for
    document.getElementById("number").innerHTML=""+randomNumber;
    //by pressing an image, its random value will be accumulated in the var accumalator until it equals randomNumber or goes greater than 

    

function reset(){
//creates a random number between 19 and 120
randomNumber = Math.floor(Math.random() * ((120)-(19)+1) + (19));
//creates the random numbers to be given to each crystal
RubyRedRandom = Math.floor(Math.random() * ((12)-(1)+1) + (1));
DiamondRandom = Math.floor(Math.random() * ((12)-(1)+1) + (1));
RubyYellowRandom = Math.floor(Math.random() * ((12)-(1)+1) + (1));
GreenCrystalRandom = Math.floor(Math.random() * ((12)-(1)+1) + (1));
// this code inserts the var randomNumber into the space on the dom designated for
document.getElementById("number").innerHTML=""+randomNumber;
acumulador=0;
document.getElementById("TOSC").innerHTML="Your total score is: " + acumulador;
//by pressing an image, its random value will be accumulated in the var accumalator until it equals randomNumber or goes greater than 
}
var acumulador = 0;
var losses = 0;
var wins = 0;
//document.getElementById("wins").innerHTML="Wins: " + wins;
function selectimage(selected) {
    acumulador+=selected;
    document.getElementById("TOSC").innerHTML="Your total score is: " + acumulador;
    if (acumulador > randomNumber){
        losses++;
        document.getElementById("Losses").innerHTML="Losses: " + losses;
        reset();
        //document.getElementById("You").innerHTML="lost"; THIS CODE WILL NOT DISPLAY THE LINE ABOVE, ASK TA.
    } else if (acumulador===randomNumber){
        wins++;
        document.getElementById("Wins").innerHTML="Wins: " + wins;
        reset();
    }
}


$(RubyRed).on("click", function() {

    selectimage(RubyRedRandom);
});

$(Diamond).on("click", function (){

    selectimage(DiamondRandom);
});

$(RubyYellow).on("click", function (){
    
    selectimage(RubyYellowRandom);
});

$(GreenCrystal).on("click", function (){
    
    selectimage(GreenCrystalRandom);
});
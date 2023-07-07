buttonColour=["red","blue","green","yellow"];
let gamePattern=[];
let userClickedpattern=[];
let level=0;
let flag=1;

$("h1").click(function () {
    if(!level){nextSequence();}
});
$("body").keypress(function () {
    if(!level){nextSequence();}
});

function press(par) {
    $("#"+par).addClass("pressed");
    setTimeout(function(){$("#"+par).removeClass("pressed");},100);
}

function things(idd) {    
switch(idd){
    case "red":
        var audio = new Audio("./sounds/red.mp3");
        audio.play();
        break;
    case "blue":
        var audio1 = new Audio("./sounds/yellow.mp3");
        audio1.play();
        break;
    case "green":
        var audio11 = new Audio("./sounds/green.mp3");audio11.play();
        break;
    case "yellow":
        var audio12 = new Audio("./sounds/blue.mp3");audio12.play();
        break;
    default:
        var audio = new Audio("./sounds/wrong.mp3");
        audio.play();
}
}

function nextSequence(){
    level++;
$("h1").text("level  "+level);
let randomNumber=Math.floor((Math.random()*4));
let randomChoosenColor=buttonColour[randomNumber];
gamePattern.push(randomChoosenColor);
things(randomChoosenColor);
press(randomChoosenColor);

}

    $(".btn").click(function(event) {
        userchoosencolor=event.target.id;
        userClickedpattern.push(userchoosencolor);
        things(userchoosencolor);
        press(userchoosencolor);
        let l=userClickedpattern.length;
        if(l===level){
        setTimeout(function(){check();},1000);}
      } );


function check() {   
    for(let i=0;i<level;i++){
        if(userClickedpattern[0]!= gamePattern[i]){
        flag=0; 
        break;
        }
        userClickedpattern.shift();
    }
    if(flag===1){
    nextSequence();
    }
    else{
        things("aa");
        $("h1").html("<strong>Game over </strong><br>press 'here' or any key to restart");
        $("body").addClass("game-over");
        $("h1").click(function () {
            window.location.reload();
        });
        $("body").keypress(function () {
            window.location.reload();
        });
    }
}  


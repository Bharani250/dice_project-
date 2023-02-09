var random1 = Math.floor(Math.random()*6+1);
var random2 = Math.floor(Math.random()*6+1);
if(random1>random2){
    document.getElementById("Status").innerHTML = "Player 1 has won!";
    
}
else if(random1<random2){
    document.getElementById("Status").innerHTML = "Player 2 has won!";
}
else{
    document.getElementById("Status").innerHTML = "Draw";
}
document.getElementById("pl1").setAttribute("src","images/dice"+random1+".png");
document.getElementById("pl2").setAttribute("src","images/dice"+random2+".png");

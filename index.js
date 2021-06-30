var num1=(Math.floor(Math.random()*6)+1);
var num2=(Math.floor(Math.random()*6)+1);

var p1= "images/dice"+num1+".png";
var p2= "images/dice"+num2+".png";

var image1= document.querySelectorAll("img")[0];
var image2= document.querySelectorAll("img")[1];

image1.setAttribute("src",p1);
image2.setAttribute("src",p2);

if(num1>num2){
  document.querySelector("h1").innerHTML="🚩Player1 wins!";
}
else if (num2>num1) {
  document.querySelector("h1").innerHTML="Player2 wins!🚩";
}
else{
  document.querySelector("h1").innerHTML="Draw!";
}

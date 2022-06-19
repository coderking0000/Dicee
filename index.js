var randomNumber1 =Math.floor(Math.random()*6)+1;
var dice1=randomNumber1;
randomNumber1 = "images/"+"dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src" , randomNumber1);
var randomNumber2 = Math.floor(Math.random()*6)+1;
var dice2=randomNumber2;
randomNumber2 ="images/"+"dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src" , randomNumber2);

if(dice1>dice2)
{
  document.querySelector("h1").innerHTML ="<em><strong>🚩 Player 1 wins!</strong></em>";
}

else if(dice1<dice2)
{
  document.querySelector("h1").innerHTML ="<em><strong>Player 2 wins! 🚩</strong></em>";
}

else
{
  document.querySelector("h1").innerHTML  ="<em><strong>Draw!</strong></em>";
}

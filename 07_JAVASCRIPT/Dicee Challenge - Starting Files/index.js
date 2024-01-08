var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var img1 = document.querySelector(".img1");
var img2 = document.querySelector(".img2");

img1.setAttribute('src', './images/dice' + randomNumber1 + '.png' );
img2.setAttribute('src', './images/dice' + randomNumber2 + '.png' );

var text = document.querySelector("h1");


if(randomNumber1 > randomNumber2)
{
    text.innerHTML= "Player 1 Won";
}
else if(randomNumber2 > randomNumber1)
{
    text.innerHTML = "Player 2 Won";
}
else
{
    text.innerHTML = "Its a Tie, Try Again";
}
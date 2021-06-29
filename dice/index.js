let randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.log( "Random number 1:", randomNumber1);
let randomDiceImage = "dice" + randomNumber1 + ".png";
let randomImageSource = "images/" + randomDiceImage;
let image1 = document.querySelector(".img1");
image1.setAttribute("src", randomImageSource );

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(`Random number 2: ${randomNumber2}`);
randomDiceImage = "dice" + randomNumber2 + ".png";
randomImageSource = "images/" + randomDiceImage;
let image2 = document.querySelector(".img2");
image2.setAttribute("src", randomImageSource);

if( randomNumber1 > randomNumber2 ){
    document.querySelector("h1").textContent = "Player 1 Wins!";
} else if ( randomNumber2 > randomNumber1 ){
    document.querySelector("h1").textContent = "Player 2 Wins!";    
} else {
    document.querySelector("h1").textContent = "Draw!";
}

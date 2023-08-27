async function fun() {
    document.querySelectorAll(".ddd")[0].classList.add("run");
    document.querySelectorAll(".ddd")[1].classList.add("run");
    await new Promise(r => setTimeout(r, 2000));
    // setTimeout(() => {
    document.querySelectorAll(".ddd")[0].classList.remove("run");
    document.querySelectorAll(".ddd")[1].classList.remove("run");
    // }, 2000);
    f();
}

document.querySelector("#play").onclick = fun;

async function f() {
    // await new Promise(r => setTimeout(r, 2000));
    
    var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
    var randomDiceImage1 = "images/dice_" + randomNumber1 + ".png"; //dice1.png - dice6.png
    document.querySelector(".main-1").setAttribute("src", randomDiceImage1);

    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var randomDiceImage2 = "images/dice_" + randomNumber2 + ".png";
    document.querySelector(".main-2").setAttribute("src", randomDiceImage2);


    //If player 1 wins
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
    }
    else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
    }
    else {
        document.querySelector("h1").innerHTML = "Draw!";
    }
}
// f();

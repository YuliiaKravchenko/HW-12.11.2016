let score1 = 0
    , score2 = 0
    , answer1 = null
    , answer2 = null;

// player1 start
//let answer = confirm("Player 1, do you want to play");
//if (answer === true) {
    do {
        let answer1 = prompt("Want to play? (Y or N)").toLowerCase();

        if (answer1 !== "y" && answer1 !== "n") {
            alert('Please answer Y or N');
        } else if (answer1 === "y") {
            score1 += Math.floor(Math.random() * (11 - 1 + 1) + 1);
            if (score1 <= 21) {
                answer1 = null;
                alert(`Your score is ${score1}`);
            } else {
                answer1 = "n";
                alert("Player1 loose the game.");

            }
        } else if (answer1 === "n") {
            alert("Player 1 stoped a game");
            break;
        }

    } while (answer1 !== "n" || answer1 > 21)
    //player 1 stop

//} else if (answer === false) {
    //player 2 start

    do {
        let answer2 = prompt("Player 1 denied. Player 2, do you want to play? (Y or N)").toLowerCase();

        if (answer2 !== "y" && answer2 !== "n") {
            alert('Please answer Y or N');
        } else if (answer2 === "y") {
            score2 += Math.floor(Math.random() * (11 - 1 + 1) + 1);
            if (score2 <= 21) {
                answer2 = null;
                alert(`Your score is ${score2}`);
            } else {
                answer2 = "n";
                alert("Player2 loose the game.");
            }
        } else if (answer2 === "n") {
            alert("Player 2 stoped a game");
            break;
        }

    } while (answer2 !== "n" || answer2 > 21)

    //player 2 stop
//}

if (score1 > score2) {
    alert("Player 1 won");
} else if (score1 < score2) {
    alert("Player 2 won");
} else if (score1 === score2) {
    alert("Friendship won!");
}
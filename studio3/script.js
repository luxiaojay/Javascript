(function () {
    "use strict";
    console.log('reading js');

    const startGame = document.getElementById('startgame');
    const gameControl = document.getElementById('gamecontrol');
    const game = document.getElementById('game');
    const die = document.getElementById('die');
    const score = document.getElementById('score');
    const actionArea = document.getElementById('actions');
    const introButton = document.querySelector('#introbutton');
    const score1 = document.getElementById('score1');
    const score2 = document.getElementById('score2');
    const player1 = document.querySelector('#player1 h2')

    introButton.addEventListener('click', function(event) {
        event.preventDefault();

        document.getElementById('maingame').className = 'showing';
        document.getElementById('intro').className = 'hidden';
    });


    // Object to hold game data
    const gameData = {
        dice: ['images/die1.png', 'images/die2.png', 'images/die3.png', 'images/die4.png', 'images/die5.png', 'images/die6.png'],
        profile: ['images/player1.png', 'images/player2.png'],
        players: ['player 1', 'player 2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 30
    };

    startGame.addEventListener("click", function() {
        // Randomly select the game index to determine the starting player
        gameData.index = Math.round(Math.random());
        console.log(gameData.index);

        // Set up game control
        gameControl.innerHTML = '<h2>Game of PIG</h2>';
        gameControl.innerHTML += '<button id="quit">Quit</button>';

        // Reload the window when the quit button is clicked
        document.getElementById('quit').addEventListener('click', function() {
            location.reload();
        });
        setUpTurn(); // Call setUpTurn here after starting the game
    });

    function choosePlayer() {
        if (gameData.index == 0) {
            document.querySelector('#player1').className = 'redText';
            document.querySelector('#player2').className = 'whiteText';
        } else {
            document.querySelector('#player2').className = 'redText';
            document.querySelector('#player1').className = 'whiteText';
        }
    }

    function setUpTurn() {
        game.innerHTML = `<p>Roll the dice for ${gameData.players[gameData.index]}</p>`;
        actionArea.innerHTML = '<button id="roll">Roll the Dice</button>';
        choosePlayer()

        document.getElementById('roll').addEventListener('click', function() {
            throwDice();
        })
    }

    function throwDice() {
        actionArea.innerHTML = '';
        // get random values for 1-6 for the score
        // adding 1 because we are using math.floor, because there is no 0 on the dice
        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;

        // put the dice images on the screen; the dice array index needs to be one less than roll1 and roll2
        die.innerHTML = `<img src="${gameData.dice[gameData.roll1-1]}" style="width: 150px; height: 150px;">
                        <img src="${gameData.dice[gameData.roll2-1]}" style="width: 150px; height: 150px;">`;
        game.innerHTML = `<p>Roll the dice for ${gameData.players[gameData.index]}</p>`;

        gameData.rollSum = gameData.roll1 + gameData.roll2;
        console.log(gameData.rollSum);

        document.getElementById('rollSound').play();



        // Check conditions
        if (gameData.rollSum === 2) {
            game.innerHTML += '<p>Oh no! You got Snake eyes!</p>';
            gameData.score[gameData.index] = 0;
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            showCurrentScore();
            setTimeout(setUpTurn, 2000);
        } else if (gameData.roll1 === 1 || gameData.roll2 === 1) {
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            game.innerHTML += `<p>Sorry, one of your number was a one, It's ${gameData.players[gameData.index]}'s turn !</p>`;
            setTimeout (setUpTurn, 2000);
        } else {
            gameData.score[gameData.index] += gameData.rollSum;
            actionArea.innerHTML = '<button id="rollagain">Roll again</button> or <button id="pass">Pass</button>';

            document.getElementById('rollagain').addEventListener('click', function () {
                throwDice();
            });

            document.getElementById('pass').addEventListener('click', function () {
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setUpTurn();
            })
            checkWinningCondition();
        }
    }

    function checkWinningCondition() {
        if (gameData.score[gameData.index] > gameData.gameEnd) {
            score.innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!!!</h2>`;
            actionArea.innerHTML = '';

            document.getElementById('winSound').play();

            document.getElementById('quit').innerHTML = "Play Again?";
        } else {
            
            showCurrentScore();
        }
    }

    function showCurrentScore() {
        score1.innerHTML = `<h2>Score:</h2><br><h2>${gameData.score[0]}</h2>`;
        score2.innerHTML = `<h2>Score:</h2><br><h2>${gameData.score[1]}</h2>`;
    }

    

})();

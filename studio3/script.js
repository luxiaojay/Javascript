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
        gameControl.innerHTML = '<h2>The Game of PIG</h2>';
        gameControl.innerHTML += '<button id="quit">Quit</button>';

        // Reload the window when the quit button is clicked
        document.getElementById('quit').addEventListener('click', function() {
            location.reload();
        });
    });
})();

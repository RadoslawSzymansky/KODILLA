"use strict"
var btnInitGame = document.querySelector('.setNewGame')
var oldHtml = document.getElementById("modal-results").innerHTML;
var btnPlayRound = document.querySelector(".playRound");
var moveOptions = document.querySelectorAll(".select img");
var roundsSpan = document.querySelector('.roundsCounter span');

function initNewGame(e) {
    var nameInput = document.getElementById('inputName');
    var roundsInput = document.getElementById('inputRounds');
    var rounds = parseInt(roundsInput.value);
    if (nameInput.value.length < 1) return alert('Podaj imię..')
    if (isNaN(rounds)) return alert('Wprowadź prawidłową liczbę rund!')
    config.name = nameInput.value;
    config.gamesToEnd = rounds;
    roundsSpan.textContent = config.gamesToEnd - config.roundsPlayed
    resetGameConfig()
    btnPlayRound.addEventListener('click', playRound);
    moveOptions.forEach(e => e.addEventListener('click', playerChoice));
    btnPlayRound.classList.add("active")
    config.isGameActive = true;
    nameInput.value = "";
    roundsInput.value = "";
    modalControl.hideModal(e)
}

function playRound(e) {
    var playerMove = config.playerMove;
    if (!playerMove) return alert('Wybierz jedną z trzech opcji');
    roundsSpan.textContent = config.gamesToEnd - config.roundsPlayed - 1
    var aiMove = config.drawAiMove();
    var result = checkResult(playerMove, aiMove)
    moveOptions.forEach(e => e.style.boxShadow = "none")
    if (result === "win") config.wins++;
    if (result === "loose") config.losses++;
    config.addGameToStats(playerMove, aiMove, result);
    if (config.roundsPlayed === config.gamesToEnd) {
        endGame()
        var gameResult = checkGameResult();
        showGameStatistics(gameResult)
    }
}

function endGame(e) {
    btnPlayRound.removeEventListener('click', playRound);
    moveOptions.forEach(e => e.removeEventListener('click', playerChoice));
    btnPlayRound.classList.remove("active");
    config.isGameActive = false;
}

function showGameStatistics(result) {
    modalControl.showModal('modal-results')
    var h1 = document.querySelector('.gameResult')
    if (result === "win") h1.textContent = updateMessage.gameWin(config.name, config)
    if (result === "loose") h1.textContent = updateMessage.gameLoose(config.name, config)
    if (result === "draw") h1.textContent = updateMessage.gameDraw(config.name, config)
    document.querySelector('.roundsResult').innerHTML = "";
    config.stats.forEach(e => {
        var par = document.createElement('p')
        par.classList.add('roundResult')
        par.textContent = updateMessage.roundResult(e)
        document.querySelector('.roundsResult').append(par)
    })
}

function checkGameResult() {
    if (config.wins > config.losses) return "win"
    if (config.wins < config.losses) return "loose"
    if (config.wins === config.losses) return "draw"
}

function checkResult(player, ai) {
    if (player === ai) return "draw";
    if (player === "stone") {
        if (ai === "scizzors") return "win"
    }
    if (player === "scizzors") {
        if (ai === "paper") return "win"
    }
    if (player === "paper") {
        if (ai === "stone") return "win"
    }
    return "loose"
}

function resetGameConfig() {
    config.roundsPlayed = 0;
    config.stats = [];
    config.wins = 0;
    config.losses = 0;
    config.draws = 0;
    config.playerMove = false;
}

function playerChoice(e) {
    moveOptions.forEach(e => e.style.boxShadow = "none")
    e.target.style.boxShadow = "0px 0px 3px 3px yellow"
    config.playerMove = e.target.dataset.move;
}
//event listeners
btnInitGame.addEventListener('click', initNewGame);
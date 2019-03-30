"use strict";
const DOM_elements = {
    btnInitGame: document.querySelector(".setNewGame"),
    btnPlayRound: document.querySelector(".playRound"),
    moveOptions: document.querySelectorAll(".select img"),
    roundsSpan: document.querySelector(".roundsCounter span"),
    curRound_h3: document.querySelector(".currentRound")
};

function initNewGame(e) {
    var nameInput = document.getElementById("inputName");
    var roundsInput = document.getElementById("inputRounds");
    resetGameConfig();
    var rounds = parseInt(roundsInput.value);
    config.name = nameInput.value;
    config.gamesToEnd = rounds;
    DOM_elements.roundsSpan.textContent = config.gamesToEnd - config.roundsPlayed;
    DOM_elements.curRound_h3.textContent = "";
    DOM_elements.btnPlayRound.addEventListener("click", playRound);
    DOM_elements.moveOptions.forEach(e => e.addEventListener("click", playerChoice));
    DOM_elements.btnPlayRound.classList.add("active");
    nameInput.value = "";
    roundsInput.value = "";
    modalControl.hideModal(e);
}

function playRound(e) {
    var playerMove = config.playerMove;
    if (!playerMove) return alert("Wybierz jedną z trzech opcji");
    DOM_elements.roundsSpan.textContent =
        config.gamesToEnd - config.roundsPlayed - 1;
    var aiMove = config.drawAiMove();
    var result = checkResult(playerMove, aiMove);
    DOM_elements.moveOptions.forEach(e => (e.style.boxShadow = "none"));
    if (result === "win") config.wins++;
    if (result === "loose") config.losses++;
    config.addGameToStats(playerMove, aiMove, result);
    if (config.roundsPlayed === config.gamesToEnd) {
        endGame();
        var gameResult = checkGameResult();
        showGameStatistics(gameResult);
    }
    DOM_elements.curRound_h3.textContent = updateMessage.roundResult(config.stats[config.stats.length - 1])
    config.playerMove = false;
}

function endGame(e) {
    DOM_elements.btnPlayRound.removeEventListener("click", playRound);
    DOM_elements.moveOptions.forEach(e =>
        e.removeEventListener("click", playerChoice)
    );
    DOM_elements.btnPlayRound.classList.remove("active");
}

function showGameStatistics(result) {
    modalControl.showModal("modal-results");
    var h1 = document.querySelector(".gameResult");
    if (result === "win")
        h1.textContent = updateMessage.gameWin(config.name, config);
    if (result === "loose")
        h1.textContent = updateMessage.gameLoose(config.name, config);
    if (result === "draw")
        h1.textContent = updateMessage.gameDraw(config.name, config);
    document.querySelector(".roundsResult").innerHTML = "";
    config.stats.forEach(e => {
        var par = document.createElement("p");
        par.classList.add("roundResult");
        par.textContent = updateMessage.roundResult(e);
        document.querySelector(".roundsResult").append(par);
    });
}

function checkGameResult() {
    if (config.wins > config.losses) return "win";
    if (config.wins < config.losses) return "loose";
    if (config.wins === config.losses) return "draw";
}

function checkResult(player, ai) {
    if (player === ai) return "draw";
    if (player === "stone") {
        if (ai === "scizzors") return "win";
    }
    if (player === "scizzors") {
        if (ai === "paper") return "win";
    }
    if (player === "paper") {
        if (ai === "stone") return "win";
    }
    return "loose";
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
    DOM_elements.moveOptions.forEach(e => (e.style.boxShadow = "none"));
    e.target.style.boxShadow = "0px 0px 3px 3px yellow";
    config.playerMove = e.target.dataset.move;
}
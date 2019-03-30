var config = {
    options: ["paper", "stone", "scizzors"],
    addGameToStats: function (playerChoice, aiChoice, result) {
        this.roundsPlayed++;
        var game = {
            playerChoice: playerChoice,
            aiChoice: aiChoice,
            roundResult: result,
        }
        game.round = this.roundsPlayed;
        (function () {
            var resultAfterRound;
            if (this.wins > this.losses) resultAfterRound = "win"
            if (this.wins < this.losses) resultAfterRound = "loose"
            if (this.wins === this.losses) resultAfterRound = "draw";
            game.resultAfterRound = resultAfterRound
        }.bind(this))()
        this.stats.push(game);
    },
    drawAiMove: function () {
        var index = Math.floor(Math.random() * this.options.length)
        return this.options[index]
    }

}

var updateMessage = {
    roundResult: function (round) {
        return `Round ${round.round}: You ${round.roundResult} that round. Your choice: ${round.playerChoice}, enemy choice: ${round.aiChoice}. Result after round: ${round.resultAfterRound}`
    },
    gameWin: function (name, result) {
        return `Congratulation ${name}, you won the game! ${result.wins} : ${result.losses} for you. `
    },
    gameLoose: function (name, result) {
        return `Sorry ${name}, you loose the game! ${result.losses} : ${result.wins} for computer.`
    },
    gameDraw: function () {
        return 'Draw! Try one time more!'
    }
};
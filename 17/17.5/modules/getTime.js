function getTime(sec) {
    var seconds = sec % 60;
    var minutes = Math.floor(sec / 60);
    var output = sec + "sek";
    if (sec >= 60) {
        output = `${minutes}min ${seconds}sek`
    }
    if (sec >= 60 * 60) {
        minutes = Math.floor(sec / 60) % 60;
        var hours = Math.floor(sec / 60 / 60)
        output = `${hours}godz ${minutes}min ${seconds}sec`
    }
    return output
}
exports.print = getTime
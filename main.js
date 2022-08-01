
let homeScoreEl = document.getElementById("homeScore-el");
let awayScoreEl = document.getElementById("awayScore-el");
let homeScore = 0;
let awayScore = 0;
//HOME
const homeAdd1 = () => {
    homeScore += 1;
    homeScoreEl.textContent = homeScore;
}
const homeAdd2 = () => {
    homeScore += 2;
    homeScoreEl.textContent = homeScore;
}
const homeAdd3 = () => {
    homeScore += 3;
    homeScoreEl.textContent = homeScore;
}


//AWAY
const awayAdd1 = () => {
    awayScore += 1;
    awayScoreEl.textContent = awayScore;
}
const awayAdd2 = () => {
    awayScore += 2;
    awayScoreEl.textContent = awayScore;
}
const awayAdd3 = () => {
    awayScore += 3;
    awayScoreEl.textContent = awayScore;
}

const reset = () => {
    homeScore = 0;
    awayScore = 0;
    homeScoreEl.textContent = homeScore;
    awayScoreEl.textContent = awayScore;
}



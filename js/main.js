'use strict'

var gBallSize = 100
function onBallClick() {
    const diff = getRandomInt(20, 60)
    gBallSize += diff
    var ball = document.querySelector('.ball')
    if (gBallSize > 400) {
        gBallSize = 100
        ball.style.width = (gBallSize) + 'px'
        ball.style.height = (gBallSize) + 'px'
        ball.innerText = gBallSize
    } 
    else {
        ball.style.width = (gBallSize + diff) + 'px'
        ball.style.height = (gBallSize + diff) + 'px'
        ball.innerText = gBallSize
    }
}
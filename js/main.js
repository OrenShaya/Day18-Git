'use strict'

var gBallSize = 100
function onBallClick() {
    gBallSize += 50
    var ball = document.querySelector('.ball')
    if (gBallSize > 400) {
        gBallSize = 100
        ball.style.width = (gBallSize) + 'px'
        ball.style.height = (gBallSize) + 'px'
        ball.innerText = gBallSize
    } 
    else {
        ball.style.width = (gBallSize + 50) + 'px'
        ball.style.height = (gBallSize + 50) + 'px'
        ball.innerText = gBallSize
    }
}
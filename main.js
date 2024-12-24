'use strict'

var gBallSize = 100
function onBallClick() {
    var ball = document.querySelector('.ball')
    ball.style.width = (gBallSize + 50) + 'px'
    ball.style.height = (gBallSize + 50) + 'px'
    gBallSize += 50
    ball.innerText = gBallSize   
}
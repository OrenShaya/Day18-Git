'use strict'

var gBallSize = 100
function onBallClick(maxDiameter) {
    const diff = getRandomInt(20, 60)
    gBallSize += diff
    ball.style.backgroundColor = getRandomColor()
    
    var ball = document.querySelector('.ball')
    if (gBallSize > maxDiameter) {
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
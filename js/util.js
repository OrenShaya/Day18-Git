'use strict';

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min)
}

function getRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16)
}

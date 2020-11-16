const express = require('express');

// TODO import app.js function (readFiles) to this js file.

let totalfiles = 5;

console.log(totalfiles)

const dir = '../public/images/memes/';

const url = '../images/memes/meme-';

for (let i = 1;i<=totalfiles;i++) {
    const image = new Image();
    image.src = url+i+'.jpg';
    document.getElementById('memeList').appendChild(image);
}

$('img').on('click', (event) => {
    $(event.currentTarget).toggleClass('zoomAndCenter');
})


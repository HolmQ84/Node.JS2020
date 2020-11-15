// const app = require('../../app.js')
// let totalfiles = app.readFiles();

// TODO import app.js function to this js file.

let totalfiles = 5;

console.log(totalfiles)

const dir = '../public/images/memes/';

const url = '../images/memes/meme-'

console.log()

for (let i = 1;i<=totalfiles;i++) {
    const image = new Image();
    image.src = url+i+'.jpg';
    document.getElementById('memeList').appendChild(image);
}
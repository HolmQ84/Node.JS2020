// const app = require('../../app.js');

// TODO import app.js function (readFiles) to this js file.
// TODO - make the import of images agile, so it skips the files that isnt there.

let totalfiles = 11;

const url = '../images/memes/meme-';

for (let i = 1;i<=totalfiles;i++) {
    const image = new Image();
    if (image !== null) {
        image.src = url+i+'.jpg';
        document.getElementById('memeList').appendChild(image);
        console.log("Added number "+i+" file");
    } else {
        console.log('No number '+i+" image.")
    }
}

$('img').on('click', (event) => {
    $(event.currentTarget).toggleClass('zoomAndCenter');
})
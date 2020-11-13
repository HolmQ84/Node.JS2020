const express = require('express');
const app = express();

const appfile = require('../../app.js')
app.use(appfile);

const file = appfile.valueOf()

$('uploadedImage').append('<img src="${latestImage}">Image</img>');

const urlArray = window.location.href.split('/')
const uploadId = urlArray[urlArray.length-1]

console.log(uploadId);

fetch(`/uploads/${uploadId}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        $('message').append(`<p>${data.data.message}</p>`)
    });


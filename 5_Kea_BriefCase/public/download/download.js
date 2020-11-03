const urlArray = window.location.href.split("/");

const uploadId = urlArray[urlArray.length-1];


fetch(`/uploads/${uploadId}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        // todo if-check.
        $("#message").append(`<p>${data.data.message}</p>`);
    });

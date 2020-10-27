function handleFormSubmitted () {
    const formMessage = document.getElementById("form-message").value;
    console.log(formMessage);
    $.get("/form?message="+formMessage, (response) => {
        console.log(response);
    });
}

function validateForm() {
    const message = $('form-message').val();
    const file = document.getElementById("form-file");

    fetch("/uploads", {
        method: 'POST',
        headers: {
            'content-type': "application/json"
        },
        body: JSON.stringify({
            message,
            file
        })
    })
    .then(response => response.json())
    .then(result => {
        window.location.href = `/download/${result.id}`;
    });
}

/*
$('form-submit').submit(function() {
    const formMessage = document.getElementById("form-message").value;
    $.ajax({
        url: "/form",
        type: "POST",
        data: { formMessage }
    }).done((response) => {
        console.log(response);
    });
});
*/

// document.getElementById("form-submit").addEventListener("click", () =>{
//     console.log(document.getElementById("form-message").value);
// })
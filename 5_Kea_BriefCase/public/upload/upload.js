function validateForm() {
    const message = document.getElementById("messageBoxSubmit").value;
    fetch("/uploads", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            message
        })
    })
        .then(res => res.json())
        .then(res => { // Converts a stream to a new object, requires a .then()
            window.location.href = `/download/${res.id}`
        });
    return true
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

function handleFormSubmitted () {
    const formMessage = document.getElementById("form-message").value;
    console.log(formMessage);
    $.get("/form?message="+formMessage, (response) => {
        console.log(response);
    });
}

*/

// document.getElementById("form-submit").addEventListener("click", () =>{
//     console.log(document.getElementById("form-message").value);
// })
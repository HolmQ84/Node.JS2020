function validateForm() {
    const form = document.getElementById('form-upload');
    const formData = new FormData(form);

    fetch("/uploads", {
        method: 'POST',
        body: formData
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
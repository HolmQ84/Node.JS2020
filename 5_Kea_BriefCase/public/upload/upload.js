
console.log('test');

function handleFormSubmitted () {
    const formMessage = document.getElementById("form-message").value;
    console.log(formMessage);
    $.get("/form?message="+formMessage, (response) => {
        console.log(response);
    });
}

function validateForm() {
    return true;
}

$('form-submit2').submit(function() {
    const formMessage = document.getElementById("form-message").value;
    $.ajax({
        url: "/form",
        type: "POST",
        data: { formMessage }
    }).done((response) => {
        console.log(response);
    });
});

// document.getElementById("form-submit").addEventListener("click", () =>{
//     console.log(document.getElementById("form-message").value);
// })
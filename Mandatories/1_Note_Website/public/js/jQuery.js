let selection1 = true
$('#jquery1').click(function() {
    if (selection1 === true) {
        $('#jquery1').css('background-color', 'orange');
        selection1 = false;
    } else {
        $('#jquery1').css('background-color', 'purple');
        selection1 = true;
    }
})

let selection2 = true
$('#jquery2').dblclick(function() {
    if (selection2 === true) {
        $('#jquery2').css('background-color', 'yellow');
        selection2 = false;
    } else {
        $('#jquery2').css('background-color', 'blue');
        selection2 = true;
    }
})

let selection3 = true
$('#jquery_hide').click(function() {
    if (selection3 === true) {
        $('#jquery3').hide();
        selection3 = false;
    } else {
        $('#jquery3').show();
        selection3 = true;
    }
})

$('#jquery_start').click(function() {
    $('#jquery4').text('Counting...')
    $('#jquery4').css('background-color', 'red');
    setTimeout(function() {
        $('#jquery4').css('background-color', 'green');
        $('#jquery4').text('Done!').show();
    }, 3000);
});

let count = 3
$('#jquery_add').click(() => {
    if (count <= 10) {
        $('#list').append('<li>Element ' + count + '</li>');
        count++;
    } else {
        alert("Så har du vist testet den rigeligt makker!!");
    }
})

let random = 0;
$('#jquery_cat').click(() => {
    $.get("https://cat-fact.herokuapp.com/facts", (response) => {
        const alljsons = response;
        random = Math.floor(Math.random() * 200) + 1;
        $('#cat_fact').text(alljsons.all[random].text);
    });
})


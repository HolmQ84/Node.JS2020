let selection = true
$('#jquery1').click(function() {
    if (selection === true) {
        $('#jquery1').css('background-color', 'red');
        selection = false;
    } else {
        $('#jquery1').css('background-color', 'green');
        selection = true;
    }
})
$('#jquery2').dblclick(function() {
    if (selection === true) {
        $('#jquery2').css('background-color', 'blue');
        selection = false;
    } else {
        $('#jquery2').css('background-color', 'yellow');
        selection = true;
    }
})
console.log($);

$(document).ready(function () {
    // 1. Change the body tag so that everything on the page is centered.
    $(document.body).css('text-align', 'center');

    // 2. Change the text of "Old title" to "New title".
    $('#title>h2').text('New Title');

    // 3. Change the background color of the subtitle box to any color you like.
    $('.subtitle-box').css('background-color', 'purple');

    // 4. Make sure that the temp-subtitle isn't displayed without actually removing the element from DOM.
    $('.temp').css('display', 'none');

    // 5. Put a dashed border box of any pixel width around any div that has the class "reason"
    $('.reason').css('border', '1px dashed');

    // 6. Change the li's inside of the ordered list to be bold.
    $('#first-list li').css('font-weight', 'bold');

    // 7. Change the last li to be underlined.
    $('#first-list li:last-child').css('text-decoration', 'underline');
    // $('#first-list').children().last().css("text-decoration", "underline");
    // $('#first-list :eq(2)').css("text-decoration", "underline");

    // 8. Change the second li element to have a line through it.
    $('#first-list li:nth-child(2)').css('text-decoration', 'line-through');

    // 9. Change all the elements inside of the second-list to italics in one query.
    $('.second-list').css('font-style', 'italic');
    // $('ul').css('font-style', 'italic');
    // $('#list').css('font-style', 'italic');

    // 10. Change the span font size in the unordered list to be half as small. Using em is better than pixels. Why is that?
    $('.second-list span').css('font-size', '.50em');

    // 11. Remove the first label element in the unused box.
    $('.unused-box label:first-child').remove();

    // 12. Add a paragraph that says "Second Sentence".
    $('.unused-box').append("<p>Second Sentence</p>");

    // 13. After finishing 12 add a paragraph before it that says "First Sentence".
    $('.unused-box').prepend("<p>First Sentence</p>");

    // 14. You can finally change the class name of unused-box to used-box.
    // $('.unused-box').removeClass('unused-box').addClass('used-box');
    $('.unused-box').attr('class', 'used-box');

    // 15. You know what. Let's additionally add a class name on the box called used-boxed-clicked. Every time the box is clicked it should toggle this class (add if not there or remove if there).
    // $('.used-box').click(function() {
    //     $(this).toggleClass('used-boxed-clicked');
    // })
    // $('.used-box').on('click', () => {
    //      $(this).toggleClass('used-boxed-clicked');
    // })
    $('.used-box').on('click', (event) => {
        $(event.currentTarget).toggleClass('used-boxed-clicked');
    })

    // 16. On mousing over the submit-button add a title property that says "You're ready to click." Remove the text when the mouse isn't over the button anymore.
    $('#submit-button').prop("title", "You're ready to click.");
    // 17. On mouse click add a reason to the ordered list. The reason should start from Reason 4 and count up after every click.
    let counter = 4;
    $('#submit-button').click(function() {
        $('#first-list').append('<li>Reason ' + counter + '</li>');
        counter++;
    })
    // 18. Console log the parent div when the button is clicked using a direct reference to the button inside of the event handler scope.
    $('#submit-button').click((event) => {
        let logger = $(event.currentTarget).parent();
        console.log(logger);
    })
});
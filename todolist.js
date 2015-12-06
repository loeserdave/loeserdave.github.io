// This code runs when the page loads
$(function() {

  $("#add-record").on("click", function(event) {
    // Do something
    // on function takes behaviour then function
    event.preventDefault();
    $('li').show()
  });

  $(".remove-record").on("click", function(event) {
    event.preventDefault();
    var elementThatWasClicked = $(this);
    elementThatWasClicked.parent().hide();
  })

})
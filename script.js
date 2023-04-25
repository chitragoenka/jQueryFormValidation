//Create a function that fires when the submit button is clicked and make sure it's loaded after the DOM.
$(document).ready(function() {

// Function to handle form submission
    $('#submit').click(function(event) {
     event.preventDefault();
    // Create variables for form inputs
        let name = $('#name').val();
        let email = $('#email').val();
        let phone = $('#phone').val();

// Create an array to store required fields
        let required = [name, email, phone];

 // Reset previous warning classes and messages
    $('.warning').removeClass('warning');
    $('#message').text('');

  // Loop through required fields

for (let i = 0; i < required.length; i++) {

 // Check if field is empty

if (required[i] === '') {
    // Display error message
    $('#message').text('Please Fill Out Required Fields').addClass('warning');
  // Add warning class to corresponding label
    $('label').eq(i).addClass('warning');

   } else {
    // Remove error message and warning class
    $('#message').text('').removeClass('warning');
    $('label').eq(i).removeClass('warning');
   }
  }

  // Check if no label has warning class
if ($('label.warning').length === 0) {
    // Remove the form from the DOM
      $("#form").remove();
    //manipulate the <h2> 
      $("#pre-form h2").text("Thanks for your feedback!");
    }

    // Add input event to change label color to black when typing
  $("#name, #email, #phone").on("input", function() {
    var inputId = $(this).attr("id");
    $("label').inputId(i).removeClass(warning)
  });

  })
})
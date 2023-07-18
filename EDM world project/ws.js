document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Get form values
  var name = document.getElementsByName('name')[0].value;
  var email = document.getElementsByName('email')[0].value;
  var message = document.getElementsByName('message')[0].value;
  
  // Send the form data to the server (you can customize this part with your own implementation)
  // In this example, we're just displaying a success message
  document.getElementById('success-message').textContent = 'Message sent successfully!';
  
  // Clear form fields
  document.getElementsByName('name')[0].value = '';
  document.getElementsByName('email')[0].value = '';
  document.getElementsByName('message')[0].value = '';
});

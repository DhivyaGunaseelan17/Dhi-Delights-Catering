$(document).ready(function () {
	$("#RightToLeft").on("click", function () {
		$("#slide").animate({
			marginLeft: "0",
		});
		$(".top").animate({
			marginLeft: "100%",
		});
	});
	$("#LeftToRight").on("click", function () {
		$("#slide").animate({
			marginLeft: "50%",
		});
		$(".top").animate({
			marginLeft: "0",
		});
	});
});

// login.js
document.addEventListener('DOMContentLoaded', function () {
  const loginButton = document.querySelector('.button__login');
  const emailInput = document.querySelector('.email--input');
  const passwordInput = document.querySelector('.password--input');

  // Add event listener to login button click
  loginButton.addEventListener('click', function () {
    // Retrieve user details from local storage
    const storedUserDetails = JSON.parse(localStorage.getItem('userDetails'));

    // Check if the stored user details exist
    if (storedUserDetails) {
      // Get entered email and password
      const enteredEmail = emailInput.value.trim();
      const enteredPassword = passwordInput.value;

      // Check if email and password match the stored user details
      if (enteredEmail === storedUserDetails.email && enteredPassword === storedUserDetails.password) {
        // Redirect to user dashboard if credentials match
        window.location.href = 'user_dashboard.html';
      } else {
        // Credentials do not match, show an error message
        alert('Invalid email or password.');
      }
    } else {
      // User is not registered, redirect to register page
      window.location.href = 'register.html';
    }
  });
});

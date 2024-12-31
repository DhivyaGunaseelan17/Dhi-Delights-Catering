document.addEventListener('DOMContentLoaded', function () {
    const passwordInput = document.querySelector('.password--input');
    const confirmPasswordInput = document.querySelector('.confirm-password--input');
    const passwordHiddenIcons = document.querySelectorAll('.password__hidden');
  
    // Toggle password visibility
    passwordHiddenIcons.forEach(function (icon) {
      icon.addEventListener('click', function () {
        if (passwordInput.type === 'password') {
          passwordInput.type = 'text';
          confirmPasswordInput.type = 'text';
          icon.setAttribute('name', 'eye-outline');
        } else {
          passwordInput.type = 'password';
          confirmPasswordInput.type = 'password';
          icon.setAttribute('name', 'eye-off-outline');
        }
      });
    });
  
    // Form submission
    const registerForm = document.querySelector('.login__form');
    registerForm.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent default form submission
  
      // Perform form validation
      const nameInput = document.querySelector('.name--input');
      const emailInput = document.querySelector('.email--input');
      const phoneInput = document.querySelector('.phone--input');
  
      if (nameInput.value.trim() === '') {
        alert('Please enter your name.');
        return;
      }
  
      if (emailInput.value.trim() === '') {
        alert('Please enter your email.');
        return;
      }
  
      if (!isValidEmail(emailInput.value.trim())) {
        alert('Please enter a valid email address.');
        return;
      }
  
      if (phoneInput.value.trim() === '') {
        alert('Please enter your phone number.');
        return;
      }
  
      if (passwordInput.value.trim() === '') {
        alert('Please enter your password.');
        return;
      }
  
      if (confirmPasswordInput.value.trim() === '') {
        alert('Please confirm your password.');
        return;
      }
  
      if (passwordInput.value !== confirmPasswordInput.value) {
        alert('Passwords do not match. Please try again.');
        return;
      }
  
      // Here, you may want to perform additional validation such as password strength
      if (!isStrongPassword(passwordInput.value.trim())) {
        alert('Please use a stronger password.');
        return;
      }
  
      // Save registration details to local storage
      const userDetails = {
        name: nameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        password: passwordInput.value
      };
  
      localStorage.setItem('userDetails', JSON.stringify(userDetails));
  
      
  
      // Redirect the user to another page after successful registration
        window.location.href = 'user_dashboard.html';
    });
  
    // Function to validate email format
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  
    // Function to check password strength (at least 8 characters with at least one uppercase letter, one lowercase letter, one number, and one special character)
    function isStrongPassword(password) {
      const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{"':;?/>.<,])(?=.*[^\s]).{8,}$/;
      return passwordRegex.test(password);
    }
  });
  
function validateForm() {
    // Validate Name
    let name = document.forms["myForm"]["name"].value;
    if (name == "") {
      alert("Name must be filled out");
      return false;
    }
  
    // Validate Email
    let email = document.forms["myForm"]["email"].value;
    if (email == "") {
      alert("Email must be filled out");
      return false;
    } else if (!validateEmail(email)) {
      alert("Invalid email format");
      return false;
    }
  
    // Validate Message
    let message = document.forms["myForm"]["message"].value;
    if (message == "") {
      alert("Message must be filled out");
      return false;
    }
  
    // If all validations pass, show success message
    alert("Form submitted successfully!");
    return true;
  }
  
  // Function to validate email format
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
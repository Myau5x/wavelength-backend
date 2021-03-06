///copy from example
$(document).ready(function() {
    // Getting references to our form and input
    let signUpForm = $("form#signup-form");
    let signupBtn = $("#submit");
    
    console.log("Hi There");
    // When the signup button is clicked, we validate the email and password are not blank
    //signUpForm.on("submit", function(event) {
    signupBtn.on("click", function(event){
      event.preventDefault();
      let lastNameInput = $("input#last-name");
      let firstNameInput = $("input#first-name");
      let emailInput = $("input#email");
      let passwordInput = $("input#password");
      
      let userData = {
        
        lastName: lastNameInput.val().trim(),
        firstName: firstNameInput.val().trim(),  
        email: emailInput.val().trim(),
        
        password: passwordInput.val().trim(),
        
      };
      console.log(userData);
      /*if (!userData.lastName ||!userData.firstName ||!userData.email || !userData.password) {
        return;
      }*/
      // If we have an email and password, run the signUpUser function
      console.log("start signing up");

      signUpUser(userData);
      //signUpUserTest(userData);
      //emailInput.val("");
      //passwordInput.val("");
    });


    function signUpUserTest(userData){

      $("#olga-test").text(JSON.stringify(userData));
    }
    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpUser(userData) {
        console.log(userData)
      $.post("/api/signup", {
        
        firstName: userData.firstName,
        lastName: userData.lastName, 
        
        email: userData.email,
        password: userData.password,
        
        
      })
        .then(function(data) {
          window.location.replace("/profile"); ///change
          // If there's an error, handle it by throwing up a bootstrap alert
        })
        .catch(handleLoginErr);
    }
  
    function handleLoginErr(err) {
      alert('Something went wrong, try again please');
      /*UIkit.notification({
        message: 'Something went wrong, try again please',
        status: 'danger',
        pos: 'top-center',
        timeout: 2000
    });*/
    }
  });
  
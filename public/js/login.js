////just copy from example
$(document).ready(function() {
    


    logFrm = $("#login-form");
    logFrm.on("submit", function(event) {
      event.preventDefault();
      let emailInput = $("#login-email");
      let passwordInput = $("#login-password");
      
      let userData = {
        email: emailInput.val().trim(),
        password: passwordInput.val().trim()
      };
  
      if (!userData.email || !userData.password) {
        return;
      }
  
      // If we have an email and password we run the loginUser function and clear the form
      loginUser(userData.email, userData.password);
      userNameInput.val("");
      passwordInput.val("");
    });
  
    // loginUser does a post to our "api/login" route and if successful, redirects us the the profile page
    function loginUser(email, password) {
        //console.log(userName,password,'api/login');
        //console.log(userName,password);
      $.post("/api/login", {
        email: email,
        password: password
      })
        .then(function() {
          window.location.replace("/profile");  ///Change this
          // If there's an error, log the error
        })
       .catch(function(err) {
          alert("something went wrong, try again");
          
        
          console.log(err);
        });
    }
    //test function DELETE
    /* function loginUser2(userName, password) {
        console.log(userName,password,'api/login');
      
        
          window.location.reload()  ///Change this
          // If there's an error, log the error   
    } */

  });
  
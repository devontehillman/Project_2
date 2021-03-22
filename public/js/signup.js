$(document).ready(() => {
  // Getting references to our form and input
  const signUpForm = $("form.signup");
  const firstNameInput = $("input#first-input");
  const lastNameInput = $("input#last-input");
  const emailInput = $("input#email-input");
  const passwordInput = $("input#password-input");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", event => {
    event.preventDefault();
    const userData = {
      first: firstNameInput.val().trim(),
      last: lastNameInput.val().trim(),
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };
    console.log(userData);
    if (
      !userData.first ||
      !userData.last ||
      !userData.email ||
      !userData.password
    ) {
      return;
    }
    //If we have an first, last ,email and password, run the signUpUser function
    signUpUser(
      userData.first,
      userData.last,
      userData.email,
      userData.password
    );
    // // reset sign up to be blank
    // firstNameInput.val("");
    // lastNameInput.val("");
    // emailInput.val("");
    // passwordInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(first, last, email, password) {
    $.post("/api/signup", {
      firstname: first,
      lastname: last,
      email: email,
      password: password,
      admin: 0
    })
      .then(() => {
        window.location.replace("/members");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});

const loginForm = document.getElementById("login-form");

//note that the preventDefault() will prevent the browser from listing the input fields entries in the browser field so your email, password, etc will not be displayed and will be hidden
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  //use FormData function to retrieve the data submitted
  //from the loginForm after the submit event has been clicked
  const loginFormData = new FormData(loginForm);
  //console.log(loginFormData);

  //use the FormData .get() function to store and retrieve the name, email, password
  const name = loginFormData.get("astronautName");
  const email = loginFormData.get("emailAddress");
  const password = loginFormData.get("password");

  console.log(
    `Your name is: ${name} your email address is ${email} and your password is ${password} `
  );
});

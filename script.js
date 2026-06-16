// script.js
function verifyEmail() {

    // Values that are being used form this project
    const emailInput = document.getElementById("emailInput").value;
    const output = document.getElementById("output");

    // An empty string value
    if (emailInput === "") {
        window.confirm(`You haven't entered an email address, are you sure you want to continue?`);
        output.innerHTML = `Email cannot be blank!!!`;
        output.style.color = `red`;
        return;
    }

    // Length fo the email address
    if (emailInput.length < 5) {
        window.confirm(`Are you sure that you want to validate your email address?`);
        output.innerHTML = `Email address is too short please try another one!!!`;
        output.style.color = `red`;
        return;
    }

    // Checking for the @ symbol
    if (!emailInput.includes('@')) {
        window.confirm(`Are you sure that you want to validate your email address?`);
        output.innerHTML = `Email address does not have a @ symbol!!!`;
        output.style.color = `red`;
        return;
    }

    // Checking for the email domain address
    if(emailInput.endsWith === `@gmail.com` || `outlook.com` || `@yahoo.com`) {
        window.confirm(`Validating your email address...`);
        output.innerHTML = `Congradulations, your email address is valid!!!`;
        output.style.color = `green`;
        return;
    } else {
        output.innerHTML = `Sorry your email address domain is invalid!!!`;
        return;
    }
}

window.alert(`Hello and welcome to my Email Verifcation program, please enter your email to make sure that you are using a valid email address.`);

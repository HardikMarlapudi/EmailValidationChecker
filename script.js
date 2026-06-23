// script.js
function verifyEmail() {

    // Values that are being used form this project
    const email = document.getElementById("emailInput").value;
    const output = document.getElementById("output");

    // An empty string value
    if (email === "") {
        window.confirm(`You haven't entered an email address, are you sure you want to continue?`);
        output.innerHTML = `Email cannot be blank!!!`;
        document.getElementById("output").style.fontSize = `17px`;
        document.getElementById("output").style.fontFamily = `Verdana, Geneva, Tahoma, sans-serif`;
        document.getElementById("output").style.fontWeight = `bold`;
        output.style.color = `red`;
        return;
    }

    // Length for the email address
    if (email.length < 5) {
        window.confirm(`Are you sure that you want to validate your email address?`);
        output.innerHTML = `Email address is too short please try another one!!!`;
        document.getElementById("output").style.fontSize = `17px`;
        document.getElementById("output").style.fontFamily = `Verdana, Geneva, Tahoma, sans-serif`;
        document.getElementById("output").style.fontWeight = `bold`;
        output.style.color = `red`;
        return;
    }

    // Checking for the @ symbol
    if (!email.includes('@')) {
        window.confirm(`Are you sure that you want to validate your email address?`);
        output.innerHTML = `Email address does not have a @ symbol!!!`;
        document.getElementById("output").style.fontSize = `17px`;
        document.getElementById("output").style.fontFamily = `Verdana, Geneva, Tahoma, sans-serif`;
        document.getElementById("output").style.fontWeight = `bold`;
        output.style.color = `red`;
        return;
    }

    // Checking for the email domain address
    if(email.endsWith === `@gmail.com` || `@outlook.com` || `@yahoo.com`) {
        window.confirm(`Validating your email address...`);
        output.innerHTML = `Congradulations, your email address is valid!!!`;
        document.getElementById("output").style.fontSize = `17px`;
        document.getElementById("output").style.fontFamily = `Verdana, Geneva, Tahoma, sans-serif`;
        document.getElementById("output").style.fontWeight = `bold`;
        output.style.color = `green`;
        return;
    }
}

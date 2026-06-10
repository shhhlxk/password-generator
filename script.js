function generatePassword() {
    const length = document.getElementById("length").value;

    let chars = "";

    if (document.getElementById("uppercase").checked)
        chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (document.getElementById("lowercase").checked)
        chars += "abcdefghijklmnopqrstuvwxyz";

    if (document.getElementById("numbers").checked)
        chars += "0123456789";

    if (document.getElementById("symbols").checked)
        chars += "!@#$%^&*()_+[]{}<>?";

    let password = "";

    for (let i = 0; i < length; i++) {
        password += chars.charAt(
            Math.floor(Math.random() * chars.length)
        );
    }

    document.getElementById("password").value = password;
}

function copyPassword() {
    const password = document.getElementById("password");
    password.select();
    navigator.clipboard.writeText(password.value);
    alert("Password copied!");
}
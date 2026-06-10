const passwordField = document.getElementById("password");
const lengthSlider = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");
const strengthText = document.getElementById("strengthText");

lengthSlider.addEventListener("input", () => {
    lengthValue.textContent = lengthSlider.value;
});

function generatePassword() {

    const length = parseInt(lengthSlider.value);

    let chars = "";

    if(document.getElementById("uppercase").checked)
        chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if(document.getElementById("lowercase").checked)
        chars += "abcdefghijklmnopqrstuvwxyz";

    if(document.getElementById("numbers").checked)
        chars += "0123456789";

    if(document.getElementById("symbols").checked)
        chars += "!@#$%^&*()_+{}[]<>?/";

    if(chars.length===0){
        passwordField.value = "Select options!";
        return;
    }

    let password="";

    for(let i=0;i<length;i++){
        password += chars.charAt(
            Math.floor(Math.random()*chars.length)
        );
    }

    passwordField.value=password;

    updateStrength(password);
}

function updateStrength(password){

    let score=0;

    if(password.length>=8) score++;
    if(password.length>=12) score++;
    if(/[A-Z]/.test(password)) score++;
    if(/[0-9]/.test(password)) score++;
    if(/[^A-Za-z0-9]/.test(password)) score++;

    if(score<=2)
        strengthText.textContent="Weak";
    else if(score<=4)
        strengthText.textContent="Medium";
    else
        strengthText.textContent="Strong";
}

function copyPassword(){

    navigator.clipboard.writeText(passwordField.value);

    const copied=document.getElementById("copied");

    copied.textContent="✅ Password Copied!";

    setTimeout(()=>{
        copied.textContent="";
    },2000);
}

document.getElementById("toggle").addEventListener("click",()=>{

    if(passwordField.type==="password"){
        passwordField.type="text";
    }else{
        passwordField.type="password";
    }

});

generatePassword();

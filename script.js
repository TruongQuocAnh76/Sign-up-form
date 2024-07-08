var passwd_div = document.querySelector(".password_div")
var passwd_input = document.querySelector("#password")
var conf_passwd_input = document.querySelector("#confirm_passwd")
var warning = document.createElement("p");
warning.style.color = "red";
warning.style.fontSize = "0.75rem"
warning.style.margin = 0;

warning.textContent = "*Password do not match";

conf_passwd_input.addEventListener("keyup", function () {
    if (passwd_input.value === conf_passwd_input.value) {
        passwd_input.style.borderColor = "green";
        conf_passwd_input.style.borderColor = "green";
        passwd_div.removeChild(warning);
    }
    else {
        passwd_input.style.borderColor = "red";
        conf_passwd_input.style.borderColor = "red";
        passwd_div.appendChild(warning);
    }
})
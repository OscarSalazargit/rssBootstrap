const btnLogin = document.getElementById("btnLogin");

const loginUsuario = document.getElementById("loginUsuario");
const loginPassword = document.getElementById("password-field");

function checkPassword(){
    console.log(loginUsuario.value);
    console.log(loginPassword.value);
    const clavecheck = "1234";
    
    if((loginUsuario.value === "oscar") && (loginPassword.value === clavecheck)){
        window.location.href = 'noticias.html';
    }else{
        alert("error")
    }
}

btnLogin.addEventListener("click",checkPassword);



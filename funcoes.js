
function entrar(){
    var usuarios = document.getElementById("usuario");
    var senhas = document.getElementById("senha");
    if(usuarios.value == "gabriel" && senhas.value == "123"){
        window.location.assign("dashboard.html");
    }
    else{
       alert("senha incorreta")
    }
}

document.getElementById('olho').addEventListener('mousedown', function() {
    document.getElementById('senha').type = 'text';
});
    
document.getElementById('olho').addEventListener('mouseup', function() {
    document.getElementById('senha').type = 'password';
});


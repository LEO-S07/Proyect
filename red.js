/*Redireccionamiento de la página*/


var numero = 1;

alert("El numero que deberas ingresar es: " + numero);

if (prompt("Ingrese un número") == numero) {
    window.open("http://127.0.0.1:3000/index.html")
}else{
    alert("Hazlo bien")
}

setTimeout(() => {
    document.getElementById("Back").style.backgroundColor = "red";
    document.getElementById("T1").textContent = "Acabamos de Acceder a tus datos";
    document.getElementById("P1").textContent = "Tu PC sera infectada en 30 minutos";

}, 5000);
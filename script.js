var nombresDisponibles = ["Juan", "Efren", "Luis", "Leo", "Loor", "Franks","Thomas"];

console.log("Nombres disponibles: " + nombresDisponibles);

document.getElementById("evento").addEventListener("click", function() {
    var nombreIngresado = prompt("Ingrese un nombre");
    if (nombresDisponibles.includes(nombreIngresado)) {
        alert("Hola " + nombreIngresado + " ten un lindo día😊");
        alert("guarra...😏");
    } else {
        alert("perdon  pero...")
        alert("Mas vale que cierres el navegador tú, o lo hare yo...encerio");
        let i = 0;
        while (i < 15000) {
            console.log(i);
            i++;
        }
        if (i == 15000) {
            window.close();
        }
    }
});

/*part 2 */

document.getElementById("23").addEventListener("23", function() {
    alert("Deberias revisar la pagina anterior");
});

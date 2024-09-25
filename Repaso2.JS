//	Pide al usuario un número y determina si es par o impar y si es positivo o negativo

let numero = Number(prompt("Digite un numero" ));

if (numero %2 === 0){
    alert ("El numero  " +numero+ "  es par")
}
else {
    alert ("El numero  " +numero+ "  es impar")
}

if(numero > 0){
    alert ("El numero  " +numero+ "  es positivo");
}
else if (numero < 0 ){
    alert ("El numero  " +numero+  "  es negativo");
}
else {
    alert ("El numero es 0");
}

//	Pide al usuario dos números y determina cual es el número mayor y cual es el menor.

let n1 = Number(prompt("Digite un numero : "));
let n2 =  Number(prompt("Digite otro numero : "));

if(n1 > n2){
    alert ("El numero mayor es : "+n1+ "\n"
           +" El numero menor es : "+n2);
}
else if(n1 < n2){
    alert ("El numero mayor es : "+n2+ "\n"
            +"El numero menor es : "+n1);
}
else{
    alert ("Ambos numeros son iguales : ");
}


/*Pide al usuario que digite un numero del 1 al 7
y Realiza el código correspondiente para saber cuál es el dia de la semana
correspondiente al número digitado...*/

let num = Number(prompt("Digite un numero del 1 al 7 : "));
let dia;

if (num === 1){
    dia = "lunes";
} else if (num === 2) {
   dia = "Martes";
} else if ( num === 3){
   dia = "Miercoles";
} else if (num === 4){
    dia = "Jueves";
} else if (num ===5){
    dia = "Viernes";
} else if (num === 6){
    dia = "Sábado";
} else if (num === 7){
    dia = "Domingo";
} else {
    dia = "Numero invalido. Por favor, ingrese un numero del 1 al 7.";
}

alert ("El dia correspondientes es : " +dia);

/*4. Se necesita clasificar la etapa de una persona solo pidiéndole como dato su edad.
 (Si la edad es menor de 18 es adolente), (si la edad está en el rango de 18 a 28 es adulto adolecente), 
(si la edad está entre 29 a 49 es adulto), (si la edad está entre 50 en adelante es adulto mayor).  */

let edad = Number(prompt("For favor, Digite su edad : "));

if (edad < 18){
    alert ("Edad : " +edad+"\n"+ "Eres adolescente."
    )  
} else if(edad >= 18 && edad <= 28){
    alert ("Edad : " +edad+"\n"+ "Eres adulto adolescente.")
} else if (edad >= 29 && edad <= 49){
    alert ("Edad : " +edad+"\n"+ "Eres adulto.")
} else if (edad >= 50){
    alert ("Edad : " +edad+"\n"+ "Eres adulto mayor.")
} else {
    alert ("Dato invalido; tu edad no aplica para la Beca.");
}


/*5. Realice una factura de venta, ingrese el valor de 3 productos y calcule lo siguiente:
si paga en efectivo paga el valor total.
si paga con cupón realice un 3% de descuento
si paga a crédito aumente el 5% al total.*/

let vlrProducto1 = Number(prompt("Ingrese el valor del producto1"));
let vlrProducto2 = Number(prompt("Ingrese el valor del producto2"));
let vlrProducto3 = Number(prompt("Ingrese el valor del producto3"));
let vlrtotal = (vlrProducto1 + vlrProducto2 + vlrProducto3);
let metodoPago;
let descuento;
let aumento;
let totalDescuento;
let totalAumento;

metodoPago = prompt("¿ Cómo deseas pagar? (efectivo/cupon/credito) ");

if (metodoPago === "efectivo"){
    alert ("El total a pagar es :  $ " +vlrtotal);
} else if (metodoPago === "cupón"){
     descuento = vlrtotal * 0.03;
     totalDescuento = vlrtotal - descuento;
    alert("Total a pagar con el descuento del 3% es : $ " +totalDescuento);
} else if (metodoPago === "crédito"){
    aumento =  vlrtotal * 0.05;
    totalAumento = vlrtotal + aumento;
    alert ("Total a pagar a crédito  : $ " + totalAumento);
} else {
    alert ("Metodo de pago invalido. Por favor elige entre : pago efectivo/cupun/credito...")
}

/*6.Se pide ingresar 3 notas y calcular el promedio de un alumno, 
    mostrar el nivel del alumnos según su promedio: 
*   menos 2,0 = Malo
*   menos 2,9 = Debe recuperar
*   entre 3 – 3,9 = Regular.
*   entre 4 – 4,4 = Bueno.
*  entre 4,5 – 5 = Muy bueno.*/

let nota1 = Number(prompt("Ingresa la nota 1 : "));
let nota2 = Number(prompt("Ingresa la nota 2 : "));
let nota3 = Number(prompt("Ingresa la nota 3 : "));

let promedio = (nota1 + nota2 + nota3) / 3;
alert ("El promedio del alumno es : " +promedio);

if (promedio < 2,0){
    alert ("Su nivel es malo")
} else if (promedio < 2,9){
    alert ("Debe recuperar")
} else if (promedio >= 3 && promedio <= 3,9){
    alert("Su nivel es basico")
} else if (promedio >= 4 && promedio <= 4,4){
    alert ("Su nivel es bueno")
} else if (promedio >= 4,5 && promedio <= 5){
  alert (" FELICITACIONES.. Su nivel es alto")
} else {
    alert("Nota invalida. la nota debe estar entre 0 y 5.")
}

// Usando switch para mostrar el nivel : 

switch (nivel) {
    case "Malo":
        alert("Nivel: Malo");
        break;
    case "Debe recuperar":
        alert("Nivel: Debe recuperar");
        break;
    case "Regular":
        alert("Nivel: Regular");
        break;
    case "Bueno":
        alert("Nivel: Bueno");
        break;
    case "Muy bueno":
       alert("Nivel: Muy bueno");
        break;
    default:
        alert(nivel);
        break;
}


/* Calcula la edad actual de una persona a partir de su fecha de nacimiento.
Los datos a pedir son: día, mes y año de nacimiento.*/

let fechaNacimiento = Number(prompt("Digite el año de nacimiento : "));
let mesNacimiento = Number(prompt("Digite el mes de nacimiento : "));
let diaNacimiento = Number(prompt("Digite el dia de nacimiento : "));
let anoActual;
let Edad = (fechaActual - fechaNacimiento);
if (fechaActual < mesNacimiento || 
   (fechaActual === mesNacimiento && fechaActual < diaNacimiento)) {
    edad--;
   }
       
    alert("Tu edad es : " )+Edad;


/*Calcula cuánto se debe pagar por costos de hospitalización en la clínica Me Muero según los siguientes 
datos:
* Mostrar en pantalla días de hospitalización del paciente
*Valor dia según su edad
*Valor del recargo y total a pagar*/

let diasHospitalizacion = Number(prompt("Ingrese los dias de hospitalizacion"));
let edadPaciente = Number(prompt("Ingresa edad del paciente : "));

let vlrDia;
switch (true){
    case (edadPaciente < 18):
          vlrDia = 100;
          break;
    case (edadPaciente >= 18 && edadPaciente <= 65):
        vlrDia = 200;
         break;
    case (edadPaciente > 65 ): 
         vlrDia = 150;
         break;
    default:
        vlrDia = 0;
        break;               
}

let costoTotal = diasHospitalizacion * vlrDia;

let recargo = 0;
    if (diasHospitalizacion > 10) {
        recargo = costoTotal * 0.10; // 10% de recargo
    }

    let totalAPagar = costoTotal + recargo;
   
    alert("Días de hospitalización:  $ " +diasHospitalizacion);
    alertg("Valor por día :  $ " + vlrDia);
    alert("Recargo:  $ " +recargo);
    alert("Total a pagar:  $$ " +totalAPagar);



    


















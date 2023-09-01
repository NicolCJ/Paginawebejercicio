function saludo() {
    alert("Bienvenido a mi website con Bootstrap y Js");
    
}

function suma() {
    // declaramos variables 
    let A = 0;
    let B = 0;
    let S = 0;

    // Solicitar valores

    A = parseInt(prompt("Ingrese el primer valor a sumar"));
    B = parseInt(prompt("Ingrese el segundo valor a sumar"));

    // Realizar el procedimiento
    S=A+B;

    // Mostrar resultado 
    alert("El resultado es:" +S);

    
}

function operaciones() {
    A = 0;
    B = 0;
    S = 0;
    R = 0;
    M = 0;
    D = 0;

    A = parseInt(prompt("Ingrese el primer valor a operar"));
    B =parseInt(prompt("Ingrese el primer valor a operar"));

    S=A+B;
    R=A-B;
    M=A*B;
    D=A/B;

    // alert("El resultado de la suma es:" +S);
    // alert("El resultado de la resta es:" +R);
    // alert("El resultado de la multiplicacion es:" +M);
    // alert("El resultado de la division es:" +D);

    alert("El resultado de la suma es: " +S +"El resultado de la resta es: " +R +"El resultado de la multiplicacion es:" +M +"El resultado de la division es:" +D);
}

function Mayor() {
    alert("Algoritmo que determinara el mayor de los numeros ingresados");
    let N1= 0;
    let N2= 0;

    N1= parseInt(prompt("Digite el primer numero"));
    N2= parseInt(prompt("Digite el segundo numero"));

    if (N1==N2) {
        alert("Los valores ingresados son iguales");
    }
    else if (N1>N2) {
        alert("El numero mayor es: " +N1);
    }
    else{
        alert("El numero mayor es: " +N2);
    }


}

// El colegio ABC requiere un sistema que permita a los diferentes estudiantes ingresar su nombre, materia, y 7 califiaciones, y este le indique si aprobo o reprobo la materia teniendo en cuenta que se aprueba si el puntaje es mayor o igual a 6

function calificaciones() {
    let n = 0;
    let m = 0;
    let c1= 0;
    let c2= 0;
    let c3= 0;
    let c4= 0;
    let c5= 0;
    let c6= 0;
    let c7= 0;
    let pro= 0;

    n= prompt("Ingrese su nombre");
    m= prompt("Ingrese el nombre de la materia");
    c1=parseInt(prompt("Ingrese la primera calificacion"));
    c2=parseInt(prompt("Ingrese la segunda calificacion"));
    c3=parseInt(prompt("Ingrese la tercera calificacion"));
    c4=parseInt(prompt("Ingrese la cuarta calificacion"));
    c5=parseInt(prompt("Ingrese la quinta calificacion"));
    c6=parseInt(prompt("Ingrese la sexta calificacion"));
    c7=parseInt(prompt("Ingrese la septima calificacion"));

    pro= (c1+c2+c3+c4+c5+c6+c7)/7;

    if (pro>=6) {
        alert("Su nota final es: " +pro +" Aprobo la materia"); 
    }
    else{
        alert( "Su nota final es: " +pro +" No aprobo la materia ");
    }

}
// se requiere un sistema o algoritmo que al ingresar el valor en dolares nos indique a cuantos pesos colombianos equivale euros, soles

function conversor() {
    let d = 0;
    let p = 4.119;
    let e = 0.92;
    let s = 3.72;
    let con1= 0;
    let con2= 0;
    let con3= 0;

    d=parseFloat(prompt("Ingrese el valor en dolares"));

    con1= d *e;
    con2= d* p;
    con3= d* s;

    alert("El equivalente en pesos colombiano es:" +con2 +"El equivalente en euros es: " +con1 +" el equivalente en soles es: " +con3);

    
    
}
// un individuo desea invertir su capital en un banco y requiere saber cuanto dinero ganara despues de n numero de años teniendo en cuenta que el banco paga un interes del 1.3% mensual 
function cdt() {
    let ci=0;
    let ta=0;
    let im=1.3;
    let ia=im*12;
    let cf=0;


    ci= parseFloat(prompt("Ingrese la cantidad de dinero a invertir "));
    ta=parseInt(prompt("Ingrese la cantidad de años"));

    
    ia=im*12;

    
    
    cf= ci* Math.pow((1+ia/100),ta);
    alert("El capital final es: " +cf);   
}

function mayorentresnumero() {
    let A=0;
    let B=0;
    let C=0;
        
    A= parseInt(prompt("Ingrese el primer numero"));
    B= parseInt(prompt("ingrese el segundo numero"));
    C= parseInt(prompt("Ingrese el tercer valor"));

    if (A==B && A==C) {
        alert("Los numeros son iguales");
    }
    else if (A>B && A>C) {
        alter("El numero mayor es: " +A);
    }
    if (B>C) {
        alert("el numero mayor es: " +B);
    }
    else{
        alert("El numero mayor es: " +C);

    }
   

}

function promedioconfor() {
    let n = 0;
    let m = 0;
    let s = 0;
    let p = 0;
    let i =

    n= prompt("Ingrese su nombre");
    m= prompt("Ingrese el nombre de la materia");


    for (let i = 0; i < 7; i++) {
        let calificacion=parseFloat(prompt("Ingrese la nota" +i));

        s= s+calificacion;
       
    }
    
    p = s/7

    if (p>=6) {
        alert("Su nota final es: " +p +" Aprobo la materia"); 
    }
    else{
        alert( "Su nota final es: " +p +" No aprobo la materia ");
    }

    
}

function circulo() {
    // capturamos en una constante el elementos html que deseamos manipular 
    const figura = document.getElementById("figura");
    // al elemento le agregamos la clase circulo 

    figura.classList.toggle("circulo");
    // remove para quitar
    // add para añadir
    
}

function moveTop() {
    const figura = document.querySelector("#figura");

    figura.classList.toggle("Top");

    
}

function panelLateral() {
    const panel = document.getElementById("panel-lateral");

    panel.classList.toggle("active");

    
}

function Horizontal() {
    const figura = document.getElementById("figura");

    figura.classList.toggle("horizontal");
    
}
function vertical() {
    const figura = document.getElementById("figura");

    figura.classList.toggle("vertical");
    
}

function Gif() {
    const figura = document.getElementById("figura");

    figura.classList.toggle("Gif");
    
}
function left() {
    const figura = document.getElementById("figura");

    figura.classList.toggle("left");
    
}
function right() {
    const figura = document.getElementById("figura");

    figura.classList.toggle("right");
    
}
function degradado() {
    const figura = document.getElementById("figura");

    figura.classList.toggle("degradado");
    
}

function rombo() {
    const figura = document.getElementById("figura");

    figura.classList.toggle("rombo");
    
}

function triangulo() {
    const figura = document.getElementById("figura");

    figura.classList.toggle("triangulo");
    
}

function panelsuperior() {
    const panel = document.getElementById("panel-superior");

    panel.classList.toggle("active");

    
}


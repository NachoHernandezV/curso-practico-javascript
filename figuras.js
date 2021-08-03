//CODIGO DEL CUADRADO
console.group("Cuadrados");  //para agrupar los console log
    //const ladoCuadrado=5;
   // console.log("Los lados del cuadrado miden : "+ladoCuadrado + " Cm");

function perimetroCuadrado(lado){ //LO QUE SE RECIBE SE LLAMAN PARAMETROS
    return lado * 4;
} 
//perimetroCuadrado(10)  // ese 10 se llama ARGUMENTOS

    //console.log("El perimetro del cuadrado es : "+ perimetroCuadrado + " Cm");

function areaCuadrada(lado){
    return lado * lado;
} 
    //console.log("El Area Cuadrada es : " + areaCuadrada + " Cm2");
console.groupEnd();
//CODIGO DEL CUADRADO


//CODIGO TRIANGULO
console.group("Triangulos");
/*const ladoTriangulo1=6;
const ladoTriangulo2=6;
const baseTriangulo=4;
const alturaTriangulo=5.5;*/

//console.log("Los lados del triangulo miden : "+ladoTriangulo1+ " Cm, "+ladoTriangulo2+" Cm, "+baseTriangulo+" Cm");
//console.log("La altura del triangulo mide : "+alturaTriangulo+" Cm");

function perimetroTriangulo(ladoTriangulo1,ladoTriangulo2,baseTriangulo){
    return ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
} 
//console.log("El perimetro del triangulo es : "+ perimetroTriangulo + " Cm");

function AreaTriangulo(baseTriangulo,alturaTriangulo){
    return (baseTriangulo * alturaTriangulo)/2;
} 
//console.log("El Area del triangulo es : "+ AreaTriangulo + " Cm2");

console.groupEnd();

//CODIGO TRIANGULO


//CODIGO CIRCULO
console.group("Circulos");

const PI = Math.PI;
/*const radio = 4;
const diametro = radio * 2;
const PI = Math.PI;
console.log("La variable PI es : "+ PI );*/

function DiametroCirculo(radio){
    return radio * 2;
}

function perimetroCirculo(radio){
    const diametro = DiametroCirculo(radio);
    return diametro*PI;
}

//const perimetroCirculo= diametro*2;
//console.log("El Perimetro del Circulo es : "+ perimetroCirculo + " Cm");

function AreaCirculo(radio){
return PI*(radio*radio);
}
//console.log("El Area del Circulo es : "+ AreaCirculo + " Cm2");


console.groupEnd();
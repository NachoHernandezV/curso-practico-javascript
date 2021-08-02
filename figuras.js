//CODIGO DEL CUADRADO
console.group("Cuadrados");  //para agrupar los console log
    const ladoCuadrado=5;
    console.log("Los lados del cuadrado miden : "+ladoCuadrado + " Cm");

    const perimetroCuadrado = ladoCuadrado * 4;
    console.log("El perimetro del cuadrado es : "+ perimetroCuadrado + " Cm");

    const areaCuadrada = ladoCuadrado * ladoCuadrado;
    console.log("El Area Cuadrada es : " + areaCuadrada + " Cm2");
console.groupEnd();
//CODIGO DEL CUADRADO


//CODIGO TRIANGULO
console.group("Triangulos");
const ladoTriangulo1=6;
const ladoTriangulo2=6;
const baseTriangulo=4;
const alturaTriangulo=5.5;

console.log("Los lados del triangulo miden : "+ladoTriangulo1+ " Cm, "+ladoTriangulo2+" Cm, "+baseTriangulo+" Cm");
console.log("La altura del triangulo mide : "+alturaTriangulo+" Cm");

const perimetroTriangulo = ladoTriangulo1 +  ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo es : "+ perimetroTriangulo + " Cm");

const AreaTriangulo = (baseTriangulo * alturaTriangulo) /2;
console.log("El Area del triangulo es : "+ AreaTriangulo + " Cm2");

console.groupEnd();

//CODIGO TRIANGULO


//CODIGO CIRCULO
console.group("Circulos");

const radio = 4;
const diametro = radio * 2;
const PI = Math.PI;
console.log("La variable PI es : "+ PI );


const perimetroCirculo= diametro*2;
console.log("El Perimetro del Circulo es : "+ perimetroCirculo + " Cm");

const AreaCirculo= PI*(radio*radio);
console.log("El Area del Circulo es : "+ AreaCirculo + " Cm2");


console.groupEnd();
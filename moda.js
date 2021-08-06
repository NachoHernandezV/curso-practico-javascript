/*const lista1 = [
1,2,3,1,2,3,4,2,2,2,1
];
*/
//Se crea el objeto vacio
const lista1Count = {};




function CalcularModa(lista1){
    //Aqui se va a ir llenado el objeto, 1:numero de veces, 2: numero de veces
    lista1.map(
        function(elemento){
            if(lista1Count[elemento]){
                lista1Count[elemento] += 1;
            }
            else{
                lista1Count[elemento] = 1;
            }
            
        }
    );

    //Se convierte el objeto a un ARRAy, y se le aplica el metodo sort para ordenar
    //elementoA  consiste en ["1",4] son dos elementos
    const listaArray = Object.entries(lista1Count).sort(
        function (elementoA,elementoB){
            return elementoA[1] - elementoB[1];
            //Esta resta es la forma de ordenar es que regresa numeros positivos, cero y negativos
            //Dependiendo de lo que mande es como ordena
        }
    );

    const moda = listaArray[listaArray.length-1];

    console.log(moda)
}

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado=0,nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    )
    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

/*
let lista1 = [
    100,8,80,300,500,30,10,1,3
];
*/

//FUNCION PARA ORDENAS LOS NUEMROS
function ordenar (a,b){ return a - b; }

let mediana;

//FUNCION PARA SABER SI ES PAR O IMPAR
function esPar(numero){
    if(numero%2 === 0)
        return true;
    else
        return false;
}



function calcularMediana(lista1){
    //Ordenar Numeros
    lista1.sort(ordenar); 
    //Obtener la mitad de los datos
    const mitadLista1 = parseInt(lista1.length / 2);

    //VALIDAMOS SI ES PAR O NO Y EJECUTAMOS EL CODIGO CORRESPONDIENTE
    if(esPar(lista1.length)){
        const elemento1 = lista1[mitadLista1 -1];
        const elemento2 = lista1[mitadLista1];
        const promedio1y2 =calcularMediaAritmetica([elemento1,elemento2]);
        mediana=promedio1y2;
    }
    else{
        mediana = lista1[mitadLista1];
    }
    console.log(lista1);
    console.log(mediana);
}
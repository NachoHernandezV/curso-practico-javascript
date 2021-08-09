function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado=0,nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    )
    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}


//Aqui solo guardamos los salarios de los empleados
const salariosCol = colombia.map(
function(persona){
    return persona.salary;
}
);


//Ordenamos de menor a mayor los salarios
const salariosColSorted = salariosCol.sort(
function(SalaryA,salaryB){
    return SalaryA - salaryB;
}
);



function esPar(numero){
    return (numero%2 === 0);
}

function medianaSalariosCol(lista){
        const mitad = parseInt(lista.length/2);

        if(esPar(lista.length)){
            const persona1 = lista[mitad-1];
            const persona2 = lista[mitad];
            const Mediana = calcularMediaAritmetica([persona1,persona2]);
            return Mediana;
        }
        else{
            const personaMitad = lista[mitad];
            return personaMitad;
        }
}


console.log(colombia);
console.log(salariosCol);
console.log(salariosColSorted);
console.log(medianaSalariosCol(salariosColSorted));


//Mediana del top 10%
const spliceStart = (salariosColSorted.length * 90)/100;
const spliceCount = salariosColSorted-spliceStart;

//La funcion splice toma dos parametros , donde se inicia, y el numero de lementos que toma

const salariosColTop10 = salariosColSorted.splice(spliceStart,spliceCount);

const MedianaSalariosTop10 = medianaSalariosCol(salariosColTop10);

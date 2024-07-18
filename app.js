function numeros() {
    //Array de numeros
    let arrayNum = [150,100,60,87,39,50,11,66,2,98];

    //Ordenar el array de menor a mayor 
    arrayNum.sort((a,b) => a-b);
    console.log("Array Ordenado " + arrayNum)

    //Obtener el promedio de la suma del array 
    const total = arrayNum.reduce((a,b) => {
        return a+b;
    })
    console.log("Suma de todo el Array " + total)

    //Contar cuantos de esos números fueron primos 
    function numPrimos (numero) {
        if (numero <= 1) return false;
        for (let i = 2; i * i <= numero; i++){
            if (numero % i === 0) return false;
        }
        return true;
    }

    function contarPrimos (arrayNum) {
        let cont = 0;
        for (const numero of arrayNum){
            if (numPrimos(numero)) cont++;
        }
        return cont;
    }

    const primos = contarPrimos(arrayNum);
    console.log("Cantidad de numeros que son primos " + primos)
}
numeros()
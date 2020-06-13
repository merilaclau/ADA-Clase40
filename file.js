// 1
/***********************************************
 * 
 * Hacer una función que reciba una frase y devuelva
 * el número de vocales que tiene la misma.
 * indexOf o findIndex
 *  
 ***********************************************/

//Solución con if
const findVocals = () => {
    const phraseArray = phraseString.split("");
    let vocalTotal = 0;
    phraseArray.forEach((item) => {
        if (item == "a" || item == "e" || item == "i" || item == "o" || item == "u") {
            vocalTotal++;
        }            
    }
    )
    alert(`El número de vocales en la frase es ${vocalTotal}`);
}

let phraseString = prompt("Ingresá una frase");
findVocals(phraseString);



//Solución con findIndex compacta
const findVocals = () => {  
    const phraseArray = phraseString.split("");
    let vocalTotal = 0;
    const vocals = ['a','e','i','o','u'];
    phraseArray.forEach((letter) => { 
        if (vocals.findIndex((vocal) => vocal === letter) > -1) { 
            vocalTotal++; 
        }
    })
    alert(`El número de vocales en la frase es ${vocalTotal}`);
}

let phraseString = prompt("Ingresá una frase");
findVocals(phraseString);



//Solución con findIndex más legible
const findVocals = () => {
    const phraseArray = phraseString.split("");
    let vocalTotal = 0;
    const vocals = ['a','e','i','o','u'];
    phraseArray.forEach((letter) => { 

        // Find index in vocals
        const vocalIndex = vocals.findIndex((vocal) => {
            return vocal === letter;
        }); 

        //Check if index exists
        if (vocalIndex > -1) { 
            vocalTotal++; 
        }
    })
    alert(`El número de vocales en la frase es ${vocalTotal}`);
}

let phraseString = prompt("Ingresá una frase");
findVocals(phraseString);



//Solución con indexOf
const findVocals = () => {
    let phraseArray = phraseString.split("");
    const vocals = ['a','e','i','o','u'];
    let vocalTotal = 0;
    phraseArray.forEach(letter => {
        if (vocals.indexOf(letter) > -1 ) {
            vocalTotal++
        }
    })
    alert(`El total de vocales en la frase es ${vocalTotal}`);
}

let phraseString = prompt("Ingresá una frase");
findVocals(phraseString);


        
// 2
 /***********************************************
 * 
 * Hacer una función que tome, primero, una frase
 * y luego pida un caracter para remover de la 
 * frase ingresada.
 * Observaciones: validar que el caracter ingresado
 * sea solo uno. Si es más de uno tirar un error.
 *  
 ***********************************************/

const removeChar = () => {   
    let phraseArray = phraseString.split("");
    let char = prompt("¿Qué caracter te gustaría eliminar de la frase?");
    if (char.length = 1) {
        phraseArray.splice((phraseArray.indexOf(char)), 1);
        phraseString = phraseArray.join("");
    }
    else {
        alert("Error: ingresaste más de un caracter.")
    }
    alert(`La frase final es: ${phraseString}`);
}

let phraseString = prompt("Ingresá una frase");
removeChar(phraseString);
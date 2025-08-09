function checkPalindroma(string){

    let str1 = string.toLowerCase();
    // così evito il caso di lettere maiuscole

    str1 = str1.replace(/[^\w]|_/g, "");
    // elimina punteggiatura e spazi

    let str2 = str1.split("").reverse().join("");
        
    if(str1 == str2){
        
        return console.log(`Frase palindroma`);
        
    } else {
        
        return console.log(`Frase non palindroma`);
        
    }

}

let frase = prompt('Inserisci una frase qui');

checkPalindroma(frase);
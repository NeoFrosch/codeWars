function XO(str) {
    let stringLower = str.toLowerCase();
    let numX = 0;
    let numO = 0;
    for(let i = 0; i < stringLower.length; i++){
        if(stringLower[i] === "o") {
            numO++
        } else if (stringLower[i] === "x"){
            numX++
        }
    }

    return numX === numO;
}

console.log(XO('xoo'))
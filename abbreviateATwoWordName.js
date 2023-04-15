function abbrevName(name){
    let arr = name.toUpperCase().split(" ")
    
    return arr[0][0] + "." + arr[1][0];
}

console.log(abbrevName("Sam Harris"))
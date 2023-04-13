function accum(s) {
    return s
    .split("")
    .map((letter, i) => {
        let repeatedLetter = letter.toLowerCase().repeat(i)
        return letter.toUpperCase() + repeatedLetter;
    })
    .join("-")
}

console.log(accum("abcd"))
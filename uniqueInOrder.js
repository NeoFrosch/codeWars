var uniqueInOrder=function(iterable){
    if(typeof iterable === "string"){
       iterable = iterable.split("")   
    }

        return iterable.filter((item, idx) => {
            return item !== iterable[idx - 1]});
    
    
}


console.log(uniqueInOrder('AAAABBBCCDAABBB'))
console.log(uniqueInOrder([1,2,2,3,3]))
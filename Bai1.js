const arrayInput = [1, 2, 3, 4];

function evenNumberMultiByTwo(array) {
    return array.map (number =>{
        if(number % 2 == 0) {
            return number * 2;
        }
        return number;
    })
}
console.log(evenNumberMultiByTwo(arrayInput));


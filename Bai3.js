const animals = [
    {
        name: "cat",
        size: "small",
        weight: 5
    },
    {
        name: "dog",
        size: "medium",
        weight: 10
    },
    {
        name: "elephant",
        size: "big",
        weight: 5000
    }
]

function getNameHasLetterT() {
    return result = animals.filter((animal) => animal.name.includes('t'))
}
console.log(getNameHasLetterT())

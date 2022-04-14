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

function getAnimalInfoString(animal) {
    const animalInfo = `name: ${animal.name} - size: ${animal.size} - weight: ${animal.weight}kg`
    return animalInfo;
}

function convertToStringArray() {
    return result = animals.filter((animal) => animal.name.includes('t')).map(animal => getAnimalInfoString(animal))
}

console.log(convertToStringArray(animals));

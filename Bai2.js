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

function findWeightAnimal(animal) {
    return result = animal.filter((animals) => animals.weight > 50)
}
console.log(findWeightAnimal(animals))


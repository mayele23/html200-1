function getSheddingAmount(breed) {
    if (breed === 'golden retriever') {
        return 'lots of shedding';
    } else if (breed === 'labradoodle') {
        return 'minimal shedding';
    } else if (breed === 'portuguese water dog') {
        return 'no shedding';
    } else {
        return 'not found';
    }
}

const myDogBreed = 'labradoodle';

console.log(
    getSheddingAmount(myDogBreed)
);

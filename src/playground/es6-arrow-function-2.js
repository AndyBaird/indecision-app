// arguments object - no longer bound with arrow functions

const add = (a,b) => {
    // console.log(arguments);
    return a + b;
}

console.log(add(55,1));

// this keyword - no longer bound with arrow functions

const user = {
    name: 'Andy',
    cities: ['Mint Hill', 'Charlotte', 'Dublin'],
    printPlacesLived(){
        return this.cities.map((city) => this.name + ' has lived in ' + city); 
    }

}
console.log(user.printPlacesLived());

//Challenge Area

const multiplier = {
    numbers: [1,3,4,5,7],
    multiplyBy: 2,
    multiply(){
        return this.numbers.map((number) => number * this.multiplyBy);
    }
}

console.log(multiplier.multiply());
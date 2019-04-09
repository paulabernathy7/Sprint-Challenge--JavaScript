// ==== Objects ====

/* 
  Given the following information about dinosaurs, create 3 objects: 
  Use this pattern to create your objects: 
  object name, diet, weight, length, period
*/

// tyrannosaurus, carnivorous, 7000kg, 12m, Late Cretaceious
const dino1 = {
  name: 'tyrannosaurus',
  diet: 'carnivorous',
  weight: '7000kg',
  length: '12m',
  peroid: 'Late Cretaceious',
  roar: function() {
    return 'RAWERSRARARWERSARARARRRR!';
  }
}

// stegosaurus, herbivorous, 2000kg, 9m, Late Jurassic
const dino2 = {
  name: 'stegosaurus',
  diet: 'herbivorous',
  weight: '2000kg',
  length: '9m',
  peroid: 'Late Jurassic'
}

// velociraptor, carnivorous, 15kg, 1.8m, Late Cretaceious
const dino3 = {
  name: 'velociraptor',
  diet: 'carnivorous',
  weight: '15kg',
  length: '1.8m',
  peroid: 'Late Cretaceious'
}


// Using your dinosaur objects, log answers to these questions:

// How much did tyrannosaurus weigh?
console.log(dino1.weight);

// What was the diet of a velociraptor?
console.log(dino3.diet);

// How long was a stegosaurus?
console.log(dino2.length);

// What time period did tyrannosaurus live in?
console.log(dino1.peroid);


// Create a new roar method for the tyrannosaurus.  When called, return "RAWERSRARARWERSARARARRRR!" Log the result.
console.log(dino1.roar);


// ==== Arrays ====

// Given an array of college graduates.  Complete the following requests WITHOUT using any array methods like .forEach(), .map(), .reduce(), .filter()

const graduates = [{"id":1,"first_name":"Cynde","university":"Missouri Southern State College","email":"ctorry0@macromedia.com"},
{"id":2,"first_name":"Saundra","university":"The School of the Art Institute of Chicago","email":"swhal1@state.gov"},
{"id":3,"first_name":"Lambert","university":"Marian College","email":"lparham2@techcrunch.com"},
{"id":4,"first_name":"Modestine","university":"International Medical & Technological University","email":"mdolder3@symantec.com"},
{"id":5,"first_name":"Chick","university":"Sultan Salahuddin Abdul Aziz Shah Polytechnic","email":"camorts4@google.com.au"},
{"id":6,"first_name":"Jakob","university":"Fachhochschule Rosenheim, Hochschule für Technik und Wirtschaft","email":"jharken5@spiegel.de"},
{"id":7,"first_name":"Robbi","university":"Salem University","email":"rbrister6@redcross.org"},
{"id":8,"first_name":"Colline","university":"Coastal Carolina University","email":"cbrosh7@alibaba.com"},
{"id":9,"first_name":"Michail","university":"Universidad Católica de Ávila","email":"mrome8@shinystat.com"},
{"id":10,"first_name":"Hube","university":"Universitat Rovira I Virgili Tarragona","email":"hlethbrig9@foxnews.com"}]

/* Request 1: Create a new array called universities that contains all the univeristies in the graduates array.  

Once you have the new array created, sort the universities alphabetically and log the result. */
const universities = [];
for (let i = 0; i < graduates.length; i ++) {
  console.log(graduates[i].university);
  universities.push(graduates[i].university)
}
console.log(universities.sort())

//to create the new array we needed to set a variable equal to an empty array. next we used a for loop to iterate through the array object. we logged the results of our array with unversity since thats the infor we're looking to iterate through. then we pushed the results into our new array.
// lastly we pushed the results into our new array

/* Request 2: Create a new array called contactInfo that contains both first name and email of each student. 

The resulting contact information should have a space between the first name and the email information like this: 
Name email@example.com

Log the result of your new array. */
const contactInfo = [];
for(let i = 0; i < graduates.length; i ++) {
  console.log(graduates[i].first_name, graduates[i].email)
  contactInfo.push(graduates[i].first_name, graduates[i].email)
}
console.log(contactInfo);

//same thing as last time the difference we iterated through the first name and emails of our students. we pushed the infor to our empty array and logged it

/* Request 3: Find out how many universities have the string "Uni" included in their name. Create a new array called uni that contains them all. Log the result. */
const uni = [];
for(let i = 0; i < graduates.length; i ++) {
  if (graduates[i].university.includes('Uni')) {
    uni.push(graduates[i])
  }
}
console.log(uni);

//same thing as last time, however the difference is that we needed to iterate and find the schools that have uniin their name. To do this we used an if statement. at the end of our statement we used the includes method to make sure we only included the schools that have uni in their name. we then pushed the info to our array


// ==== ADVANCED Array Methods ====

// Given this zoo data from around the United States, follow the instructions below.  Use the specific array methods in the requests below to solve the problems.


zooAnimals = [{"animal_name":"Jackal, asiatic","population":5,"scientific_name":"Canis aureus","state":"Kentucky"},
{"animal_name":"Screamer, southern","population":1,"scientific_name":"Chauna torquata","state":"Alabama"},
{"animal_name":"White spoonbill","population":8,"scientific_name":"Platalea leucordia","state":"Georgia"},
{"animal_name":"White-cheeked pintail","population":1,"scientific_name":"Anas bahamensis","state":"Oregon"},
{"animal_name":"Black-backed jackal","population":2,"scientific_name":"Canis mesomelas","state":"Washington"},
{"animal_name":"Brolga crane","population":9,"scientific_name":"Grus rubicundus","state":"New Mexico"},
{"animal_name":"Common melba finch","population":5,"scientific_name":"Pytilia melba","state":"Pennsylvania"},
{"animal_name":"Pampa gray fox","population":10,"scientific_name":"Pseudalopex gymnocercus","state":"Connecticut"},
{"animal_name":"Hawk-eagle, crowned","population":10,"scientific_name":"Spizaetus coronatus","state":"Florida"},
{"animal_name":"Australian pelican","population":5,"scientific_name":"Pelecanus conspicillatus","state":"West Virginia"}];

/* Request 1: .forEach()

The zoo wants to display both the scientific name and the animal name in front of the habitats.  Return an array with only the animal and scientific names in it.  The individual values in the array should look like this "Name: Jackal, asiatic, Scientific: Canis aureus."

*/
const animalNames = [];

zooAnimals.forEach(function (name) {
  animalNames.push(`${name.animal_name} ${name.scientific_name}`)
});

console.log(animalNames);

// we created a variable that takes in an empty array. instead of using a for loop to iterate through we used for each.
// we used for each and created a functio inside with a callback. we then pushed the animal names and their scientific names using backticks templet literals.

/* Request 2: .map()    

The zoos need a list of all their animal's names (names only, not scientific) converted to lower case.  Create a new array named lowerCase and map over each name to convert them all to lower case.  Log the resut.

*/

const lowerCase = zooAnimals.map(function(lower){
  return lower.animal_name.toLowerCase()
});


console.log(lowerCase); 

// in this case we needed to iterate through our array object and return the items we're looking for in all lowercase
// we created a variable and inside of it we used the map method. we placed a function with a callback inside the method.
// we then returned the array created by map and used the tolowercase method to return the animal names in lowercase

/* Request 3: .filter() 

The zoos are concenred about animals with a lower population count. Find out which animals have a population less than 5.

*/
const largerPopulation = zooAnimals.filter(function(count) {
  if (count.population < 5 ) {
    return count
  }
});
console.log(largerPopulation);

// similar to map, filter also creates an array. so we needed to create a variable to take in that array. 
// we placed a function inside of filter with a callback. We then used an if statement to help us return what we're looking for.

/* Request 4: .reduce() 

The zoos need to know their total animal population across the United States.  Find the total population from all the zoos using the .reduce() method.

*/
const populationTotal = zooAnimals.reduce(function(total, value){
  return total + value.population;
}, 0);
console.log(populationTotal);


//lastly we created a variable to place our new array inside since we're using reduce. 
// we placed a function inside of reduce with our values and total that accumlates everything
// we then returned the totoal + the value.population. since we're looking for the total population
// we then added a 0 at the end of our  function to make sure the court starts ar 0


/* 

Stretch: If you haven't already, convert your array method callbacks into arrow functions.

*/


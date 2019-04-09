// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

function consume(a,b,cb) {
  return cb(a,b) 

  
}

// consume accepts 2 parameters which are a and b. consume also accepts a callback which is cb. the callback always goes last. on the next line inside the body of the function we return the callback with the paramaters we created a and b. 

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

function add(a,b) {
  return a + b;
}

function multiply(a,b) {
  return a * b;
}

function greeting(first, last) {
  return `Hello ${first} ${last}, nice to meet you!`
}

//created 3 functions for the consume callback which are add, multiply, and greeting. 
//function add accepts two parameters and returns the sum of two numbers
//function multiply accepts two parameters and returns the product of two numbers
//function greeting, accepts two parameters, first and last. it returns a sentence. we use backticks to return the first and last parameters using templet literals. 

/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2,2,add)) // 4
console.log(consume(10,16,multiply)) // 160
console.log(consume("Mary","Poppins", greeting))// Hello Mary Poppins, nice to meet you!

//we logged all three functions. first we called consume with our two numbers and the callback add.
//2nd we logged consume with our two numbers and our callback multiply
//lastly we logged consume with our first and last names as strings. we then called our callback greeting.


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 


//`nestedfunction()` has access to internal because it's inside the outer functions scope chain.
// myfunction is the outer function and nestedfunction is insides it's scope chain


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();
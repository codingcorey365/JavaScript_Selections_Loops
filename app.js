console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

// Exercise 2 Section
 console.log("EXERCISE 2:\n==========\n");


// Getting Started
    
    // Fork and clone the Exercise Repo:
    
    // JavaScript Loops
    
    // Open your command line and navigate to your repos directory (if you do not have a repos folder, then you can use mkdir repos to create one)
    
    // Use this template repository to start a new project in your repos folder: git clone <repo_name>
    
    // cd repo_name to navigate into your new repo directory
    
    // Start Visual Studio Code and select 'Open Folder'. Then select repo_name to open the folder in the editor (or just type code . in your terminal inside the repo directory)
    
    // Follow the instructions on the README.md file to complete exercises
    
    // Open the app.js file to get started

// Exercise 1: Ignore Even
        
    // In this exercise, you will be counting from 1 - 100. For each odd number, you will print the number to the console. If the number is even, do nothing.

        // Create a for loop that evaluates numbers from 1 to 100.
        
        // Inside the loop body, write an if/else selection statement that checks whether a number is odd

        // If the number is odd, then print the number to the console, otherwise do nothing and continue to the next number

        // for(let i = 1; i <= 100; i++){
        //     if(i % 2 != 0)
        //     {
        //         console.log(i);
        //     }
        // }
// Exercise 2: FIZZBUZZ
    
    // FIZZBUZZ is a very common coding interview problem. Below are the instructions to solving the problem:

        // Create a for loop that evaluates numbers from 1 to 100 like the problem above.
      
        // Write a if/else selection statement inside the body of the the loop that checks the following:
      
        // If the number is divisible by 3, then console.log 'FIZZ'
      
        // If the number is divisible by 5, then console.log 'BUZZ'
      
        // If the number is divisible by both 3 and 5, then console.log 'FIZZBUZZ'
      
        // Ex: 15 would print 'FIZZBUZZ', 33 would print 'FIZZ', and 35 would print 'BUZZ'
        // for(let i = 1; i <= 100; i++){
        //     if(i % 3 == 0 && i % 5 != 0)
        //     {
        //         console.log(i);
        //         console.log("FIZZ");
        //     }

        //     if(i % 5 == 0 && i % 3 != 0)
        //         {
        //             console.log(i);
        //             console.log("BUZZ");
        //         }
            
        //     if(i % 3 == 0 && i % 5 == 0)
        //         {
        //             console.log(i);
        //             console.log("FIZZBUZZ");
        //         }    
        // }

// Exercise 3: Repeat with While and Do/While

    // For exercise 3, repeat both exercise 1 and 2 as while and do/while loop solutions.
        // WHILE LOOP

        // let x = 1;
        // while(x<=100){
        //     if(i % 3 == 0 && i % 5 != 0)
        //         {
        //             console.log(i);
        //             console.log("FIZZ");
        //         }
    
        //         if(i % 5 == 0 && i % 3 != 0)
        //             {
        //                 console.log(i);
        //                 console.log("BUZZ");
        //             }
                
        //         if(i % 3 == 0 && i % 5 == 0)
        //             {
        //                 console.log(i);
        //                 console.log("FIZZBUZZ");
        //             }  
        // }

        // DO WHILE LOOP

        // let x = 1;
        // do {
        //     if(i % 3 == 0 && i % 5 != 0)
        //         {
        //             console.log(i);
        //             console.log("FIZZ");
        //         }
    
        //         if(i % 5 == 0 && i % 3 != 0)
        //             {
        //                 console.log(i);
        //                 console.log("BUZZ");
        //             }
                
        //         if(i % 3 == 0 && i % 5 == 0)
        //             {
        //                 console.log(i);
        //                 console.log("FIZZBUZZ");
        //             }
        // } while (x<=100);

// Exercise 4: Find Value

    // In this exercise, you will iterate from 1 to n. 
    
    // If you iterate over a given value, then break out the loop and print "Found value!". 
    
    // If you do not find the value in the given range, print "Did not find value".

// Start with the following code:
    
    // let numberToFind = Math.round((Math.random() * 500)); 
    // creates a random number between 0 and 500

    // let randomNumber = Math.round(Math.random() * (500 - 100) + 100); 
    // creates a random number between 100 and 500

    // Create a for loop that iterates from 0 to n

    // If your current iteration is equal to value, then print "Found value!", and break out of the loop

    // If you do not ever find the value and break out of the loop, then after the loop is finished, print "Did not find value"

        // for(let i = 0; i<= randomNumber; i++){
        //     // random = 161
        //     // numToFind = 436
        //     if (i == numberToFind) {
        //         console.log(`Found ${numberToFind}!`);
        //         break;
        //     }
        //     // random = 161
        //     // numToFind = 436
        //     // 161 = 161
        //     if(i==randomNumber){
        //         console.log(`Did not find ${numberToFind} within 1 - ${randomNumber}!`);
        //     }
        // }
        


// Bonus: Exercise 5: Customized FIZZBUZZ

// We already completed the FIZZBUZZ challenge. Now repeat the logic for the FIZZBUZZ challege with values provided in variables.

// Start with the following code:

    let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10

    let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10

    let start = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10

    let end = Math.round(Math.random() * (1000 - 100) + 100); // creates a random number between 100 and 1000

    // Re-implement exercise 2, 
    // Use start as the initial value for i, 
    // End as the range limit in i <= end, 
    // And fizzDivisor and buzzDivisor as the dependent values
    // To determine "FIZZ" and "BUZZ" print messages.

    console.log(`${fizzDivisor} is the FIZZ divisor, and ${buzzDivisor} is the BUZZ divisor`)

    for( i = start; i <= end; i++ ){
        let output = "";

        if(i % fizzDivisor == 0){
            output += "Fizz"
        }

        if(i % buzzDivisor == 0){
            output += "Buzz"
        }

        console.log(`${i} ${output}`);
            console.log(`number 1: ${Math.round(3.2)}`);
            console.log(`number 2: ${Math.round(3.0)}`);
            console.log(`number 3: ${Math.round(3.9)}`);
            console.log(`number 4: ${Math.round(3.499999999999999999)}`);
            console.log(`number 4 test: ${Math.round(3.499999999999999)}`);
            console.log(`number 5: ${Math.round(3.5)}`);
            console.log(`number 6: ${Math.round(3.6)}`);
    }

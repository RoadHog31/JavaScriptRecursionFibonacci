//Using recursive functions (Example):

// Suppose that you need to develop a function that counts down from a specified number to 1.

// For example, to count down from 5 to 1:


function countDown(number) {

    console.log(number);

    let nextNumber = number - 1;

    // In each iteration, the number value is decreased by 1 and the function countDown() is called until the number is positive.
    //  Here, newNumber > 0 is the base condition.

    //This is the base condition or level. 
    if (nextNumber > 0) {
        
        //Recursion function calls itself.
        // When the number reaches 0, the base condition is met, and the function is not called anymore. Otherwise, it will call itself indefinitely.
        countDown(nextNumber); 
        
    } 
    
}

countDown(10);

// One practical use case of recursion is to read the contents of a directory recursively where the directory can contain other directories.

// Recursion sometimes makes good neat but has some downsides on memory.
// Only use recursion when necessary.




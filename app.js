/*
Coding challenge #15

Create a function that will find the
nth Fibonacci number using recursion.

Reminder:
F(0) = 0
F(1) = 1
F(n) = F(n-1) + F(n-2)

*/

function findFibonacci(nth) {
    
    if (nth === 0)
        return 0; //base case
    
    if (nth === 1) 
        return 1  //base case
        
    
    return findFibonacci(nth - 1) + findFibonacci(nth - 2);  //recursive case

}


console.log(findFibonacci(10));
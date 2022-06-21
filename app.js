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
        return false;
    
    if (nth === 2) 
        return false
        
    
    return findFibonacci(nth - 1) + findFibonacci(nth - 2);

}


console.log(findFibonacci(10));
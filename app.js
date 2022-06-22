/*
Coding challenge #15

Create a function that will find the
nth Fibonacci number using recursion.

Reminder:
F(0) = 0
F(1) = 1
F(n) = F(n-1) + F(n-2)

In mathematics, the Fibonacci numbers, commonly denoted Fₙ, form a sequence, the Fibonacci sequence, in which each number is the sum of the two preceding ones. The sequence commonly starts from 0 and 1, although some authors omit the initial terms and start the sequence from 1 and 1 or from 1 and 2.

What are the first 10 Fibonacci numbers?
The list of first 20 terms in the Fibonacci Sequence is: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181.
*/

function findFibonacci(nth) {
    
    if (nth === 0)
        return 0; //base case
    
    if (nth === 1) 
        return 1  //base case
        
    
    return findFibonacci(nth - 1) + findFibonacci(nth - 2);  //recursive case

}


console.log(findFibonacci(10)); //finds the 10th number in the finbonacci sequence. Starts at 0. 
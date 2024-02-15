[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/E1vcEWuv)
# Divide and Conquer Sum

In the lectures, we've covered merge sort, which uses a divide-and-conquer
approach to sort an array of values. There are many more algorithms that take
such an approach. Implement a function that computes the sum of an array of
integers using divide and conquer, using the template in `code.js`. Test your
new function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

The recursive calls sum up the numbers in the base case, and "merges" the sums
of the recursive calls otherwise. For example, the return value for the array `a
= [1,5,-1,4]` is `9`.

To make it a bit more interesting, instead of splitting into two sub-arrays like
in merge sort, I want you to split into *three* sub-arrays at each divide step.

Hint: Like in the implementation of merge sort, you may need a helper function
that does the actual recursion.

## Runtime Analysis

What is the runtime of the algorithm that you implemented? Provide a recurrence
relation for $T(n)$ as we did for merge sort (you can ignore constant factors)
and solve it as we did in the lectures. Give the final $\Theta$ complexity.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

## Recurrance Relation 
- we start with T(n) as the function of time it takes for the problem to be solved with 'n' elements.
- The divideAndConquerSum Function
  This funstion splits and array into three roughly equal sized sub-arrays. The base cases are when the array is empty or only have one element.
  1. Base Case:
     - $\ T(0) = 1 $
     - $\ T(1) = 1 $
  2. Recursive Case:
     - This is when the input array has a length greater than one.
     - The function makes 3 recursive calls on the array divided into 3 roughly same sized sub-arrays that are size n/3.
     - This will give us $\ T(n) = 3 \cdot T \left(\frac{n}{3}\right) + c $
         - The three infront of T(n/3) comes form the recusrive calls made.
         - The 'n/3' comes from the size of the array which the recursive calls are made on.
         - and the 'c' is the constant time it takes for the array to be split and summation.

## Solving the Recurraence Relation 
- $\ T(n) = 3 \cdot T\left(\frac{n}{3}\right) + c $
- we then expand the recurrence realtion.
- $\ T\left(\frac{n}{3}\right) = 3\cdot \left(3\cdot T \left(\frac{n}{9}\right) + c\right) + c $
- this give us.
- $\ T \left(\frac{n}{3}\right) = 3^{2} \cdot T\left(\frac{n}{9}\right) + 3c + c $
- We need to continue through iterations to determine a pattern.
- $\ T \left(\frac{n}{9}\right) = 3^{3} \cdot T\left(\frac{n}{27}\right) + 3^{2}c + 3c + c $
- This give us a pattern
- $\ T(n) = 3^{k} \cdot T(\frac{n}{3^{k}}) + c\cdot \sum_{i=0}^{k-1} 3^i $
- Now we can find a value for k to make $\ \frac{n}{3^{k}} = 1 $
- This will give us $\ k = \log_3 n $
- Now we can substitute this value back into the equation.
- $\ T \left(n\right) = 3^{\log_3 n} \cdot T \left(1\right) + c\cdot \sum_{i=0}^{\log_3 n-1} 3^{i} $
- Now the sum is a geometric series.
- Which will give us $\ \frac{n - 1}{2} $
- Now we have $\ T \left(n\right) = n\cdot T\left(1\right) + c \cdot \frac{n - 1}{2} $

## Runtime Analysis
- Because of the base case we know that $\ T \left(1\right) is constant.
- We can see that for  $\ \frac {n -1}{2} $ the domanant term is n which is linear.
- So know we have $\ T \left(n\right) \in \Theta\left(n\right) $  



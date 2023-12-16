// Question 1: Common programming principles

// DRY - Don't Repeat Yourself: Avoid duplicating code by reusing parts of the code.
// KISS - Keep It Simple, Stupid: Make things as simple as possible, don't overcomplicate.
// Avoid creating a YAGNI (You Aren’t Gonna Need It): Don't add functionality until it's necessary.
// Do the simplest thing that could possibly work: Start with the easiest solution, then improve if needed.
// Don't make me think: Code should be easily understandable at a glance.
// Write code for the maintainer: Code should be easy for someone else to read and maintain.
// Single responsibility principle: A function or class should only have one reason to change.
// Avoid premature optimization: Don't optimize too early, focus on good code first.
// Separation of concerns: Different parts of the code should handle different tasks and not overlap.

// The principle that surprises me the most is KISS, as it's easy to get caught up in making complex solutions.
// The principle currently giving me the most struggle is Avoid premature optimization, as I tend to optimize too early.

// Question 2: Commenting Code

// The function f calculates the sum of even Fibonacci numbers up to a limit l.
const f = l => {
    let es = 0, p = 0, c = 1, n = 0 // Initialize sum of even numbers, previous number, current number, and next number
    while (c <= l) { // Loop until the current number exceeds the limit
      n = c + p; // Calculate the next number 
      [c, p] = [n, c] // Update numbers
      es += (c % 2 === 0) ? c : 0 // Add current number to sum if it's even
    }
    return es // Return the sum of even numbers
  }
  
  console.log(f(55)) // Example usage of the function
  
  // A more semantic name for this function could be sumEvenFibonacci.
  // If expanding the functionality, I would prefer to start with f2 due to its readability.
  // Removing the semi-colon from the shorter code does not cause any issues, indicating it's not necessary.
  
// src/app.js
function greet(name) {
  return `Hello, ${name}!`; // Use backticks for template literal
}

module.exports = greet; // Export the function

// If run directly, print output (useful for debugging)
if (require.main === module) {
  console.log(greet("World"));
}
function greet(name) {

return 'Hello, ${name}!';

}

module.exports = greet; // Ensure function is exporta // If run directly, print output (useful for debuggin

if (require.main === module) {

console.log(greet("World"));
}

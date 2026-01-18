// Intentional linting errors to test the workflow
const unusedVariable = "This variable is unused"; // Unused var, double quotes
function testFunction() {
  let missingSemicolon = "No semicolon here" // Missing semicolon
  console.log("Using double quotes instead of single") // Double quotes, console (warn)
}
testFunction() // Missing semicolon
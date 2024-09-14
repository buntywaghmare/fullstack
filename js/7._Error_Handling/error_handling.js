// Error Handling Examples

// Example 1: try...catch...finally
function processData(data) {
    try {
      if (typeof data !== 'string') {
        throw new TypeError('Data must be a string');
      }
      // Process the data (e.g., parse JSON)
      console.log('Processing data:', data);
    } catch (error) {
      console.error('Error:', error.message);
    } finally {
      console.log('Cleanup code runs regardless of error');
    }
  }
  
  console.log('Example 1: try...catch...finally');
  processData('valid string');   // Processing data: valid string
                                 // Cleanup code runs regardless of error
  
  processData(123);              // Error: Data must be a string
                                 // Cleanup code runs regardless of error
  
  console.log('\n');
  
  // Example 2: throw Statement
  function divide(a, b) {
    if (b === 0) {
      throw new Error('Division by zero is not allowed');
    }
    return a / b;
  }
  
  console.log('Example 2: throw Statement');
  try {
    console.log(divide(10, 2));   // Outputs: 5
    console.log(divide(10, 0));   // This will throw an error
  } catch (error) {
    console.error('Caught error:', error.message); // Outputs: Caught error: Division by zero is not allowed
  }
  
  console.log('\n');
  
  // Example 3: Custom Error Object
  class CustomError extends Error {
    constructor(message) {
      super(message);
      this.name = 'CustomError';
    }
  }
  
  function riskyOperation() {
    throw new CustomError('Something went wrong in riskyOperation');
  }
  
  console.log('Example 3: Custom Error Object');
  try {
    riskyOperation();  // This will throw a CustomError
  } catch (error) {
    console.error(`${error.name}: ${error.message}`); // Outputs: CustomError: Something went wrong in riskyOperation
  }
  
  console.log('\n');
  
  // Example 4: Error Object Properties
  function causeError() {
    try {
      // Intentionally causing an error
      JSON.parse('invalid JSON');
    } catch (error) {
      console.log('Error name:', error.name);        // Outputs: SyntaxError
      console.log('Error message:', error.message);  // Outputs: Unexpected token i in JSON at position 0
      console.log('Error stack:', error.stack);      // Outputs the stack trace
    }
  }
  
  console.log('Example 4: Error Object Properties');
  causeError();
  
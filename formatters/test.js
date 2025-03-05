// Unused variable (should not trigger an error because "no-unused-vars" is set to 0)
const unusedVar = 42;


// Incorrect indentation (should trigger an error if not using 2 spaces)
function testFunction() {
  console.log('Incorrect indentation!'); // Extra spaces before this line should be flagged
}

// Space inside parentheses (should trigger an error due to "space-in-parens": ["error", "never"])
const sum = 5 + 10;

// Missing arrow function spacing (should trigger an error due to "arrow-spacing")
const double = (x) => x * 2;

// Switch case indentation (should trigger an error if indentation is incorrect)
function checkNumber(num) {
  switch (num) {
      case 1:
        console.log('One');
        break;
      default:
        console.log('Other'); // Incorrect indentation should be flagged
  }
}

// Run a test function
testFunction();
console.log(sum);
console.log(double(4));
checkNumber(2);

let x = "y";
let CONFIG = {};

// async function foo() {
//   awaitdoSomething();
// }

// bar(async () => {
//   doSomething();
// });

// function* foo1() {
//   return 10;
// }

// function foo3() {}

// const bar = function() {};
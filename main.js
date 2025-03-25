/**
 * BUSINESS LOGIC!
 * Business logic goes here! try to copy thr structure of any plain-english written out logic/processes in code
 */

function add(a, b) {
    return a + b;
}

// TEST! ignore lol
function test(fnResult, description, expected) {
    if (fnResult === expected)
        console.log("Test passed!", description)
    else
        console.log("TEST FAILED!", description)
}

/**
 * ASSERTION/REAL LOGIC! Put in values here and the expected output to verify your business logic is correct!
 */
test(add(1,2), "When adding 1+2, it should return 3", 3)
function divide(numerator, denominator) {
    if (typeof numerator !== "number" || typeof denominator !== "number")
        throw new Error("All arguments should be of type number.");
    if (denominator === 0)
        throw new Error("Dividing by zero is bad for your health.");

    return numerator / denominator;
}

try {
    divide(4, 2);
} catch (error) {
    console.error("An error occurred:", error.message);
} finally {
    console.log("test case 1 - work completed.");
}

try {
    divide(2, 4);
} catch (error) {
    console.error("An error occurred:", error.message);
} finally {
    console.log("test case 2 - work completed.");
}

try {
    divide(5, 0);
} catch (error) {
    console.error("An error occurred:", error.message);
} finally {
    console.log("test case 3 - work completed.");
}

try {
    divide(0, 17);
} catch (error) {
    console.error("An error occurred:", error.message);
} finally {
    console.log("test case 4 - work completed.");
}

try {
    divide(6, true);
} catch (error) {
    console.error("An error occurred:", error.message);
} finally {
    console.log("test case 5 - work completed.");
}

try {
    divide(false, 0);
} catch (error) {
    console.error("An error occurred:", error.message);
} finally {
    console.log("test case 6 - work completed.");
}
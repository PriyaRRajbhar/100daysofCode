// consoleExample.js - Your Complete Console Demo

console.log("=== Console Methods Demonstration ===");
console.log("Starting our debugging journey!\n");

// 1. BASIC LOGGING with console.log()
console.log("1. Basic Logging Examples:");
console.log("Simple message");
console.log("User name:", "John Doe");
console.log("Multiple values:", 42, true, "hello");

const user = { name: "Alice", age: 30, city: "Delhi" };
console.log("User object:", user);
console.log(); // Empty line for spacing

// 2. ERROR HANDLING with console.error()
console.log("2. Error Handling Examples:");

function riskyOperation(value) {
    if (!value) {
        console.error("Error: No value provided!");
        return false;
    }
    
    if (typeof value !== 'number') {
        console.error("Error: Expected number, got", typeof value);
        return false;
    }
    
    console.log("Operation successful with value:", value);
    return true;
}

// Test the function
riskyOperation(); // Will show error
riskyOperation("not a number"); // Will show error
riskyOperation(42); // Will succeed
console.log();

// 3. WARNINGS with console.warn()
console.log("3. Warning Examples:");

function checkPassword(password) {
    if (password.length < 8) {
        console.warn("Warning: Password is too short!");
    }
    
    if (!/[A-Z]/.test(password)) {
        console.warn("Warning: Password should contain uppercase letters!");
    }
    
    if (!/\d/.test(password)) {
        console.warn("Warning: Password should contain numbers!");
    }
    
    console.log("Password check completed");
}

checkPassword("weak"); // Will show multiple warnings
checkPassword("StrongPass123"); // Will pass
console.log();

// 4. PERFORMANCE TIMING with console.time() and console.timeEnd()
console.log("4. Performance Timing Examples:");

// Time a simple loop
console.time('loop-performance');
let sum = 0;
for (let i = 0; i < 100000; i++) {
    sum += i;
}
console.timeEnd('loop-performance');
console.log("Sum calculated:", sum);

// Time an async operation
console.time('async-operation');
setTimeout(() => {
    console.timeEnd('async-operation');
    console.log("Async operation completed");
}, 1000);

// Time multiple operations
console.time('array-operations');
const numbers = Array.from({length: 10000}, (_, i) => i);
const evenNumbers = numbers.filter(n => n % 2 === 0);
const doubled = evenNumbers.map(n => n * 2);
console.timeEnd('array-operations');
console.log("Array operations completed, result length:", doubled.length);
console.log();

// 5. STACK TRACING with console.trace()
console.log("5. Stack Trace Examples:");

function outerFunction() {
    console.log("In outer function");
    middleFunction();
}

function middleFunction() {
    console.log("In middle function");
    innerFunction();
}

function innerFunction() {
    console.log("In inner function");
    console.trace("Trace from inner function:");
}

outerFunction();
console.log();

// 6. REAL-WORLD DEBUGGING SCENARIO
console.log("6. Real-World Debugging Scenario:");

class ShoppingCart {
    constructor() {
        this.items = [];
        this.total = 0;
        console.log("Shopping cart created");
    }
    
    addItem(item) {
        console.log("Adding item to cart:", item.name);
        
        if (!item.price || item.price <= 0) {
            console.error("Invalid item price:", item.price);
            return false;
        }
        
        if (item.price > 1000) {
            console.warn("Warning: Expensive item added:", item.name, "$" + item.price);
        }
        
        console.time('add-item-operation');
        this.items.push(item);
        this.total += item.price;
        console.timeEnd('add-item-operation');
        
        console.log("Cart total now:", "$" + this.total);
        return true;
    }
    
    checkout() {
        console.log("Starting checkout process...");
        
        if (this.items.length === 0) {
            console.error("Cannot checkout: Cart is empty!");
            return false;
        }
        
        console.time('checkout-process');
        
        // Simulate checkout process
        console.log("Processing", this.items.length, "items");
        console.log("Final total:", "$" + this.total);
        
        // Simulate potential issue
        if (this.total > 5000) {
            console.warn("High-value transaction, additional verification needed");
            console.trace("High-value checkout trace:");
        }
        
        console.timeEnd('checkout-process');
        console.log("Checkout completed successfully!");
        return true;
    }
}

// Test the shopping cart
const cart = new ShoppingCart();

cart.addItem({ name: "Laptop", price: 50000 });
cart.addItem({ name: "Mouse", price: 500 });
cart.addItem({ name: "Invalid Item", price: -100 }); // Will cause error

cart.checkout();

console.log("\n=== Console Demo Completed ===");

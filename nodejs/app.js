// const path = require('path'); // Built-in helper for paths

// console.log('My current folder path:', __dirname);
// // Output: Something like /Users/yourname/project

// // Example: Build a path to a file in the same folder
// const fullPath = path.join(__dirname, 'config.txt');
// console.log('Path to config.txt:', fullPath);
// // Output: /Users/yourname/project/config.txt

const path = require('path');

console.log('My full file path:', __filename);
// Output: /Users/yourname/project/app.js

// Example: Get just the filename
const fileName = path.basename(__filename);
console.log('Just the filename:', fileName);
// Output: app.js

console.log('Environment variable:', process.env.MY_VAR);
// Output: hello (if you set it)

// Example: Use it for config
const appMode = process.env.NODE_ENV || 'development'; // Default if not set
console.log('App running in mode:', appMode);
// Output: development

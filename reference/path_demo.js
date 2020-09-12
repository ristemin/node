const path = require('path');

// File extension 

console.log(path.extname(__filename));

// Create path object

console.log(path.parse(__filename));

// Concatenate paths

console.log(path.join(__dirname, 'test', 'hello.html'));
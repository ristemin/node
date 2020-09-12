const url = require('url');

const myUrl = new URL('http://mywebsite.com:8080/hello.html?id=100&status=active');

// Serialized URL

console.log(myUrl.href);
console.log(myUrl.toString());

// Pathname

console.log(myUrl.pathname);

// Hostname

console.log(myUrl.hostname);

// Params object

console.log(myUrl.searchParams);
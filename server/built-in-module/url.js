// const { URL } = require('url');

// const myUrl = new URL('https://example.com:8080/path/name?query=test#hash');


// // console.log(myUrl.hash);      // Output: #hash

// // console.log("host:", myUrl.host);      // Output: example.com:8080
// // console.log("hostname:", myUrl.hostname);  // Output: example.com

// console.log("href:", myUrl.href);      // Output: https://example.com:8080/path/name?query=test#hash
// console.log("pathname:", myUrl.pathname);  // Output: /path/name
// console.log("origin:", myUrl.origin);    // Output: https://example.com:8080
// console.log("protocol:", myUrl.protocol);  // Output: https:
// console.log("port:", myUrl.port);      // Output: 8080
// console.log("search:", myUrl.search);// Output: ?query=test
// console.log("searchParams:", myUrl.searchParams);// Output: URLSearchParams { 'query' => 'test' }

// // Adding a new query parameter
// myUrl.searchParams.append('newParam', 'newValue');
// console.log(myUrl.href); // Output: https://example.com:8080/path/name?query=test&newParam=newValue#hash    
// // Modifying an existing query parameter
// myUrl.searchParams.set('query', 'updatedValue');
// console.log(myUrl.href); // Output: https://example.com:8080/path/name?query=updatedValue&newParam=newValue#hash
// // Deleting a query parameter
// myUrl.searchParams.delete('newParam');
// console.log(myUrl.href); // Output: https://example.com:8080/path/name?query=updatedValue#hash
// // Checking if a query parameter exists
// console.log(myUrl.searchParams.has('query')); // Output: true
// console.log(myUrl.searchParams.has('newParam')); // Output: false
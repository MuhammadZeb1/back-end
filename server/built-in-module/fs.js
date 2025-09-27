const fs = require('fs');


// fs.writeFileSync(path, data); // Sync
// fs.writeFile(path, data, callback); // Async

// Example usage of fs module
// writeFile synchronously
// fs.writeFileSync('example.txt', 'Hello, World!',"utf-8");

// writeFile asynchronously
// fs.writeFile('example_async.txt', 'Hello, Async World!', (err) => {
//     if (err) throw err;
//     console.log('File has been saved!');
// });

// fs.readFileSync(path, encoding); // Sync
// fs.readFile(path, encoding, callback); // Async

// readFile synchronously
// const data = fs.readFileSync('example.txt', 'utf-8');
// console.log(data);

// readFile asynchronously
// fs.readFile('example.txt', 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });


// fs.appendFileSync(path, data); // Sync
// fs.appendFile(path, data, callback); // Async

// appendFile synchronously
// fs.appendFileSync('example.txt', '\nAppended text!', "utf-8");

// appendFile asynchronously
// fs.appendFile('example.txt', '\nAppended async text!', (err) => {
//     if (err) throw err;
//     console.log('The "data to append" was appended to file!');
// });

// fs.unlinkSync(path); // Sync
// fs.unlink(path, callback); // Async
// deleteFile synchronously
// fs.unlinkSync('example.txt');

// deleteFile asynchronously
// fs.unlink('example_async.txt', (err) => {
//     if (err) throw err;
//     console.log('File deleted!');
// });

// fs.renameSync(oldPath, newPath); // Sync
// fs.rename(oldPath, newPath, callback); // Async

// renameFile synchronously
// fs.renameSync('example.txt', 'renamed_example.txt');

// renameFile asynchronously
// fs.rename('example_async.txt', 'renamed_example_async.txt', (err) => {
//     if (err) throw err;
//     console.log('File renamed!');
// });

// fs.statSync(path); // Sync
// fs.stat(path, callback); // Async


// getFileStats synchronously
// const stats = fs.statSync('renamed_example.txt');
// console.log(stats);

// getFileStats asynchronously
// fs.stat('renamed_example.txt', (err, stats) => {
//     if (err) throw err;
//     console.log(stats);
// });

// fs.createReadStream(path, options);
// fs.createWriteStream(path, options);

// createReadStream example
// const readStream = fs.createReadStream('renamed_example.txt', { encoding: 'utf-8' });
// readStream.on('data', (chunk) => {
//     console.log(chunk);
// });
// readStream.on('end', () => {
//     console.log('File reading completed');
// });


// fs.mkdirSync(path); // Sync
// fs.mkdir(path, callback); // Async

// createDirectory synchronously
// fs.mkdirSync('new_directory');

// createDirectory asynchronously
// fs.mkdir('new_directory_async', (err) => {
//     if (err) throw err;
//     console.log('Directory created!');
// });

// fs.readdirSync(path); // Sync
// fs.readdir(path, callback); // Async

// readDirectory synchronously
// const files = fs.readdirSync('new_directory');
// console.log(files);

// readDirectory asynchronously
// fs.readdir('new_directory', (err, files) => {
//     if (err) throw err;
//     console.log(files);
// });
// deleteDirectory
// fs.rmdirSync(path, options); // Sync
// fs.rmdir(path, options, callback); // Async

// remove directory synchronously
// fs.rmdirSync("new_directory",{recursive:true});

// remove directory asynchronously
// fs.rmdir("new_directory_async",{recursive:true}, (err) => {
//     if (err) throw err;
//     console.log('Directory deleted!');
// });




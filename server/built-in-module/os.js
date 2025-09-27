// Import the built-in 'os' module
const os = require("os");

// os.type(): Returns the operating system name
console.log("os.type():", os.type()); // Example: 'Linux', 'Darwin', 'Windows_NT'

// os.platform(): Returns the OS platform
console.log("os.platform():", os.platform()); // Example: 'win32', 'linux', 'darwin'

// os.arch(): Returns the CPU architecture
console.log("os.arch():", os.arch()); // Example: 'x64', 'arm'

// os.cpus(): Returns details about each CPU core
console.log("os.cpus():", os.cpus()); // Example: array of CPU objects

// os.totalmem(): Returns total system memory in bytes
console.log("os.totalmem():", os.totalmem()); // Example: 17179869184

// os.freemem(): Returns free system memory in bytes
console.log("os.freemem():", os.freemem()); // Example: 8232960000

// os.uptime(): Returns system uptime in seconds
console.log("os.uptime():", os.uptime()); // Example: 125600 (seconds)

// os.hostname(): Returns the hostname of the machine
console.log("os.hostname():", os.hostname()); // Example: 'DESKTOP-1234'

// os.networkInterfaces(): Returns details of network interfaces
console.log("os.networkInterfaces():", os.networkInterfaces());

// os.userInfo(): Returns information about the current user
console.log("os.userInfo():", os.userInfo());

// os.homedir(): Returns the home directory of the current user
console.log("os.homedir():", os.homedir()); // Example: 'C:\\Users\\Zeb'

// os.tmpdir(): Returns the default temporary files directory
console.log("os.tmpdir():", os.tmpdir()); // Example: 'C:\\Users\\Zeb\\AppData\\Local\\Temp'

// os.release(): Returns the operating system version/release
console.log("os.release():", os.release()); // Example: '10.0.22621'

// os.endianness(): Returns CPU endianness
console.log("os.endianness():", os.endianness()); // Example: 'LE'

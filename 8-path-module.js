const path = require("path")
// separatore tra i path
console.log(path.sep);

const filePath = path.join("/content","subfolder","test.txt");
console.log(filePath);

const base =path.basename(filePath);
console.log(base);


// path assoluto

const absolute = path.resolve(__dirname,"content","subfolder","test.txt");
console.log(absolute);
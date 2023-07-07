const path = require(`path`);

console.log(path.sep);

const filePath = path.join(`/folders`,`folder1`,`folder2`,`text.html`);
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, `folders`,`folder1`,`folder2`,`text.html`);
console.log(absolute);
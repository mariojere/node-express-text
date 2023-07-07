const {readFileSync,writeFileSync} = require(`fs`);

const first = readFileSync(`./content/first.txt`,`utf8`);
const test = readFileSync(`./content/subfolder/test.txt`,`utf8`);

console.log(first,test);

writeFileSync(
  `./content/result-sync.txt`,`im the new guy on the block ${first} ${test} looks like its the ${2+1} of us.`,
  {flag:`a`}
)

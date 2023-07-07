const os = require(`os`);

//user info
const user = os.userInfo();
console.log(user)

//method returns the system uptime(how long its been running)in seconds
console.log(`The system Uptime is ${os.uptime()}s`)

const currentOS ={
  name: os.type(),
  release: os.release(),
  totaMem: os.totalmem(),
  freeMem: os.freemem(),
}

console.log(currentOS);
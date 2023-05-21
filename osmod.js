const os = require("os");

// info about current user

const user = os.userInfo();
console.log(user);
// uptime
const uptime = os.uptime();
console.log(uptime + " seconds");

const currentOS = {
  name: os.type(),
  relaese: os.release(),
  totalmem: os.totalmem(),
  freemem: os.freemem(),
};
console.log(currentOS);

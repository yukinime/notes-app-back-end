const crypto = require('crypto');

const generateKey = () => {
  return crypto.randomBytes(32).toString('base64');
};

console.log(generateKey());

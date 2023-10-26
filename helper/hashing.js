const bcrypt = require('bcrypt');

async function hashPassword(password) {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
}

async function comparePassword(enteredPassword, storedHashedPassword) {
  return bcrypt.compare(enteredPassword, storedHashedPassword);
}

module.exports = {
  hashPassword,
  comparePassword,
};

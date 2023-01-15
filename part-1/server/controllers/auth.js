const bcrypt = require("bcryptjs");
const users = [];

module.exports = {
  login: (req, res) => {
    console.log("Logging In User");
    const { username, password } = req.body;
    for (let i = 0; i < users.length; i++) {
      if (users[i].username === username) {
        const correctPassword = bcrypt.compareSync(password, users[i].pwHash);
        if (correctPassword) {
          let userToReturn = { ...users[i] };
          delete userToReturn.pwHash;
          res.status(200).send(userToReturn);
          console.log("Sign in completed");
          return;
        }
      }
    }
    res.status(400).send("User not found.");
  },
  register: (req, res) => {
    console.log("Registering User");
    const { username, email, firstName, lastName, password } = req.body;
    const salt = bcrypt.genSaltSync(1);
    const pwHash = bcrypt.hashSync(password, salt);
    let userObj = {
      username,
      email,
      firstName,
      lastName,
      pwHash,
    };
    users.push(userObj);
    let userToReturn = { ...userObj };
    delete userToReturn.pwHash;
    res.status(200).send(userToReturn);
    console.log("Registration completed");
  },
};

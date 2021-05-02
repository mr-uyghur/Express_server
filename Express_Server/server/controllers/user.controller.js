const User = require("../models/user.model");

module.exports.findAllUsers = (req, res) => {
  User.find()
    .then(allDaUsers => res.json({ users: allDaUsers }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};


module.exports.createNewUser = (req, res) =>{
  // create user information and data with whatever value passed into req.body
  User.create(req.body)
  .then(result => res.json({ user: result }))
  .catch(err => res.status(400).json({ err}))
}



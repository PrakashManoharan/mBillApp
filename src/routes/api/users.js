const express = require(`express`);
const router = express.Router();
const gravatar = require(`gravatar`);
const bcrypt = require(`bcryptjs`);
const keys = require(`../../../config/keys`);

// Load user model
const User = require(`../../../models/User`);

// @route     GET api/users/test
// #desc      Tests users route
// @access    Public

router.get(`/test`, (req, res) => res.json({ msg: `User works` }));

// @route     GET api/users/register
// #desc      Register user
// @access    Public

router.post(`/register`, (req, res) => {
  User.findOne({ email: req.body.email }).then(user => {
    console.log(`Hi User`);
    if (user) {
      console.log(`Hello user!`);
      return res.status(400).json({ email: `Email already exist` });
    } else {
      console.log(`else new User`);
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        avatar
      });

      // bcrypting the password
      /*       bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json())
            .catch(err => console.log(err));
        });
      }); */
    }
  });
});

module.exports = router;

const User = require("./user.dao");

exports.createUser = (req, res, next) => {
  if (
    req.body.username &&
    req.body.password &&
    req.body.passwordConf
  ) {
    let user = {
      username: req.body.username,
      password: req.body.password,
    };

    User.create(user, (err, user) => {
      if (err) {
        res.json({
          error: err,
        });
      } else {
        res.json({
          message: "User created successfully",
        });
      }
    });
  }
};

exports.getUsers = (req, res, next) => {
  User.get({}, (err, users) => {
    if (err) {
      res.json({
        error: err,
      });
    } else {
      res.json({
        User: User,
      });
    }
  });
};

exports.getUser = (req, res, next) => {
  User.get({ id: req.params.id }, (err, users) => {
    if (err) {
      res.json({
        error: err,
      });
    } else {
      res.json({
        User: User,
      });
    }
  });
};

exports.updateUser = function (req, res, next) {
  let user = {
    name: req.body.name,
    description: req.body.description,
  };
  User.update({ _id: req.params.id }, user, function (err, user) {
    if (err) {
      res.json({
        error: err,
      });
    }
    res.json({
      message: "User updated successfully",
    });
  });
};

exports.removeUser = function (req, res, next) {
  User.delete({ _id: req.params.id }, function (err, user) {
    if (err) {
      res.json({
        error: err,
      });
    }
    res.json({
      message: "User deleted successfully",
    });
  });
};

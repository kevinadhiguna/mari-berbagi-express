const User = require("./user.dao");

exports.createUser = (req, res, next) => {
  if (req.body.password !== req.body.passwordConf) {
    let err = new Error('Passwords do not match.');
    err.status = 400;
    res.json({
      error: err,
    });
    return next(err);
  }

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
      if (!err) {
        res.json({
          message: `User with ${user.username} created successfully`,
        });
      } else {
        err.status = 400;
        res.json({
          error: err,
        });
      }
    });
  }
};

exports.getUsers = (req, res, next) => {
  User.get({}, (err, users) => {
    if (!err) {
      res.json({
        User: users,
      });
    } else {
      res.json({
        error: err,
      });
    }
  });
};

exports.getUser = (req, res, next) => {
  User.get({ _id: req.params.id }, (err, user) => {
    if (!err) {
      res.json({
        User: User,
      });
    } else {
      res.json({
        error: err,
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

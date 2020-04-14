const User = require("./user.controller");

const routes = "/user";

module.exports = (router) => {
  router.get(routes + "/", User.getUsers);
  router.get(routes + "/:id", User.getUser);
  router.post(routes + "/", User.createUser);
  router.put(routes + "/:id", User.updateUser);
  router.delete(routes + "/:id", User.removeUser);
};

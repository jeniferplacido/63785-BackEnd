const Router = require('./router');
const jwt = require('jsonwebtoken');

class SessionRouter extends Router {
  init() {
    this.post('/', ['PUBLIC'], (req, res) => {
      let user = {
        email: req.body.email,
        role: req.body.role,
      };

      let token = jwt.sign(user, 'batatinha123')
      res.sendSuccess({ token });
    })

    this.get("/teste", ["ADMIN"], (req, res) => {
      res.sendSuccess("Eu sou Admin");
    });
  }
}

module.exports = SessionRouter;
const Router = require('./router');

class UserRouter extends Router {
  init() {
    this.get('/', (req, res) => {
      res.sendSuccess({ message: 'Users found', users: [] });
    })

    this.get('/:id', (req, res) => {
      const { id } = req.params;
      res.sendoUserError(`User with id ${id} not found`);
    })

    this.get('/:id/:name', (req, res) => {
      res.sendServerError('Rota não implementada');
    })
  }
}

module.exports = UserRouter;
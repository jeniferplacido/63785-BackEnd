const express = require('express');
const UserRouter = require('./routes/users.router');
const SessionRouter = require('./routes/session.router');

const app = express();
app.use(express.json());

const userRouter = new UserRouter();
const sessionRouter = new SessionRouter();

app.use('/users', userRouter.getRouter());
app.use('/login', sessionRouter.getRouter());

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
const express = require('express');
const UserRouter = require('./routes/users.router');

const app = express();

const userRouter = new UserRouter();

app.use('/users', userRouter.getRouter());

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
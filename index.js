const express = require('express');
const app = express();
const routerApi = require('./routes');
const port = 3000;

const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./middlewares/error.handler');

//parcel JSON
app.use(express.json());

routerApi(app);

//middleware Errors
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('listen en http://localhost:3000');
});

const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
const app = express();
const port = 3000;

const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./middlewares/error.handler');

//parcel JSON
app.use(express.json());

//Configuracion del CORS
const whiteList = ['http://127.0.0.1:5500', 'https://miDominio.com'];
const options = {
  origin: (origin, callback) => {
    if (whiteList.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  },
};
app.use(cors(options));

routerApi(app);

//middleware Errors
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('listen en http://localhost:3000');
});

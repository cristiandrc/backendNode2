const express = require('express');
const app = express();
const routerApi = require('./routes');

routerApi(app);

// app.get('/', (req, res) => {
//   res.send('hello world');
// });

// app.listen(port, () => {
//   console.log('listen en http://localhost:3000');
// });

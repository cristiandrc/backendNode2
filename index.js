const express = require('express');
const app = express();
const routerApi = require('./routes');
const port = 3000;

//middleware
app.use(express.json());

routerApi(app);

// app.get('/', (req, res) => {
//   res.send('hello world');
// });

app.listen(port, () => {
  console.log('listen en http://localhost:3000');
});

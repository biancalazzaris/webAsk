
const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.send('ask running');
});

app.get('/perguntar', (req, res) => {
    res.render('perguntar');
  });

app.listen(9000, () => console.log('app rodando: http://localhost:5000'));
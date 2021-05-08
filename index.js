const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(express.static('public'));


app.use(bodyParser.urlencoded( { extended: false }));
app.use(bodyParser.json());


app.get('/perguntar', (req, res) => {
  res.render('perguntar');
});

app.get('/', (req, res) => {
  res.render('index');
});



app.post('/salvarpergunta', (req, res) => {
  let topic = {
    title: req.params.titulo,
    message: req.params.message,
  };
  console.log(topic)
  res.send(`Formulário enviado para o servidor', ${topic}`);
});




  // iniciando nosso servidor
  app.listen(5000, (erro) => {
    if(erro) {
      console.log('Ops, ocorreu um erro ao iniciar o servidor.')
    } else {
      console.log('Servidor rodando no endereço: http://localhost:5000')
    }
  });
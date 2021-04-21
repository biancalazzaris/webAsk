const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded( { extended: true }));
app.use(bodyParser.json());


app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/novo', (req, res) => {
  res.render('new')
});

app.get('/listar', (req, res) => {
  res.render('list')
});

app.post('/salvar', (req, res) => {
    let title = req.body.titulo;
    let description = req.body.descricao;
    console.log(`Dados do formulario salvo: Titulo: ${title}  Descricao: ${description}`);

    res.send(`Dados do formulario salvo: Titulo: ${title}  Descricao: ${description}`)
});


  // iniciando nosso servidor
  app.listen(5000, (erro) => {
    if(erro) {
      console.log('Ops, ocorreu um erro ao iniciar o servidor.')
    } else {
      console.log('Servidor rodando no endereço: http://localhost:5000')
    }
  });
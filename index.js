
const express = require('express');
const app = express();

// responsavel por traduzir os dados enviados para uma estrutura que o JS reconheça
const bodyParser = require('body-parser');

// configurando o ejs para ser adotado no view do express como template engine
app.set('view engine', 'ejs');

app.use(express.static('public'));

//decodificando os dados submetidos pelo formulario
app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());

// rotas
app.get('/perguntar', (req, res) => {
    res.render('perguntar');
  });

app.get('/', (req, res) => {
  res.send('ask running');
});

//recebendo dados do form
app.post('/salvarpergunta', (req, res) => {
    let topic = {
      title: req.params.titulo, // campo do front-end
      message: req.params.message, // campo do front-end
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
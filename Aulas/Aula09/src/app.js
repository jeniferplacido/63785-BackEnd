const express = require ('express');

const handlebars = require ('express-handlebars');


const _dirname = require('./utils')

const app = express();


app.engine('handlebars', handlebars.engine())
app.set('views', _dirname + '/views')

app.set('view engine', 'handlebars')

app.use(express.static(_dirname + '/public'))


app.get('/', (req, res) => {
    console.log('Teste...')
    testUser = {
        nome: 'Jenifer',
        sobrenome: 'Placido'
    }
    res.render('index', testUser)
})

app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080')
})  
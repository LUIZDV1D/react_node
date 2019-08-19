const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();  


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'david',
    password: 'dadavi@12',
    database: 'david'   
})

    connection.connect(err => {
        if (err) {
            console.error('Unable to connect to the database:', err);
        } else {
            console.log('Connection has been established successfully.');
        }
    })

app.use(cors());

app.get('/', (req, res) => {
    res.send('Acesse o /dados para ver os dados')
});

app.get('/dados', (req, res) => {

    let SELECT_ALL_DADOS_QUERY = 'SELECT * FROM dados';

    connection.query(SELECT_ALL_DADOS_QUERY, (err, results) => {
        if (err) {
            return res.send(err)
        } else {
            return res.json({
                data: results
            })
        }
    })
    
});

app.listen(4000, () => {
    console.log('Dados server listening on port 4000');
});
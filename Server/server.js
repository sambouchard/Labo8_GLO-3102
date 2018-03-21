import Cookies from 'js-cookie'
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const corsOptions = {
    origin: '*',
    methods: ['GET', 'PUT', 'POST', 'PATCH', 'DELETE', 'UPDATE'],
    credentials: true
};

const port = process.env.PORT || 8081;


const app = express();
const users = [{username: 'sam', password: '1234'}, {username:'vaun' , password: 'orage'}];

app.use(bodyParser.json());
app.use(cors(corsOptions));

app.post('/login',function (req,res) {
    console.log('234');

});

app.listen(port, function() {
    console.log('Server listening.')
});






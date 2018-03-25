const express = require('express');
const path = require('path');
const cors = require('cors');
const corsOptions = {
    origin: '*',
    methods: ['GET', 'PUT', 'POST', 'PATCH', 'DELETE', 'UPDATE'],
    credentials: true
};

const port = process.env.PORT || 8080;



const users = [{username: 'sam', password: '1234'}, {username:'vaun' , password: 'orage'}];

const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(cors(corsOptions));

app.post('/login',function (req,res) {
    let usertoidentify = req.body.username;
    let passtoidentify = req.body.password;
    for(let i = 0; i < users.length; i++){
        if(usertoidentify == users[i].username && passtoidentify == users[i].password){
            console.log('ok')
        }
    }
});

app.listen(port, function() {
    console.log('Server listening.')
});







var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
//allow cors
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public')); //__dir and not _dir
var port = 8000; // you can use any port
let users = [{
    id: 1,
    email: 'joedoe@gmail.com',
    firstname: 'joe',
    lastname: 'doe',
    dob: '01-01-1990',
    profession: 'Designer'
},
{
    id: 2,
    email: 'jfox87@gmail.com',
    firstname: 'james',
    lastname: 'fox',
    dob: '05-23-1987',
    profession: 'Manager'
},
{
    id: 3,
    email: 'sarah12@gmail.com',
    firstname: 'sarah',
    lastname: 'bishop',
    dob: '10-14-1973',
    profession: 'Developer'
}];

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/api/users', function(req, res){
    res.send(users);
});

app.get('/api/user/:id', function(req, res) {
    let response;
    if(req.params.id){
        const id = req.params.id;
        const user = users.filter( (user) => user.id == id)
        response = {
            status: 200,
            statusText: 'Success',
            data: user.length > 0 ? user : []
        }
    }
    res.send(response);
});

app.put('/api/user/:id', function (req, res) {
    let response;
    if(req.params.id){
        const id = parseInt(req.params.id);
        users[id-1] = {
            id: id,
            email: req.body.email,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            dob: req.body.dob,
            profession: req.body.profession
        }
        response = {
            status: 200,
            statusText: 'Success',
            data: users
        }
    }
    res.send(response);
});

app.post('/api/user', function (req, res) {
    const user = {
        id: users.length + 1,
        email: req.body.email,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        dob: req.body.dob,
        profession: req.body.profession
    }
    users.push(user);
    response = {
        status: 200,
        statusText: 'Success',
        data: users
    }
    res.send(response);
});

app.delete('/api/user/:id', function (req, res) {
    const id = parseInt(req.params.id);
    users = users.filter((user) => user.id !== id);
    response = {
        status: 200,
        statusText: 'Success',
        data: users
    }
    res.send(response);
});
  
app.listen(port);
console.log('Serve running at: http://localhost:' + port);
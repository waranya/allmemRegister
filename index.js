var firebase = require('firebase');
var app = require('express')();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var port = process.env.PORT || 7778;
var config = {
    apiKey: "AIzaSyC20miEKlOq631nYISZwv7rGv75Tac7wvY",
    authDomain: "allmember.firebaseapp.com",
    databaseURL: "https://allmember-22356.firebaseio.com/",
    projectId: "allmember",
    storageBucket: "gs://allmember-22356.appspot.com",
    messagingSenderId: "498800564085",
};
firebase.initializeApp(config);

app.get('/', function (req, res) {
    res.send('<h1>Hello Node.js</h1>');
});

app.post('/register', function (req, res) {
    var json = req.body;

    firebase.auth().createUserWithEmailAndPassword(json.email, json.password)
    .then(output => {
        res.json({ uid: output.user.uid , email: output.user.email });
    }).catch(error => {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == "auth/email-already-in-use") {
            res.send("อีเมลซ้ำในระบบ");
        } else if (errorCode == "auth/invalid-email") {
            res.send("รูปแบบอีเมลไม่ถูกต้อง");
        } else {
            console.error(error);
        }
    });

});

app.listen(port, function() {
    console.log('Starting node.js on port ' + port);
});
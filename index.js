const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { User } = require("./model/use");
var app = express();


// connect with mongooeDB
dotenv.config();
mongoose.connect(process.env.MONGOSEDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(console.log('connect to mongooDB'))
.catch(error => console.log(error));

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())

app.engine('.hbs', exphbs.engine({ extname: ".hbs",
defaultLayout: false,
layoutsDir: "views/"}));
app.set('view engine', '.hbs');



// login logic
app.get('/login', (req, res)=> {
    res.render('login');
});

app.post('/login', (req, res)=> {
    const {email, password} = req.body;
    res.render('login', {email, password})
})







// đăng ký logic
app.get('/signup', (req, res)=> {
    res.render('signup');
});

app.post('/signup',async (req, res)=> {
    const {email, password, name} = req.body;
    var avata = "chào bạnk";
    const user = new User({name, email, password, avata});
    const newUser =await  user.save();  
    res.render('login');
});


app.get('/manager', (req, res)=> {
    res.render('manager');
});

app.post('/manager',async (req, res)=> {
    const {email, password, name} = req.body;
    var avata = "chào bạnk";
    const user = new User({name, email, password, avata});
    const newUser =await  user.save();  
    res.render('manager');
});

app.get('/quanLyNhanVien', (req, res)=> {
    res.render('quanLyNhanVien');
});

app.post('/quanLyNhanVien',async (req, res)=> {
    const {email, password, name} = req.body;
    var avata = "chào bạnk";
    const user = new User({name, email, password, avata});
    const newUser =await  user.save();  
    res.render('quanLyNhanVien');
});




app.get('/fogotPassword', (req, res)=> {
    res.render('quanLyNhanVien');
});

app.post('/fogotPassword',async (req, res)=> {
    const {email, password, name} = req.body;
    var avata = "chào bạnk";
    const user = new User({name, email, password, avata});
    const newUser =await  user.save();  
    res.render('fogotPassword');
});
// app.post('/user', async (req, res)=> {
//     try {
//         const user = new User(req.body);
//         await user.save();
//         res.sendStatus(200).json(user);
//     } catch (error) {
//         res.sendStatus(500).json(error);
//     }
// });



app.listen(3000, ()=>{
    console.log('Hello you');
})
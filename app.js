const express = require('express')
const app = express()
const port = 3000
const ejs = require('ejs')

app.listen(port, () => {
    console.log(`probaka app listening on port ${port}`)
})

app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res)=>{
    res.render('main')
})

app.get('/about', (req, res)=>{
    res.render('about')
})

app.get('/signin', (req, res)=>{
    res.render('signin')
})

app.get('/signinEmail', (req, res)=>{
    res.render('signinEmail');
});

app.get('/registration', (req, res)=>{
    res.render('registration');
})

app.get('/pad', (req, res)=>{
    res.render('pad');
})

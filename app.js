const express = require('express');


const app = express();


   


app.set('view engine', 'ejs');

app.listen(3005, () => {
    console.log('app is listening on port 3005')
})

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', {title: 'Home'});

});

app.get('/team', (req, res) => {
    res.render('team', {title: 'Team'})
})

app.get('/neurofeedback', (req, res) =>{
    res.render('neurofeedback', {title: 'neuro'})
})
app.get('/adhd', (req, res) => {
    res.render('adhd', {title: 'ADHD'})
})
app.get('/qeed', (req, res) => {
    res.render('qeed', {title: 'qEED'})
});

app.get('/contact', (req, res) => {
    res.render('contact', {title: 'contact'})
})
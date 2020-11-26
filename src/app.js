const express = require('express');
const path = require('path');
const app = express();

var publicDirectoryPath = path.join(__dirname,'../public');
app.use(express.static(publicDirectoryPath));
app.set('view engine', 'hbs');

app.get('',(req, res) => {
    res.send('Hello Express!');
});

app.get('',(req, res)=>{
    res.render(index);
});

app.get('/product',(req,res)=>{
    res.send({
        error:'you must provide search item'
    })
})


app.get('/weather',(req, res) =>{
    res.send('<h1>weather</h1>');
})

app.listen(3000,()=>{
    console.log('server is up on port 3000');
})
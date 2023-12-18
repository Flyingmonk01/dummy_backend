const {config} = require('dotenv');
const express = require('express');

const app = express();
config();

// const port = 3;

app.get('/', (req, res)=>{
    res.send('App is working');
})

app.get('/login', (req, res)=>{
    res.send('Login form is here')
})


app.get('/chai', (req, res)=>{
    res.send('Chai aur code is here');
})
app.listen(process.env.PORT, ()=>{
   console.log(`App is lstening on port: ${process.env.PORT}`);
})

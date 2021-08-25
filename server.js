const express = require('express');
const path =require("path");
const app = express();

app.use(express.static(path.join(__dirname, 'shop/build')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'shop/build/index.html'));
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'shop/build/index.html'));
})

app.listen(8080, () => {
    console.log('http://localhost:8080');
})
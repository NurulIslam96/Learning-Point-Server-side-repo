const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());

const categories = require('./data/categories.json');
const languages = require('./data/languages.json');


app.get('/', (req, res) => {
    res.send('Server is running');
});

app.get('/categories', (req, res) => {
    res.send(categories);
});

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = languages.find(language => language.id === id);
    res.send(selectedCourse);
});

app.listen(port, () => {
    console.log('Server is running through port: ', port);
});
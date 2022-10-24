const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Server is running')
})

app.listen(port, () => {
    console.log('Server is running through port: ', port)
})
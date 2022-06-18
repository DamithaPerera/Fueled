const express = require('express');
const cors = require('cors');
const app = express();

const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));



app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});

module.exports = app;


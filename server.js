

const express = require('express');

const app = express();

// listen for requests
app.listen(process.env.PORT, () => {
    console.log('conected to db & listening on port', process.env.PORT)
})
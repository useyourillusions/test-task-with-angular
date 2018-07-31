'use strict';

const express = require('express'),
    app = express(),
    cards = require('./cards.json');

app.get('/api/cards', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');

    setTimeout(() => res.send(cards), 1000);
});

app.use((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    res.type('application/json');
    res.status(404);
    res.send({
        hasError: true,
        errorCode: 404,
        errorMessage: 'Resource not found...'
    });
});

app.listen(5000, () => {
    console.log('Server started at port 5000')
});

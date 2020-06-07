const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes');
const PORT = process.env.PORT || 6000;

//middleware: separation of incoming request into req.header, req.body
app.use(bodyParser.urlencoded({ extended: true }));

//middleware: req.body -> Json object conversion
app.use(bodyParser.json());

//middleware: adding logger for each request coming to server
app.use((req, res, next) => {
    console.log(new Date(), req.method, (decodeURIComponent(req.url)));
    next();
});

//middleware : defining routes
app.use('/', routes);
app.use('*', (req, res) => res.sendFile(path.join(__dirname, '/client/public/index.html')));

//server
app.listen(PORT, (err) => {
    if(err) {
        console.log(`something went wrong while starting server : ${err}`);
    }
    console.log(`server started successfully on port ${PORT}`);
});
const express = require('express');
const cors = require('cors');

const server = express();
const port = 3000;

server.use(cors())

//Templating Engine
server.set('views', 'src/views')
server.set('view engine', 'ejs')

//Statics
server.use('/', express.static('src/resources'))

//Routes
server.use('/', require('./routes/root'))

//Listen
server.listen(port, () => console.log(`Server listening @ http://localhost:${port}`))
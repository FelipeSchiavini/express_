const express = require('express');
const server = express();
const { userRouter } = require('./routes');
const loggerMidd = require('./middleware/logger')
const { PORT } = require('./Config.js')
const midJSON = express.json();
const { engine } = require('express-handlebars')

server.use(midJSON);
server.use(loggerMidd)

server.engine('handlebars', engine());
server.set('view engine', 'handlebars');
server.set('views', './views');

server.get('/', (req, res) => {
    res.render('home', {name: 'Rafael'});
});

server.use('/user', userRouter);

server.listen(PORT, () => console.log(`Listening on ${PORT}!`));

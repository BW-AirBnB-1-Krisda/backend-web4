const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const session = require('express-session');
const knexSessionStore = require('connect-session-knex')(session);

// Routers 
const authenticate = require('../auth/restricting-middleware.js');
const userRouter = require('../users/users-router.js');
const authRouter = require('../auth/auth-router.js');

const server = express();

const sessionConfig = {
    name: 'bwsession',
    secret: 'this is a secret',
    cookie: {
        maxAge: 1000 * 60 * 60,
        secure: false,
        httpOnly: true
    }, 
    resave: false,
    saveUninitialized: false,
    store: new knexSessionStore({
        knex: require('../dbConfig.js'),
        tablename: 'session',
        sidfieldname: 'sid',
        createTable: true,
        clearInterval: 1000 * 60 * 60
    })
}

server.use(helmet());
server.use(cors());
server.use(express.json())
server.use(session(sessionConfig));

server.use('/api/users', userRouter);
server.use('/api/auth', authRouter)

module.exports = server;
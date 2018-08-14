const express = require('express');
const router = express.Router();
const itemsRoutes = require('./itemRoutes');

module.exports = config => {
    const log = config.logger;

    router.get('/', (req, res) => {
        res.send('hi');
    })

    router.use(itemsRoutes(config));

    return router;
}
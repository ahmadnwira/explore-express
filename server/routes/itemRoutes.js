const express = require('express');
const router = express.Router();

const Items = require('../services/itemsService');

module.exports = config => {
    const log = config.logger;

    router.get('/items/new', (req, res) => {
        res.render('createItem', {url: '/items'});
    })

    router.post('/items', (req, res) => {
        Items.store(req.body);
        res.redirect('/items');
    })

    /* edit */
    router.get('/items/:id/edit', (req, res) => {
        Items.getOne(req.params.id)
        .then(
            item => {
                res.render('createItem', {url: `/items/${req.params.id}/?_method=PUT`, item:item});
             },
            err => { log.error(err); }
        )

    })

    router.put('/items/:id', (req, res) => {
        Items.patch(req.params.id, req.body);
        res.redirect('/items');
    })

    /* delete */
    router.delete('/items/:id', (req, res) => {
        Items.destroy(req.params.id)
            .then(
                data => { res.json(data) },
                err => { log.error(err); }
            )
    })


    /* show */
    router.get('/items', (req, res) => {
        Items.getAll()
            .then(
                items => { res.json(items) },
                err => { log.error(err); }
            )
    })

    router.get('/items/:id', (req, res) => {
        Items.getOne(req.params.id)
            .then(
                item => { res.json(item) },
                err => { log.error(err); }
            )
    })

    return router;
}
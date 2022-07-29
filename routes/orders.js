const express = require('express');
const router = express.Router();
const controlador = require('../controllers/orders');

router.get('/', async(req,res) => {
    res.json(await controlador.getOrders())
} )

router.get('/:id', async(req, res) => {
    const id = req.params.id;

    res.json(await controlador.getOrderbyId(id));
})


module.exports = router; 
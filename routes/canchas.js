const express = require('express');
const router = express.Router();
const controller = require('../controllers/canchas');

router.get('/', async (req, res) => {
    res.json(await controller.getCanchas());
})

module.exports = router;
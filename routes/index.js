const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index', {
        title: "Perfil João Gabriel",
        version: "1.0"
    });
});

module.exports = router;
const express = require('express');
const router = express.Router();


const path = require("path");

const basePath = path.join(__dirname, "../templates")






router.get('/add', (req, res) => {
    res.sendFile(`${basePath}/userform.html`);
})

router.post('/save', (req, res) => {
    console.log(req.body);

    name = req.body.name;
    age = req.body.age;
    console.log(`O nome do usuário é ${name} e ele tem ${age} anos`)

});


module.exports = router;
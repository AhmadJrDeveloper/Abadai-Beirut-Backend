const express = require('express')
const app = express();

const router = express.Router()

router.post('/:id', (req,res) => {
    res.json({mssg: 'create chi'})
} )


module.exports = router
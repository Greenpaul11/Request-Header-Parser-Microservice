const express = require('express');
const router = express.Router()

router.get('/whoami', (req, res) => {
    const ipList = req.ip.split(':')
    const ip = ipList[ipList.length - 1]
    res.json({
        ipaddress: ip,
        language: req.headers['accept-language'],
        software: req.headers['user-agent']
    })
})

module.exports = router
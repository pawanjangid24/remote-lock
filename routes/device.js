var express = require('express');
const { Device } = require('../models/device');
var router = express.Router();
var { sequelize } = require('./../database/db')

/* GET device information */
router.get('/:deviceId', async function(req, res, next) {
    try{
        await sequelize.authenticate()
        console.log('database connection established')
    }catch(err){
        res.status(500).send(`error occurred: ${err}`)
    }
  
    try{
        const deviceId = req.params.deviceId
        console.log(deviceId)
        const device = await Device.findOne({
            where: {
                id: deviceId
            }
        })

        res.status(200).send(device);
    }catch(err) {
        res.status(500).send(`error: ${err}`)
    }
});

router.post('/create', async (req, res, next) => {
    try{
        await Device.bulkCreate(req.body)
        res.status(201).send('devices list created')
    }catch(err){
        res.status(500).send(`error in creating devices list: ${err}`)
    }
})

module.exports = router;

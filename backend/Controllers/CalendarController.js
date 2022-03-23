const router = require('express').Router();
const moment = require('moment');
const Event = require('../Models/Event')

router.post('/create-event', async(req, res) => {
    const event = Event(req.body)
    await event.save()
    console.log(event)
    res.sendStatus(201)
    console.log("sending status")
})

router.get('/get-events', async(req, res) => {
    const events = await Event.find({
        start: {$gte: moment(req.query.start).toDate() },
        end: {$lte: moment(req.query.end).toDate() }
    });

    res.send(events)

})
s


module.exports = router
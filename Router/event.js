const express = require('express');
const { getEvent,
    createEvent,
    deleteEvent,
    updateEvent,
    getAllEvents,
} = require('../Controller/event');
const eventRouter = express.Router();

eventRouter.get('/get-event', getEvent);
eventRouter.post('/create-event', createEvent);
eventRouter.delete('/delete-event', deleteEvent);
eventRouter.put('/update-event', updateEvent);
eventRouter.get('/get-all-events', getAllEvents);

module.exports = eventRouter;
const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
    type : {
        type: String,
        default : "events",
    },
    uid : String,
    name : String,
    tagline : String,
    schedule : {
        type : Date,
        default : Date.now,
    },
    description : String,
    moderator : String,
    category : String,
    sub_category : String,
    rigor_rank : Number,
    attendees : [{
        type : String,
    }]


});

const Event = mongoose.model("Event",eventSchema)
module.exports = Event;
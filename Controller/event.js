const { mongoose } = require('mongoose');
const Event = require('../Models/Event');


const getEvent = async (req,res) => {
    const {event_id} = req.query;
    if(!event_id) {
        return res.status(400).json({
            message : "Please provide event-id"
        });
    }
    try {
        const event = await Event.findById({_id : event_id});
        if(!event) {
            return res.status(500).json({
                message : "Event not found"
            });
        }
        return res.status(200).json({
            event
        });
    } catch(err) {
        console.log(err);
    }
};

const getAllEvents = async(req,res) => {
    const {type} = req.query;
    if(!type) {
        return res.status(400).json({
            message : "Please provide type"
        })
    }
    try {
        const event = await Event.find({type});
        return res.status(200).json({
            event,
        });

    } catch(err) {
        console.log(err);
    }
}

const createEvent = async(req,res) => {
    const {type, userid, name, tagline, description, moderator, category, sub_category, rigor_rank, attendees} = req.body;

    if(!type) {
        return res.status(400).json({
            message : "Provide type",
        })
    }
    if(!userid) {
        return res.status(400).josn({
            message : "Provide user id",
        })
    }
    if(!name){
        return res.status(400).json({
            message : "Provide Name",
        });
    }

    if(!tagline){
        return res.status(400).json({
            message : "Provide Tagline",
        });
    }

    if(!description){
        return res.status(400).json({
            message : "Provide Description",
        });
    }

    if(!moderator){
        return res.status(400).json({
            message : "Provide Moderator",
        });
    }

    if(!category){
        return res.status(400).json({
            message : "Provide Category",
        });
    }

    if(!sub_category)
    {
        return res.status(400).json({
            message : "Provide Sub-Category",
        });
    }

    if(!rigor_rank)
    {
        return res.status(400).json({
            message : "Provide Rigor Rank",
        });
    }

    try{
        const event = await Event({
            name, 
            tagline,
            description, 
            moderator, 
            category,
            sub_category, 
            rigor_rank,
        });

        await event.save();
        return res.status(200).json({
            event
        });
    } catch(err){
        console.log(err);
    }
};


const deleteEvent = async(req, res) => {
    const { eventid } = req.query;
    if(!eventid){
        return res.status(400).json({
            message : "Provide Event-Id"
        });
    }

    try{
        const event = await Event.findByIdAndDelete(eventid);
        if(!event){
            return res.status(500).json({
                message : "Event doesn't exists"
            });
        }

        res.status(200).json({
            message : "Event has been Deleted Successfully",
        });
    } catch(err){
        console.log(err);
    }
};


const updateEvent = async(req, res) => {
    const {event_id} = req.query;
    const {name, tagline, description, moderator, category, sub_category, rigor_rank} = req.body;

    if(!event_id){
        return res.status(500).json({
            message : "Provide Event-id"
        });
    }

    try{
        const event = await Event.findByIdAndUpdate({_id : event_id}, {

        });
        if(!event){
            return res.status(500).json({
                message : "Event is not found!"
            });
        }
        if(name) {
            event.name = name;
        } 
        if(tagline) {
            event.tagline = tagline;
        }
        if(description) {
            event.description = description;
        }
        if(moderator) {
            event.moderator = moderator;
        }
        if(category) {
            event.category = category;
        }
        if(sub_category) {
            event.sub_category = sub_category;
        }
        if(rigor_rank) {
            event.rigor_rank = rigor_rank;
        }
        await event.save();
        res.status(200).json({
            event
        });
    } catch(err){
        console.log(err);
    }
};

module.exports = {
    getEvent,
    createEvent,
    deleteEvent,
    updateEvent,
    getAllEvents
};
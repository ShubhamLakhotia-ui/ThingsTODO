const mongoose=require('mongoose');
const EventSchema=mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        data: String,
        contentType:String
    }
})
module.exports=EventModel=mongoose.model('EventModel',EventSchema);
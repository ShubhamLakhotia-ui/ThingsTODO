const mongoose=require('mongoose');

const querySchema = mongoose.Schema({
    userQuery: String,
    adminResponse: String
});



const Query=mongoose.model('Query',querySchema);
module.exports=Query;

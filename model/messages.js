const mongoose = require('mongoose')
const Schema = mongoose.Schema

const msgSchema = new Schema({
    name:{
        type:String,
        required:true,
        lowercase:true
    },
    message:{
        type:String,
        required:true
    }
})

const Message = mongoose.model('message', msgSchema)
module.exports = Message
const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
    id:{type : Number, require: true},
    is_Booked:{type: Boolean, default: false}
})

const DataModel = mongoose.model("ticket",dataSchema)

module.exports={
    DataModel
}



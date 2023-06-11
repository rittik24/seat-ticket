const mongoose = require("mongoose");
const url ="mongodb://rittikhaldar:haldar@ac-gbyeoju-shard-00-00.vq2bpvq.mongodb.net:27017,ac-gbyeoju-shard-00-01.vq2bpvq.mongodb.net:27017,ac-gbyeoju-shard-00-02.vq2bpvq.mongodb.net:27017/FLIPKART?ssl=true&replicaSet=atlas-o8s27b-shard-0&authSource=admin&retryWrites=true&w=majority"

const connection = mongoose.connect(url);

module.exports={
    connection
}
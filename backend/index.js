// create a api for get all 80 seat data
// schema of this api should have id: and is_Booked:

// create a api where you can write your logic of blank seat and booked seat
// if a row have 7 seat and you have to book 4 seat then 1st 4 seat is booked left 3 seat are not booked
// then if want to booked onether 4 seat the 2nd row ticket will be booked and also left 3 ticket are not booked

const express = require("express");
const { connection } = require("./config/db");
const {DataModel} = require("./model/data.model.js")
const cors = require("cors")
const app = express();
app.use(express.json());

app.use(cors())

app.get("/", async (req, res) => {
    let query = req.query
    try {
        const findTickets = await DataModel.find(query)
        res.send(findTickets)
    } catch (error) {
        console.log(error)
    } 
})



app.post("/data", async (req, res) => {
    const id = req.body
    console.log(id)
    try {
        const data = new DataModel(id)
        // const data =  DataModel.find({id: +id})
        await data.save()
        res.send(`data added succesfully`)
        console.log(data)
        res.send(data)

    } catch (error) {
        console.log(error)
    }
})

app.patch("/update", async (req,res)=>{
    const updateSeat = req.body;
    const updateId = req.params.id
    try {
    await DataModel.updateMany({_id: updateId},updateSeat)
    res.send(`Seats succesfully updated of this ${updateId}`)
    } catch (error) {
        console.log(error)
        res.send({"err": "something went wrong"})
    }
})

app.listen(8080, async () => {
    try {
        await connection
        console.log("connected to db")
    } catch (error) {
        console.log("cannot connected to db")
        console.log(error)
    }
    console.log("server run at port 8080")
})



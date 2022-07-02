const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')

app.use(cors())
app.use(express.json())


mongoose.connect("mongodb+srv://dquangxyz:12344321@cluster0.feme6.mongodb.net/pizzastore", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const foodSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    ingredients: Array
  })
const Food = mongoose.model("Food", foodSchema, "food")
//"Food" will auto connect to "foods" collection in the database

app.get("/menu-database", (req, res) => {
  Food.find((err, data) => {
    if (err){
      console.log(err)
    } else {
      res.send(data)
    }
  })
})

if (process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'))
}

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log("Server is now running on port 3001")
})


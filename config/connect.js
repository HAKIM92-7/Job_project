const mongoose = require ('mongoose')
const config = require ('config')
const connectDB = async () => { 
await mongoose.connect (config.get("MONGOURI"), { useNewUrlParser: true ,useCreateIndex: true,useFindAndModify:false, useUnifiedTopology: true }  )
.then (() => console.log ("database connected successfully"))
.catch (() => console.log ("connection to database failed ") )

}



module.exports = connectDB 

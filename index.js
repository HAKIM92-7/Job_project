const express = require ('express')
const app = express ()
const port = 5000
const connectDB = require ("./config/connect")
const entrepriseRouter = require ('./routes/api/entreprise')
const candidatRouter = require ('./routes/api/candidat')
const loginRouter = require ('./routes/api/login')


app.use(express.json())

connectDB()

app.use('/api/candidat' , candidatRouter)
app.use('/api/entreprise' , entrepriseRouter)
app.use ('/api/login' , loginRouter)

// Création du serveur 
app.listen (port, err => {
if (err) console.log ('server error')
console.log ('server is running at port 5000')
}) ;

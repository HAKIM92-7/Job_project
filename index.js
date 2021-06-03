const express = require ('express')
const app = express ()
const port = 5000
const connectDB = require ("./config/connect")
const entrepriseRouter = require ('./routes/api/entreprise')
const candidatRouter = require ('./routes/api/candidat')
const loginRouter = require ('./routes/api/login')
const profile_entreprise = require ('./routes/api/profil_entreprise')
const profile_candidat = require ('./routes/api/profil_candidat')

app.use(express.json())

connectDB()

app.use('/api/candidat' , candidatRouter)
app.use('/api/entreprise' , entrepriseRouter)
app.use ('/api/login' , loginRouter)
app.use ('/api/profile_entreprise' , profile_entreprise)
app.use ('/api/profile_candidat' , profile_candidat)

// Création du serveur 
app.listen (port, err => {
if (err) console.log ('server error')
console.log ('server is running at port 5000')
}) ;

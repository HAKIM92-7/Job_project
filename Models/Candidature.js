const mongoose = require ('mongoose')
const schema = mongoose.Schema
const candidatureSchema = new schema ( {


    offre: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'offre'
      },

      candidat : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'candidat'
      },

cv: {
type : String , 
required : true 
} ,

disponibilité : {
    type : String, 
    required : true , 
    
    } , 

   

    date_candidature: {
    type : Date , 
    required:true , 
    

    } ,

    
    
 })


 module.exports = mongoose.model('offre' , offreSchema)
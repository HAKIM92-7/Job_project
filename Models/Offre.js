const mongoose = require ('mongoose')
const schema = mongoose.Schema
const offreSchema = new schema ( {


    entreprise: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'entreprise'
      },


titre: {
type : String , 
required : true , 

} ,
date_de_creation : {
    type : Date, 
    required : true , 
    
    } , 

    description : {
        type : String , 
        required : true } ,

    date_expiration: {
    type : Date , 
    required:true , 
    

    } ,

    nombre_des_postes : {
        type : Number , 
        required : true 
        
        } 
    
    
 })


 module.exports = mongoose.model('offre' , offreSchema)
const mongoose = require ('mongoose')
const schema = mongoose.Schema
const profil_entreprise_Schema = new schema ( {

    entreprise: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'entreprise'
      },

adresse: {
    type : String , 
    required : true , 
    
    } ,

code_postale : {
    type : Number , 
    required : true , 

    } , 

    pays : {
        type : String, 
        required : true } ,

            mobile : String , 

            numero_fixe : { 
                type : String ,
                
                required : true } , 

            fax : String , 

    contact_email : {type :  String , 

        required : true }




 })


 module.exports = mongoose.model('profil' ,  profil_entreprise_Schema)
const mongoose = require ('mongoose')
const schema = mongoose.Schema
const entrepriseSchema = new schema ( {
nom: {
type : String , 
required : true , 
unique : true
} ,
email : {
    type : String , 
    required : true , 
    unique : true
    } , 

    password : {
        type : String , 
        required : true } ,

    matricule_fiscale : {
    type : String , 
    required:true , 
    unique : true

    } ,

    forme_juridique: {
        type : String , 
        required : true 
        
        } ,
    
        secteur : {
            type : String , 
            required : true 
            
            } ,

            nbre_employes : {
                type : String , 
                required : true 
                
                } ,
                role : {
                    type : String , 
                    required : true , 
                    default : "entreprise"
        
                    } ,

        
                date_de_creation : {
                    type: Date,
                    default: Date.now
                    } 

 })


 module.exports = mongoose.model('entreprise' , entrepriseSchema)
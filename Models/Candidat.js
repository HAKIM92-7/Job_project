const mongoose = require ('mongoose')
const schema = mongoose.Schema
const candidatSchema = new schema ( {
nom: {
type : String , 
required : true , 

} ,

prénom: {
    type : String , 
    required : true , 
    
    } ,

email : {
    type : String , 
    required : true , 
    unique : true
    } , 

    password : {
        type : String , 
        required : true } ,
 
    
        date_de_naissance : {
            type : Date , 
            required : true 
            
            } ,

            sexe : {
                type : String , 
                required : true 
                
                } , 

            role : {
            type : String , 
            required : true , 
            default : "candidat"

            } , 

                date_de_creation : {
                    type: Date,
                    default: Date.now
                    } 

        
 })


 module.exports = mongoose.model('candidat' , candidatSchema)
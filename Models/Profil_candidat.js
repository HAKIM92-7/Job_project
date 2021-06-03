const mongoose = require ('mongoose')
const schema = mongoose.Schema
const profil_candidat_Schema = new schema ( {

    candidat: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'candidat'
      },

      telephone : {
     type : String , 
     required : true 


      } , 

    etat_civile: {

      type : String , 
      required : true 
    } , 

   contact_email : {
       type : String , 
       required : true
   } , 

zone_géographique: {
    type : String , 
    required : true , 
    
    } ,

region : {
    type : String , 
    required : true , 

    } , 

    district : {
        type : String , 
        required : true } ,

            dernier_diplome_obtenu : {
                type : String , 
                required : true 
                
                } ,

                langues : [
                           { 
                               langue : String , 

                               level : String
                               }


                ],

                    competences: {
                        type : String, 
                        required : true 
                        
                        } ,
                    experiences_professionelles :  [
                        {
                          titre: {
                            type: String,
                            
                          },
                          societe: {
                            type: String
                            
                          },
                          location: {
                            type: String
                          },
                          from: {
                            type: Date,
                          
                          },
                          to: {
                            type: Date
                          },
                          current: {
                            type: Boolean,
                            default: false
                          },
                          description: {
                            type: String
                          }
                        }
                      ] 


                




 })


 module.exports = mongoose.model('profil_candidat' ,  profil_candidat_Schema)
import {REGISTER_CANDIDATE_SUCCESS , 
    LOGIN_CANDIDATE_SUCCESS ,
     LOGOUT_CANDIDATE,
      LOAD_CANDIDATE } from '../actions/actionTypes'


const initialState = {

token : localStorage.getItem('candidate-token') ,
candidate : null ,
isAuth : false ,

}



const authCandidateReducer = (state = initialState , action) =>{


const {type , payload} = action

switch(type) {

case REGISTER_CANDIDATE_SUCCESS: 
case LOGIN_CANDIDATE_SUCCESS : 

localStorage.setItem('candidate-token' , payload.token)

return {...state , token : payload.token , candidate: payload.candidat , isAuth : true }

case LOGOUT_CANDIDATE : localStorage.removeItem('candidate-token')

return {...state , token : null , candidate : null , isAuth : false}

case LOAD_CANDIDATE : return {...state , isAuth : true , candidate : payload}


                        

default : return state


}}

export default authCandidateReducer
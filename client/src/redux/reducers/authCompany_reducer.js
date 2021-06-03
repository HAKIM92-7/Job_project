import {REGISTER_COMPANY_SUCCESS , LOGIN_COMPANY_SUCCESS , LOGOUT_COMPANY, LOAD_COMPANY } 
from '../actions/actionTypes'


const initialState = {

token : localStorage.getItem('token') ,
company : null ,
isAuth : false ,

}



const authCompanyReducer = (state = initialState , action) =>{


const {type , payload} = action

switch(type) {

case REGISTER_COMPANY_SUCCESS: 
case LOGIN_COMPANY_SUCCESS : 

localStorage.setItem('token' , payload.token)

return {...state , token : payload.token , company : payload.entreprise , isAuth : true }

case LOGOUT_COMPANY : localStorage.removeItem('token')

return {...state , token : null , company : null , isAuth : false}

case LOAD_COMPANY : return {...state , isAuth : true , company : payload}


                        

default : return state


}}

export default authCompanyReducer
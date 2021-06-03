import {REGISTER_COMPANY_SUCCESS , REGISTER_COMPANY_FAIL , 
    LOGIN_COMPANY_SUCCESS ,LOGIN_COMPANY_FAIL,
     LOGOUT_COMPANY ,LOAD_COMPANY,
      LOAD_COMPANY_FAIL} from './actionsTypes'
import axios from 'axios'




export const registerCompany = (newCompany) => dispatch => {

axios.post('/api/entreprise' , newCompany ).then((res) => {

dispatch ({type : REGISTER_COMPANY_SUCCESS , payload : res.data})
})
.catch((err) => {

dispatch({type : REGISTER_COMPANY_FAIL})

console.log(err)

})
}


export const loginCompany = ({email , password}) => dispatch => {

axios.post('/api/login/entreprise' , {email , password}).then((res) => {

dispatch({type : LOGIN_COMPANY_SUCCESS, payload : res.data})



})
.catch((err) => {

dispatch({type : LOGIN_COMPANY_FAIL})
console.log(err)


})}


export const logoutCompany = () => {

return {type : LOGOUT_COMPANY}


}


export const loadCompany = () => (dispatch , getState) => {

axios.get('/api/login/entreprise' , tokenConfig(getState)).then((res) => {


dispatch({type : LOAD_COMPANY , payload : res.data})


})
.catch((err) => {
dispatch({type : LOAD_COMPANY_FAIL})
console.log(err)}
)

}




const tokenConfig = (getState) => {

const token = getState().auth.token

const config = {

headers : {

    'Content-type' : 'application/json'
}}

if(token) {

config.headers['token'] = token ;

}

return config 

};
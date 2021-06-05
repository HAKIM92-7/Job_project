
import { REGISTER_CANDIDATE_SUCCESS , REGISTER_CANDIDATE_FAIL , 
    LOGIN_CANDIDATE_SUCCESS ,LOGIN_CANDIDATE_FAIL,
     LOGOUT_CANDIDATE ,LOAD_CANDIDATE,
      LOAD_CANDIDATE_FAIL} from './actionTypes'

import axios from 'axios'
import {setAlert} from './alertActions'
import { logoutCompany } from './auth_company_actions'




export const registerCandidate = (newCandidate) => dispatch => {

axios.post('/api/candidat' , newCandidate).then((res) => {

dispatch ({type : REGISTER_CANDIDATE_SUCCESS , payload : res.data})
})
.catch((err) => {

dispatch({type : REGISTER_CANDIDATE_FAIL})

console.log(err)

})
}


export const loginCandidate = ({email , password}) => dispatch => {

axios.post('/api/login/candidat' , {email , password}).then((res) => {

dispatch({type : LOGIN_CANDIDATE_SUCCESS, payload : res.data})



})
.catch((err) => {

    const errors = err.response.data.errors;
    console.log(errors);
    if (errors) {
      errors.forEach((error) => {
        dispatch(setAlert(error.msg, 'danger', 5000));
      });
    }

dispatch({type : LOGIN_CANDIDATE_FAIL})
console.log(err)


})}


export const logoutCandidate = () => {

return {type : LOGOUT_CANDIDATE}


}


export const loadCandidate= () => (dispatch , getState) => {

axios.get('/api/login/candidat' , tokenConfig(getState)).then((res) => {


dispatch({type : LOAD_CANDIDATE , payload : res.data})


})
.catch((err) => {
dispatch({type : LOAD_CANDIDATE_FAIL})
console.log(err)}
)

}




const tokenConfig = (getState) => {

const candidate_token = getState().authCandidate.token

const config = {

headers : {

    'Content-type' : 'application/json'
}}

if(candidate_token) {

config.headers['token'] = candidate_token ;

}

return config 

};

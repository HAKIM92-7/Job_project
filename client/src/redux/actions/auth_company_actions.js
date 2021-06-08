import {REGISTER_COMPANY_SUCCESS , REGISTER_COMPANY_FAIL , 
    LOGIN_COMPANY_SUCCESS ,LOGIN_COMPANY_FAIL,
     LOGOUT_COMPANY ,LOAD_COMPANY,
      LOAD_COMPANY_FAIL} from './actionTypes'
import axios from 'axios'
import { setAlert } from './alertActions';
import {logoutCandidate} from './auth_candidate_actions'


export const registerCompany = (newCompany) => dispatch => {

axios.post('/api/entreprise' , newCompany ).then((res) => {

dispatch ({type : REGISTER_COMPANY_SUCCESS , payload : res.data})

dispatch(logoutCandidate())
})
.catch((err) => {

  const errors = err.response.data.errors;
  console.log(errors);
  if (errors) {
    errors.forEach((error) => {
      dispatch(setAlert(error.msg, 'danger', 5000));
    });
  }

dispatch({type : REGISTER_COMPANY_FAIL})

console.log(err)

})
}


export const loginCompany = ({email , password}) => dispatch => {

axios.post('/api/login/entreprise' , {email , password}).then((res) => {

dispatch({type : LOGIN_COMPANY_SUCCESS, payload : res.data})



})
.catch((err) => {


    const errors = err.response.data.errors;
    console.log(errors);
    if (errors) {
      errors.forEach((error) => {
        dispatch(setAlert(error.msg, 'danger', 5000));
      });
    }

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

const company_token = getState().authCompany.token

const config = {

headers : {

    'Content-type' : 'application/json'
}}

if(company_token) {

config.headers['token'] = company_token ;

}

return config 

};
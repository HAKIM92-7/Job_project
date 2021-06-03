
import { REGISTER_CANDIDATE_SUCCESS , REGISTER_CANDIDATE_FAIL , 
    LOGIN_CANDIDATE_SUCCESS ,LOGIN_CANDIDATE_FAIL,
     LOGOUT_CANDIDATE ,LOAD_CANDIDATE,
      LOAD_CANDIDATE_FAIL} from './actionsTypes'

import axios from 'axios'




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

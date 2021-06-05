
import {combineReducers} from 'redux'
import authCompany from './authCompany_reducer'
import authCandidate from './authCandidate_reducer'
import alert from './alertReducer';
const rootReducer = combineReducers({

authCompany ,
authCandidate , 
alert

})

export default rootReducer

import {combineReducers} from 'redux'
import authCompany from './authCompany_reducer'
import authCandidate from './authCandidate_reducer'

const rootReducer = combineReducers({

authCompany ,
authCandidate

})

export default rootReducer
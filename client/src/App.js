import logo from './logo.svg';
import './App.css';
import Home from './components/Layouts/Home';
import {Switch , Route} from 'react-router-dom'
import RegisterCompany from './components/Auth_Forms/RegisterCompany';
import RegisterCandidate from './components/Auth_Forms/RegisterCandidate';
import LoginCompany from './components/Auth_Forms/LoginCompany' ; 
import LoginCandidate from './components/Auth_Forms/LoginCandidate'
import Navbar from './components/Layouts/Navbar'
import Alert from './components/Layouts/Alert';
import { useEffect } from 'react';
import {useDispatch} from 'react-redux'
import { loadCandidate } from './redux/actions/auth_candidate_actions';
import { loadCompany } from './redux/actions/auth_company_actions';
import CompanyDash from './components/Layouts/CompanyDash';
import CandidateDash from './components/Layouts/CandidateDash';
function App() {

const dispatch = useDispatch()
  useEffect(() => {
  
  dispatch(loadCandidate())
  dispatch(loadCompany())



  }, [])
  return (
    <div className="App">
      <Navbar/>
      <Alert/>
      
      <Switch>
<Route exact path= "/" component={Home} />
<Route path="/register/company" component={RegisterCompany} />
<Route path="/register/candidate" component={RegisterCandidate} />
<Route path="/login/company" component={LoginCompany} />
<Route path="/login/candidate" component={LoginCandidate} />
<Route path="/dashboard/company" component={CompanyDash} />
<Route path="/dashboard/candidate" component={CandidateDash} />

</Switch>
    </div>
  );
}

export default App;

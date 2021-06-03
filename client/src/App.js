import logo from './logo.svg';
import './App.css';
import Home from './components/Layouts/Home';
import {Switch , Route} from 'react-router-dom'
import RegisterCompany from './components/Auth_Forms/RegisterCompany';
import RegisterCandidate from './components/Auth_Forms/LoginCandidate';
import LoginCompany from './components/Auth_Forms/LoginCompany' ; 
import LoginCandidate from './components/Auth_Forms/LoginCandidate'
import Navbar from './components/Layouts/Navbar'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
<Route exact path= "/" component={Home} />
<Route path="/register/company" component={RegisterCompany} />
<Route path="/register/candidate" component={RegisterCandidate} />
<Route path="/login/company" component={LoginCompany} />
<Route path="/login/candidate" component={LoginCandidate} />

</Switch>
    </div>
  );
}

export default App;

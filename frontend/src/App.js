//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './components/Login';
import Register from './components/Register';



function App() {
  return (
<Router>
  <Switch>
    <Route path='/chatapp/login' component={Login} exact>
    </Route>
    <Route path='/chatapp/register' component={Register} exact>
    </Route>
  </Switch>
</Router>


  );
}

export default App;

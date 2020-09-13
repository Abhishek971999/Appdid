import React,{Fragment} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Dashboard from './components/Dashboard'
import Contact from './components/Contact'
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

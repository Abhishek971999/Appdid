import React,{Fragment} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Dashboard from './components/Dashboard'
import Contact from './components/Contact'
import CourseDetails from './components/CourseDetails'
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/course' component={CourseDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

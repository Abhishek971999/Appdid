import React from 'react';
import SnackbarProvider from "react-simple-snackbar";
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
        
        <Route exact path='/:coursename/course' component={CourseDetails} />
        <SnackbarProvider>
          <Route exact path='/contact' component={Contact} />
        </SnackbarProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

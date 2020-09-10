import React,{Fragment} from 'react';
import './App.scss';
import Header from './components/Header'
import About from './components/About'
import Footer from './components/Footer'
import Features from './components/Features'
function App() {
  return (
    <Fragment>
      <Header />
      <About />
      <Features />
      <Footer />
    </Fragment>
  );
}

export default App;

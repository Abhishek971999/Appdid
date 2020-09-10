import React,{Fragment} from 'react';
import './App.scss';
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Features from './components/Features'
import Footer from './components/Footer'
function App() {
  return (
    <Fragment>
      <Header />
      <About />
      <Skills />
      <Features />
      <Footer />
    </Fragment>
  );
}

export default App;

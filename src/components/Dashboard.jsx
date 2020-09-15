import React,{Fragment} from 'react';
import Header from './Header'
import About from './About'
import Skills from './Skills'
import Features from './Features'
import Testimonial from './Testimonial'
import HomeContact from './HomeContact'
import Footer from './Footer'
function Dashboard() {
  return (
    <Fragment>
      <Header />
      <About />
      <Skills />
      <Features />
      <Testimonial />
      <HomeContact />
      <Footer />
    </Fragment>
  );
}

export default Dashboard;

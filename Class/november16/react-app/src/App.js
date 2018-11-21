import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Section1 from './Components/Main/Section1/Section1'
import Section2 from './Components/Main/Section2/Section2'
import Section3 from './Components/Main/Section3/Section3'
import SectionOutClients from './Components/Main/SectionOutClients/SectionOutClients'
import Section4 from './Components/Main/Section4/Section4'
import FooterNavigation from './Components/Footer/FooterNavigation';
import Footer from './Components/Footer/Footer'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Section1 />
          <Section2 />
          <Section3 />
          <SectionOutClients />
          <Section4 />
        </main>
        <footer>
          <FooterNavigation />
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;

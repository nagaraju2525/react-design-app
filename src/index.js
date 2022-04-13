import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './header';
import Body from './body';
import About from './about';
import Service from './service';
import Count from './count';
import Cta from './cta';
import Portfolio from './portfolio';
import Testimonials from './testimonials';
import Team from './team';
import Contact from './contact';
import Footer from './footer';


ReactDOM.render(
  <React.StrictMode>
    <Header></Header>
    <Body></Body>
    <main>
      <About></About>
      <Service></Service>
      <Count></Count>
      <Cta></Cta>
      <Portfolio></Portfolio>
      <Testimonials></Testimonials>
      <Team></Team>
      <Contact></Contact>
    </main>
    <Footer></Footer>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

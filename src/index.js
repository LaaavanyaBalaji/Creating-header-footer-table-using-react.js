
import ReactDOM from 'react-dom';
import React from 'react';
import Header from './components/header'; 
import Myform1 from './components/table';
import Footer from './components/footer'

const App1 = () => (
  <div>

    <Header/>
    <Myform1/>
    <Footer/>
    
  </div>
);


ReactDOM.render(<App1/>,document.getElementById("root"));






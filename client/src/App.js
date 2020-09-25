import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './components/Home/home';

function App() {
   return (
      <div className='page-container'>
         <div className='content-wrap'>
            <BrowserRouter>
               <Header />
               <Home />
            </BrowserRouter>
         </div>
         <BrowserRouter>
            <Footer />
         </BrowserRouter>
      </div>
   );
}

export default App;

import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './components/Home/home';
import NotFound from './components/NotFound/NotFound';
import Signup from './components/Signup/Signup';
import Signin from './components/Signin/Signin';
import About from './components/About/About';
import Services from './components/Services/Services';
import AdminRoutes from './components/Admin/AdminRoutes/AdminRoutes';
import AdminDashboard from './components/Admin/AdminDashboard/Admin';
import PostDescription from './components/Posts/postdescription';

function App() {
   return (
      <BrowserRouter>
         <Header />
         <main id='wrapper'>
            <Switch>
               <Route exact path='/' component={Home} />
               <Route exact path='/posts/:id' component={PostDescription} />
               <Route exact path='/signup' component={Signup} />
               <Route exact path='/login' component={Signin} />
               <Route exact path='/services' component={Services} />
               <Route exact path='/about' component={About} />
               {/* 
                     {/* <UserRoutes
                        exact
                        path='/user/dashboard'
                        component={UserDashboard}
                     /> */}
               <AdminRoutes
                  exact
                  path='/admin/dashboard'
                  component={AdminDashboard}
               />
               <Route component={NotFound} />
            </Switch>
         </main>
         <Footer />
      </BrowserRouter>
   );
}

export default App;

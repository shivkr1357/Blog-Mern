import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './components/Home/home';
import NotFound from './components/NotFound/NotFound';

function App() {
   return (
      <BrowserRouter>
         <Header />
         <div className='page-container'>
            <div className='content-wrap'>
               <main>
                  <Switch>
                     <Route exact path='/' component={Home} />
                     {/* <Route exact path='/signUp' component={SignUp} />
                     <Route exact path='/signIn' component={SignIn} /> */}
                     {/* <UserRoutes
                        exact
                        path='/user/dashboard'
                        component={UserDashboard}
                     />
                     <AdminRoutes
                        exact
                        path='/admin/dashboard'
                        component={AdminDashboard}
                     /> */}
                     <Route component={NotFound} />
                  </Switch>
               </main>
            </div>
         </div>
         <Footer />
      </BrowserRouter>
   );
}

export default App;

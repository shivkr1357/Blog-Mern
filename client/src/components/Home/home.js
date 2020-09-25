import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

/**
 * @author
 * @function Home
 **/

const Home = () => {
   return (
      <section>
         <div className='container'>
            <div className='row'>
               <div className='col-md-8 main-content border'>
                  <div class='card'>
                     <img class='card-img-top' src='...' alt='Card image cap' />
                     <div class='card-body'>
                        <h5 class='card-title'>Card title</h5>
                        <p class='card-text'>
                           Some quick example text to build on the card title
                           and make up the bulk of the card's content.
                        </p>
                        <Link to='#' class='btn btn-primary'>
                           Go somewhere
                        </Link>
                     </div>
                  </div>
               </div>
               <div className='col-md-4 border side-content'>
                  <div>
                     <p>hello kkjksdjf</p>
                  </div>
                  <p>hello kkjksdjf</p>
                  <p>hello kkjksdjf</p> <p>hello kkjksdjf</p>
                  <p>hello kkjksdjf</p> <p>hello kkjksdjf</p>
                  <p>hello kkjksdjf</p> <p>hello kkjksdjf</p>
                  <p>hello kkjksdjf</p> <p>hello kkjksdjf</p>
                  <p>hello kkjksdjf</p> <p>hello kkjksdjf</p>
                  <p>hello kkjksdjf</p> <p>hello kkjksdjf</p>
                  <p>hello kkjksdjf</p> <p>hello kkjksdjf</p>
                  <p>hello kkjksdjf</p> <p>hello kkjksdjf</p>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Home;

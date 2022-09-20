import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import BackTop from "./BackToTop"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import {auth} from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';
import BackToTop from './BackToTop';

const promise = loadStripe(
  "pk_test_51HZuu8L2Eb4HEaVe78h9UUQf1DIYLK6AxtrpG9yj9gFcIrMf6X1tHG40fkmBc5dgeiVl8tLqDE5MhbuiHcITbkxm00sYEdBj80"
)

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("The user is >>> ", authUser);

      if (authUser) {
        // the user jsut logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        // the user is logged out 
        dispatch({
          type: "SET_USER",
          user: null
        })
        console.log(authUser)
      }
    })
  },[])
  return (
    
   
                
<Router>


<Header/>
<br></br>  
<BackTop/>
        
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Header" element={<Header />} />
    <Route path="/Login" element={<Login />} />
    <Route path="/Checkout" element={<Checkout />} />
   
    <Route path="/Orders" element={<Orders />} />
    <Route path="/Payment" element={<Payment />} />
    <Route path="/Order" element={<Orders />} />
    <Route  Elements  stripe={promise} element= {<Payment/>}/> 
   
    <Route path="/BackTop" element={<BackTop />} />         
                
  </Routes>
  </Router>
    /*
    <Router>
      <Header/>
      <div className="App">
          
            <Routes>
              <Route path="/login">
                <Login/>
              </Route>
              <Route path='/checkout'>
                <Header/>
                <Checkout/>
              </Route>
              <Route path='/payment'>
                <Header/>
                <Elements stripe={promise}> 
                  <Payment/>
                </Elements>
              </Route>
              <Route path='/orders'>
                <Header/>
                <Orders/>
              </Route>
              <Route path='/'>
                <Header/>
                <Home/>
              </Route>
            </Routes>
      </div>
    </Router>
  */
  
  );
}

export default App;
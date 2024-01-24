import './App.css';
import Header from "../src/component/Header"
import Menu from './component/Menu';
import Home from './component/Home';
import Checkout from './component/Checkout';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Login from './component/Login';
import { auth } from './component/firebase';
import { useEffect} from 'react';
import { useStateValue } from './component/stateprovider';
import Payment from './component/payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './component/orders';
const promise = loadStripe('pk_test_51OXHo3SIuhtCKtX2UyfTzr3oHnqKGLeghzEeqfuAQ4ydysaV3X4f8jVQXww17O2gFuOPKqecefaCEQdQeMHbvQSv00PyCWuVIy')
function App() {
  const[{},dispatch] = useStateValue();
  useEffect(()=>{
    //will only runs once when the app component loads...
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ',authUser);
      if(authUser){
        // the user just logged in / the user was logged in
        dispatch({
          type:'SET_USER',
          user:authUser
        })
      }else{
        //the user is logged out
        dispatch({
          type:"CLEAR_USER",
          user:null
        })
      }
    });
  },[])
  return (
    <Router>
      <div className="App">
        
        <Switch>
        <Route path='/orders'>
          <Header />
          <Orders/>
        </Route> 
        <Route path='/login'>
          <Login/>
        </Route>
          <Route path='/checkout'>
            <Header />
            <Menu/>
            <Checkout/>
          </Route>
          <Route path='/payment'>
            <Header/>
            <Elements stripe={promise}>
              <Payment/>
            </Elements>
          </Route>
          <Route path='/'>
            <Header/>
            <Menu/>
            <Home/>
          </Route>

        </Switch>
        
        
      </div>
    </Router>
  );
}

export default App;

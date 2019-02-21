import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './layouts/Home';
import Header from './layouts/Header';
import Receipts from './components/Receipts';
import Payments from './components/Payments';
import Invoice from './components/Invoice';
import History from './components/History';
import Notification from './components/Notification';
import About from './components/Pages/About';
import Login from './components/Login';
import AddMaster from './layouts/AddMaster';

import { Provider } from './context';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//import './logo.svg';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="myMbill" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/receipts" component={Receipts} />
                <Route exact path="/payments" component={Payments} />
                <Route exact path="/invoice" component={Invoice} />
                <Route exact path="/history" component={History} />
                <Route exact path="/notification" component={Notification} />
                <Route exact path="/about" component={About} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/addmaster" component={AddMaster} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

/* return React.createElement(
     'div',
     { className: 'App' },
     React.createElement('h1', null, 'Flat Maintenance App')
   );

   const name = 'Harry';
   const showHello = false;
   const showMath = true;
   const num1 = 40;
   const num2 = 23;

   let math;

   if (showMath) {
     //math = <h4>1 + 1 = {1 + 1}</h4>;
     math = (
       <h2>
         {num1} + {num2} = {num1 + num2}
       </h2>
     );
   } else {
     math = null;
   }

 {showHello ? <h4>Hello {name.toUpperCase()}</h4> : null}
 {math}
*/

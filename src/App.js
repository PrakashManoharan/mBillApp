import React, { Component } from 'react';
import './App.css';

import Home from './components/Home';
import Header from './layouts/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="mBillApp" />
        <Home />
      </div>
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

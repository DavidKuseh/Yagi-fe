import React from 'react';
import './App.css';

import Main from '../src/Components/Main';
// import Home from '../src/Components/Home';
// import Products from '../src/Components/Products';
// import ContactUs from '../src/Components/ContactUs';

function App() {
  return (
    <div className="App">
      {/* <Route exact path='/' render={props => <Home {...props} />}/>
      <Route exact path= '/products' component= {Products} />
      <Route exact path= '/contact' component= {ContactUs} /> */}
      <Main />
    </div>
  );
}

export default App;

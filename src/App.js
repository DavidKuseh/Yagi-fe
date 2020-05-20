import React from 'react';
import './App.css';

import Main from '../src/Components/Main';
// import Navigation from '../src/Components/Navigation';
// import Footer from '../src/Components/Footer';


function App() {
  return (
    <div className="App">
      {/* <Route exact path='/' render={props => <Home {...props} />}/>
      <Route exact path= '/products' component= {Products} />
      <Route exact path= '/contact' component= {ContactUs} /> */}
      <Main />
      {/* <Navigation />
      <Footer /> */}
    </div>
  );
}

export default App;

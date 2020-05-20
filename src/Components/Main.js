import React from 'react';
import styled from 'styled-components';

import Navigation from '../Components/Navigation';
import Footer from '../Components/Footer';
// import Home from '../Components/Home';

const MainStyle = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
`
    

const Main = () => {
    return (
        <MainStyle>
            <Navigation />
            
            <Footer />
        </MainStyle>
    );
};

export default Main;
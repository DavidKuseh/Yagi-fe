import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import computer from '../Assets/Images/computer.jpg';
import accessories from '../Assets/Images/accessories.jpg';
import phones from '../Assets/Images/phones.png';
import services from '../Assets/Images/services.png';
import games from '../Assets/Images/game.png';

const HomeStyle = styled.section`
    .content {
        width: 70%;
        margin: auto;
        text-align: left;
        // border: 0.3rem solid black;

        h3 {
            padding: 1rem;
            background: black;
            color: white;
            text-align: left;
        }

        .categories {
            display: flex;
            justify-content: space-around;
        }
    }

    .new {
        width: 70%;
        margin: auto;
        text-align: left;

        h3 {
            padding: 1rem;
            background: black;
            color: white;
            text-align: left;
        }
    }

    .featured {
        width: 70%;
        margin: auto;
        text-align: left;

        h3 {
            padding: 1rem;
            background: black;
            color: white;
            text-align: left;
        }
    }
`

const Home = () => {
    return (
        <>
            <HomeStyle>
                <div className='content'>
                    <h3>Categories</h3>
                    <div className='categories'>
                        <Link to='/computers'>
                            <img src={computer} alt='computer' width='100px' height='100px' />
                            <p>Computers</p>
                        </Link>
                        <Link to='/accessories'>
                            <img src={accessories} alt='accessories' width='100px' height='100px' />
                            <p>Accessories</p>
                        </Link>
                        <Link to='/phones'>
                            <img src={phones} alt='phones' width='100px' height='100px' />
                            <p>Phones</p>
                        </Link>
                        <Link to='/games'>
                            <img src={games} alt='games' width='100px' height='100px' />
                            <p>Games</p>
                        </Link>
                        <Link to='/services'>
                            <img src={services} alt='services' width='100px' height='100px' />
                            <p>Services</p>
                        </Link>
                    </div>
                </div>
                <div className='new'>
                    <h3>New!</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className='featured'>
                    <h3>Featured</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className='featured'>
                    <h3>Featured</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>                 
               
            </HomeStyle>
        </>
    );
};

export default Home;
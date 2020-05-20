import React from 'react';
import {Link, Route} from 'react-router-dom';
import styled from 'styled-components';

import Products from '../Components/Products';
import ContactUs from '../Components/ContactUs';
import Login from '../Components/Login';
import Register from '../Components/Register';
import Home from '../Components/Home';

const NavStyle = styled.div`
    background: #59E087;
    display: flex;
    align-items: center;
    margin:0 auto;
    // position: fixed;
    top: 0;
    width: 100%;
    // overflow: hidden;

    .nav-container {
        display: flex;
        align-items: center;
        // padding: 2rem 0;
        margin: auto;

        .search {
            display: flex;

            input[type='search'] {
                width: 20rem;
            }
    
            button {
                padding: 0.5rem 2rem;
                margin-left: 0.5rem;
            }
        }
    
        .links {
            display: flex;
            justify-content: space-between;
    
            a {
                text-decoration: none;
                margin-right: 2rem;
            }
        }
        
        .nav-icons {
            display: flex;
            margin-left: 4rem;
            // align-items: center;

            a{
                align-items: center;
                background: #59E087;
                border:  0.2 rem solid #59E087;
                text-decoration: none;
                padding: 0.5rem 1.6rem;
                border-radius: 1rem;
            }

            a:hover {
                background: white;
            }
        }
    }
`

const Navigation = () => {
    return (
        <>
            <NavStyle>
                <section className= 'nav-container'>
                    <div className = 'links'>
                    <Link to= '/'><h2>Yagi</h2></Link>
                    </div>
                    <div className = 'search'>
                        <input 
                            type = 'search'
                            placeholder='Search for products, brands and categories'
                        />
                        <button>Search</button>
                    </div>
                    <div className = 'nav-icons'>       
                        <Link to= '/login'>Log in</Link>
                    </div>
                </section>
            </NavStyle>
            <Route exact path= '/login' component={Login} />
            <Route exact path= '/register' component={Register} />
            <Route exact path= '/' component={Home} />
            <Route exact path= '/products' component={Products} />
            <Route exact path= '/contact' component={ContactUs} />
        </>
    );
};

export default Navigation;
import React from 'react';
import {Link, Route, useHistory} from 'react-router-dom';
import styled from 'styled-components';

import Products from '../Components/Products';
import ContactUs from '../Components/ContactUs';
import Login from '../Components/Login';
import Register from '../Components/Register';
import Home from '../Components/Home';

import Accessories from '../Pages/Accessories';
import Computers from '../Pages/Computers';
import Games from '../Pages/Games';
import Phones from '../Pages/Phones';
import Services from '../Pages/Services';

const NavStyle = styled.div`
    background: #59E087;
    display: flex;
    align-items: center;
    margin:0 auto;
    top: 0;
    width: 100%;

    .nav-container {
        display: flex;
        align-items: center;
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

            button{
                align-items: center;
                background: #59E087;
                border:  0.2 rem solid #59E087;
                text-decoration: none;
                padding: 0.5rem 1.6rem;
                border-radius: 1rem;
            }

            button:hover {
                background: white;
            }
        }
    }
`

const Navigation = () => {

    const isAuth = localStorage.getItem("token");
    const history = useHistory();

    const logout = () => {
        localStorage.removeItem("token")
        history.push("/login")
    }

    return (
        <>
            <NavStyle >
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
                        {isAuth ? 
                        (<button onClick={logout}>
                            <Link to="/login">Log out</Link>
                        </button>
                        ):(
                        <button>
                            <Link to="/login">Log in</Link>
                        </button>)}
                    </div>
                </section>
            </NavStyle>
            <Route exact path= '/login' component={Login} />
            <Route exact path= '/register' component={Register} />
            <Route exact path= '/' component={Home} />
            <Route exact path= '/products' component={Products} />
            <Route exact path= '/contact' component={ContactUs} />
            <Route exact path = '/accessories' component = {Accessories} />
            <Route exact path = '/computers' component = {Computers} />
            <Route exact path = '/games' component = {Games} />
            <Route exact path = '/phones' component = {Phones} />
            <Route exact path = '/services' component = {Services} />
        </>
    );
};

export default Navigation;
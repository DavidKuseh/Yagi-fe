import React from 'react';
import {Link, Route} from 'react-router-dom';
import styled from 'styled-components';

import Products from '../Components/Products';
import ContactUs from '../Components/ContactUs';
import personIcon from '../Assets/Icons/person.png'
import cartIcon from '../Assets/Icons/cart.png'

const NavStyle = styled.div`
    background: #59E087;
    display: flex;
    align-items: center;
    margin: auto;
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
            align-items: center;

            img {
                margin-left: 1.5rem;
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
                            <img src={personIcon} alt='profile' width='25px' height='25px'/>
                            <p>Log in</p>
                            <img src={cartIcon} alt='cart'/>
                            <p>Cart</p>
                    </div>
                </section>
            </NavStyle>
            {/* <Route exact path= '/' component={Home} /> */}
            <Route exact path= '/products' component={Products} />
            <Route exact path= '/contact' component={ContactUs} />
        </>
    );
};

export default Navigation;
import React from 'react';

import styled from 'styled-components';

const FooterStyle = styled.div`
    background: #59E087;
    margin-top:auto;
    height: 10rem;
    padding: 2rem;

    .footer-menu {
        display: flex;
        justify-content: space-around;
        margin-bottom: 1.5rem;

        ul {
            margin: 0;
        }

        li {
            list-style-type: none;
        }

        .footer-menu-header {
            font-weight: bold;
        }
    }

    
`

const Footer = () => {
    return (
        <FooterStyle>
            <div className= 'footer-menu'>
                <ul>
                    <li className= 'footer-menu-header'>Learn more</li>
                    <li>Membership</li>
                    <li>Banner Advertising</li>
                    <li>Promote your ad</li>
                </ul>
                <ul>
                    <li className= 'footer-menu-header'>Help & Support</li>
                    <li>FAQ</li>
                    <li>Stay Safe</li>
                    <li>Contact Us</li>
                </ul>
                <ul>
                    <li className= 'footer-menu-header'>Social</li>
                    <li>Twitter</li>
                    <li>Facebook</li>
                    <li>Blog</li>
                    <li>Youtube</li>
                </ul>
                <ul>
                    <li className= 'footer-menu-header'>About Us</li>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div>
                <span>Copyright &copy; Yagi Team 2020</span>
            </div>
        </FooterStyle>
    );
};

export default Footer;
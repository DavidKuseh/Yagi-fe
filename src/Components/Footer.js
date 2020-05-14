import React from 'react';

import styled from 'styled-components';

const FooterStyle = styled.div`
    background: black;
`

const Footer = () => {
    return (
        <FooterStyle>
            <ul>
                <li>Learn more</li>
                <li>Membership</li>
                <li>Banner Advertising</li>
                <li>Promote your ad</li>
            </ul>
            <ul>
                <li>Help & Support</li>
                <li>FAQ</li>
                <li>Stay Safe</li>
                <li>Contact Us</li>
            </ul>
            <ul>
                <li>Social</li>
                <li>Twitter</li>
                <li>Facebook</li>
                <li>Blog</li>
                <li>Youtube</li>
            </ul>
            <ul>
                <li>About Us</li>
                <li>About Us</li>
                <li>Careers</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
            </ul>
        </FooterStyle>
    );
};

export default Footer;
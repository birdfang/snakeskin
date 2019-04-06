import React from 'react'
import styled from 'styled-components'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import About from '../pages/About'

const linkStyle = {
    color: '#FFFFFF', 
    textDecoration: 'none', 
    WebkitTextStrokeWidth: 1.2, 
    WebkitTextStrokeColor: '#000000'
}

const Nav = () => (
    <Navbar>
        <div style={{ position: 'absolute', bottom: 0, color: 'white' }}>
            <ul>
                <NavItem>

                    <StyledLink to="/">Home</StyledLink>
                </NavItem>
                <NavItem>
                    
                    <StyledLink to="/about">About</StyledLink>
                </NavItem>
                <NavItem>
                    <StyledLink to="/about">Contact</StyledLink>
                </NavItem>

                
            </ul>
        </div>

       
        
    </Navbar>
)

const Navbar = styled.div`
    position: absolute;
    width: 200px;
    ${'' /* background-color: #333333; */}
    height: 100vh;
    margin: 0px;
    top: 0;
    left: 0;
`

const NavItem = styled.li`

    list-style: none;
    

    ${'' /* &:hover {
        color: palevioletred;
    } */}
`

const StyledLink = styled(Link)`
    font-size: 48px;
    font-family: Chewy;
    text-decoration: none;
    color: #FFFFFF;
    -webkit-text-stroke-width: 1.2px;
    -webkit-text-stroke-color: black;

    &:hover {
        color: palevioletred;
    }
`

export default Nav;
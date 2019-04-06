import React from 'react'
import styled from 'styled-components'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import { HeadOne, HeadTwo } from '../styles/sc_styles'

const linkStyle = {
    color: '#FFFFFF', 
    textDecoration: 'none', 
    WebkitTextStrokeWidth: 1.2, 
    WebkitTextStrokeColor: '#000000'
}

const Nav = () => (
    <Navbar>
        <div style={{ color: 'white', flex: 3 }}>
           <Title to="/">HRC</Title>
        </div>
        <div id="navlinks" style={{ flex: 1 }}>
            <ul style={{  }}>
                {/* <NavItem>
                    <StyledLink to="/">Home</StyledLink>
                </NavItem> */}
                <NavItem>
                    <StyledLink to="/work">Work</StyledLink>
                </NavItem>
                <NavItem>
                    <StyledLink to="/contact">Contact</StyledLink>
                </NavItem>

                
            </ul>
        </div>

       
        
    </Navbar>
)

const Navbar = styled.div`
    display: flex;
    align-content: space-between;
    ${'' /* position: absolute; */}
    ${'' /* width: 200px; */}
    ${'' /* background-color: #333333; */}
    width: 100vw;
    position: fixed;
    z-index: 400;
    background-color: rgba(0, 0, 0, 0.8);

    ${'' /* height: 100vh; */}
    ${'' /* margin: 0px; */}
    ${'' /* top: 0;
    left: 0; */}

    @media(max-width: 350px) {
        display: block;
        
        > div > ul {
            ${'' /* display: none; */}
            display: block;
            padding-inline-start: 0;
        }

        > div > a {
            display: block;
        }

        > div > ul > li {
            ${'' /* padding: 0; */}
            margin: 0 auto;
        }
    }

`

const NavItem = styled.li`

    list-style: none;
    display: inline;
    padding: 0 15px;
    

    ${'' /* &:hover {
        color: palevioletred;
    } */}
`

const StyledLink = styled(Link)`
    font-size: 26px;
    font-family: Chewy;
    text-decoration: none;
    color: #FFFFFF;
    -webkit-text-stroke-width: 1.2px;
    -webkit-text-stroke-color: black;

    &:hover {
        color: palevioletred;
    }
`

const Title = styled(StyledLink)`
    font-size: 30px;
    font-family: Chewy;
    text-decoration: none;
    color: inherit;
`

export default Nav;
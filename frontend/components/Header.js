import React from 'react'
import Link from "next/link"
import Nav from './Nav'
import styled from "styled-components"

const Logo = styled.h1`
    font-size: 4rem;
    position: relative;
    margin: 2rem;
    z-index:2;
    transform: skew(-7deg);
    background-color: red;
    a {
        color: white;
        text-decoration: none;
        padding:0.5rem 1rem;
    }
`

const HeaderStyles = styled.header`
    
    .bar {
        border-bottom: 10px solid var(--black,black);
        display:grid;
        grid-template-columns:auto 1fr;
        justify-content: space-between;
        align-items: center;
    }
    .sub-bar {
        display: grid;
        grid-template-columns: auto 1fr;
        border-bottom: 1px solid var(--black,black) ;
        padding:1rem
    }

`

const Header = () => {
    return (
        <HeaderStyles>
           <div className="bar">
                <Logo>
                    <Link href="/"> 
                        ReSell 
                    </Link>
                </Logo>
           </div>
           <div className="sub-bar">
                Search
            </div>
           <Nav/>
           
        </HeaderStyles>
    )
}

export default Header

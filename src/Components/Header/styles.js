import styled from 'styled-components'

export const HeaderContainer = styled.header`
    width: 100vw;
    height: 8vh;
    background-color: #ffffff;
    border: 1px solid black;
    display: flex;
    justify-content: space-around;
`

export const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 2rem;
    gap: 16px;
    width: 40%;
`

export const NavBar = styled.nav`
    background-color: #f7b158;
    width: 100%;
    font-weight: bold;

`
export const OptionsList = styled.ul`
    display: flex;
    list-style-type: none;
    justify-content: space-evenly;
    height: 100%;
    width: 100%;
    align-items: center;
    
`
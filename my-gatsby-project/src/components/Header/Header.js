import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  width: 100%;
  background-color: #cc0000;
  text-align: center;
  padding: 2cap 0; 
`

const LargeText = styled.h1`
  font-size: 2.5rem; 
  color: #fff; 
  margin: 40px; 
  
`

const SmallText = styled.h3`
  font-size: 1rem; 
  color: #fff; 
  margin: 10px; 
  margin-right: 50px;
  margin-left:50px;
`

const Header = () => {
  return (
    <HeaderContainer>
      <LargeText>Grizzly Rampage!</LargeText>
      <SmallText>Welcome to the Grizzly Rampage info blog! In this custom Gatsby page you can explore some of the characters from my upcoming PC game, Grizzly Rampage.
        Grizzly Rampage is a mini action platformer built by me, Carter Manley, and set to release in Summer 2024! This project has been a labor of love throughout my 
        journey as a software developer, and has helped me challenge myself in new ways.
      </SmallText>
    </HeaderContainer>
  )
}

export default Header

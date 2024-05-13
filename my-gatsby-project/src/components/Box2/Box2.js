import React from 'react'
import styled from 'styled-components'
import { Box } from 'rebass'
import myGif from './CamperCharacterGIF.gif'

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30vh; 
`
const StyledBox = styled(Box)`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
  width: 50%;
  height: 300px; 
  margin: 20px auto; 
  padding: 20px; 
`
const Header = styled.h2`
  margin-bottom: 10px;
`

const Gif = styled.img`
  width: 20%;
  float: left;
  margin-right: 20px;
`

const Text = styled.p`
  width: 45%; 
  float: left; 
`

const MyBox2 = () => {
  return (
    <CenteredContainer>
    <StyledBox>
      <Header>Camper</Header>
      <Gif src={myGif} alt="My GIF" />
      <Text>
        This camper isn't as innocent as he seems! He will run, jump, and stop at nothing to chop down your favorite tree. 
        While he doesn't have an attack as deadly as some of his compadres, don't let this fool get close to your lumber, or he'll
        chop it down quickly!
      </Text>
    </StyledBox>
    </CenteredContainer>
  )
}


export default MyBox2
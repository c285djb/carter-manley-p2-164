import React from 'react'
import styled from 'styled-components'
import { Box } from 'rebass'
import myGif from './GrizzlyCharacterGif.gif'

//import { IconName } from 'styled-icons/material'

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh; 
`

const StyledBox = styled(Box)`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
  width: 50%;
  height: 300px; 
  margin: 5px auto; 
  padding: 20px; 
`
const Header = styled.h2`
  margin-bottom: 10px;
`

const Gif = styled.img`
  width: 50%;
  float: left;
  margin-right: 20px;
`

const Text = styled.p`
  width: 45%; 
  float: left; 
`

const MyBox = () => {
  return (
    <CenteredContainer>
    <StyledBox>
      <Header>Big John Henry</Header>
      <Gif src={myGif} alt="My GIF" />
      <Text>
        Big John Henry is a bear of legendary strength. The locals say he's 7 foot tall if he was an inch! Big JH has lived a peaceful life in the high mountains
        of Bearface ridge, but recently the Bearface Logging Company has cut too close to home... now Big John Henry is about to show his mean side...  
      </Text>
    </StyledBox>
    </CenteredContainer>
  )
}



export default MyBox

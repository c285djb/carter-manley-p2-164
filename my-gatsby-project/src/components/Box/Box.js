import React from 'react'
import styled from 'styled-components'
import { Box } from 'rebass'
import { IconName } from 'styled-icons/material'

const StyledBox = styled(Box)`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
`

const MyBox = () => {
  return (
    <StyledBox p={4}>
      This is a styled box!
    </StyledBox>
  )
}

// const MyIcon = () => {
//     return <IconName />
//   }

export default MyBox

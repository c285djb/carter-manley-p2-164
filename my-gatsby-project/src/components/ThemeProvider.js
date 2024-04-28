import { ThemeProvider } from 'styled-components'
import MyBox from './Box/Box'

const theme = {
  colors: {
    primary: '#007bff',
    text: '#333',
  },
}

const MyApp = () => {
  return (
    <ThemeProvider theme={theme}>
      <MyBox />
    </ThemeProvider>
  )
}


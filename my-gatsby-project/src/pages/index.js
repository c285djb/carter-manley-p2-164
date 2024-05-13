import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { theme } from '../components/ThemeProvider'
import { ThemeProvider } from 'styled-components'
import Header from '../components/Header/Header'

import MyBox from "../components/Box/Box"
import MyBox2 from "../components/Box2/Box2"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"



const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <Header/>
  <div>
    <MyBox />
    <MyBox2 />
  </div>
</ThemeProvider>
)


export const Head = () => <Seo title="Home" />

export default IndexPage

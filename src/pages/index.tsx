import * as React from "react"
import { Link } from "gatsby"
import '../styles/index.scss';
import Layout from '../components/layout'
import Home from '../components/home'

const IndexPage = () => {
  return (
    <Layout>
      <Home></Home>
    </Layout>
  )
}

export default IndexPage

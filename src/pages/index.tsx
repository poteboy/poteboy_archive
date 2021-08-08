import * as React from "react"
import { Link } from "gatsby"
import Layout from '../components/layout';
import Home from '../components/home';
import Top from '../components/top'
import Meta from '../components/meta';

const IndexPage = () => {
  return (
    <Layout path={`home`}>
      <Meta/>
      <span style={{marginLeft: '0px'}}><Home path='home'>{null}</Home></span>
    </Layout>
  )
}

export default IndexPage

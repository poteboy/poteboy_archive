import * as React from "react"
import { Link } from "gatsby"
import '../styles/index.scss';
import Layout from '../components/layout';
import Home from '../components/home';
import Top from '../components/top';
import Meta from '../components/meta';

const IndexPage = () => {
  return (
    <Layout>
      <Meta/>
      <Top></Top>
    </Layout>
  )
}

export default IndexPage

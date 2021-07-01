import * as React from "react"
import { Link } from "gatsby"
import '../styles/index.scss';
import Layout from '../components/layout';
import Home from '../components/home';
import Profile from '../components/profile'
import Meta from '../components/meta';

const About = () => {
  return (
    <Layout>
      <Meta/>
      <Home path="about"><Profile/></Home>
    </Layout>
  )
}

export default About
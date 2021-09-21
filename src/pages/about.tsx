import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Home from '../components/home';
import Profile from '../components/profile';
import Meta from '../components/meta';
import { Spacer } from '@src/components/Lib/Spacer';

const About = () => {
  return (
    <Layout path={`about`} side={true}>
      <Meta />
      <Spacer size={50} />
      <Profile />
    </Layout>
  );
};

export default About;

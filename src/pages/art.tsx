import React, { FC } from 'react';
import Layout from '../components/layout';
import Home from '../components/home';
import Top from '../components/illustration'
import Meta from '../components/meta';
import Illustration from '../components/illustration';

const Art = () => {
  return (
    <Layout>
      <Meta/>
      <Home path='art'><Illustration /></Home>
    </Layout>
  )
}

export default Art
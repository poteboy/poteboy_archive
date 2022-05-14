import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Home from '../components/home';
import Meta from '../components/meta';
import { path, Path } from '../entity/path';
import { Spacer } from '@src/components/Lib/Spacer';

const IndexPage = () => {
  const meta = {
    title: 'Keita Furuse',
  };

  return (
    <Layout path={path.home as Path} side={true}>
      <Meta />
      <Home path="home">{null}</Home>
      <Spacer size={30} />
    </Layout>
  );
};

export default IndexPage;

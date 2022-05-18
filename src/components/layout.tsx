import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from './header';
import Footer from './footer';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { SideBar } from '@src/components/sidebar';
import Meta from './meta';
import { size } from '@src/constants/size';
import { Path } from 'src/entity';

interface Props {
  children: object;
  path?: Path;
  side: boolean;
}

const Layout: FC<Props> = ({ children, path, side }) => {
  return (
    <Wrapper>
      <Header path={path} />
      <Contetnt>
        <Child side={side}>{children}</Child>
        {!!side && <SideBar />}
      </Contetnt>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Contetnt = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 100%;
  justify-content: normal;
  @media (max-width: ${size.device.tablet}px) {
    flex-direction: column;
  }
`;

const Child = styled.div<{ side?: boolean }>`
  width: ${props => (props.side ? '65%' : '100%')};
  @media (max-width: ${size.device.tablet}px) {
    width: 100%;
  }
`;

export default Layout;

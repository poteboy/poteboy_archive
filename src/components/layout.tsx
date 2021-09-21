import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from './header';
import { useStaticQuery, graphql, Link } from 'gatsby';
import SideBar from './SideBar/Sidebar';
import Meta from './meta';
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
        {children}
        {!!side && <SideBar />}
      </Contetnt>
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
`;

export default Layout;

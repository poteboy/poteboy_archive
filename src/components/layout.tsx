import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from './header';
import { useEnableContext } from './context/enable';
import Particles from 'react-particles-js';
import Meta from './meta';
import { Path } from 'src/entity';

interface Props {
  children: object;
  path?: Path;
  side: boolean;
}

const Layout: FC<Props> = ({ children, path }) => {
  const [enable, setEnable] = useState(false);

  return (
    <Wrapper>
      <Header path={path} />
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export default Layout;

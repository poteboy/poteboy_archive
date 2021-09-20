import React, { FC } from 'react';
import styled from 'styled-components';
import { Path } from 'src/entity';

type Props = {
  path?: Path;
};

const Header: FC<Props> = props => {
  return <Wrapper />;
};

const Wrapper = styled.header`
  position: sticky;
  top: 0px;
  display: flex;
  flex-shrink: 0;
  flex-direction: row;
  justify-content: space-between;
  height: 56px;
`;

export default Header;

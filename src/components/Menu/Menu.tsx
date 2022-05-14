import React, { FC } from 'react';
import styled from 'styled-components';
import { Spacer } from '@src/components/Lib/Spacer';
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { Link } from 'gatsby';

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const menus = [
  {
    name: 'HOME',
    path: '/',
  },
  {
    name: 'ABOUT',
    path: '/about',
  },
  {
    name: 'BLOG',
    path: '/blog',
  },
  {
    name: 'ILLUSTRATION',
    path: '/illustration',
  },
];

const Menu: FC<Props> = props => {
  return (
    <Wrapper
      onClick={() => {
        props.setIsOpen(false);
      }}
    >
      <Container>
        <Spacer size={50} />
        <List>
          {menus.map((v, index) => {
            return (
              <Link key={index} to={v.path} style={{ textDecoration: 'none'}}>
                <ListItem button={true}>
                  <Text>{v.name}</Text>
                </ListItem>
              </Link>
            );
          })}
        </List>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  width: 260px;
`;

const Container = styled.div`
  justify-content: center;
  align-items: center;
`;

const Text = styled(ListItemText)`
  text-align: center;
  color: gray;
`;

export default Menu;

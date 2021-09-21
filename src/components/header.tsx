import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Path } from 'src/entity';
import { Link } from 'gatsby';
import { Button, Drawer, IconButton } from '@material-ui/core';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import Menu from '@src/components/Menu/Menu';

type Props = {
  path?: Path;
};

const Header: FC<Props> = props => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Wrapper>
        <Home>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <HomeButton
              style={{
                borderRadius: 5,
                backgroundColor: '#0de0ba',
                color: 'snow',
                fontFamily: 'phenomena-bold',
                fontSize: 18,
              }}
            >
              HOME
            </HomeButton>
          </Link>
        </Home>
        <IconButton
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <MenuIcon
            style={{
              width: 32,
              height: 32,
            }}
          />
        </IconButton>
      </Wrapper>
      <Drawer anchor="right" open={isOpen}>
        <Menu setIsOpen={setIsOpen} />
      </Drawer>
    </>
  );
};

const Wrapper = styled.header`
  background-color: white;
  position: sticky;
  top: 0px;
  display: flex;
  flex-shrink: 0;
  flex-direction: row;
  justify-content: space-between;
  z-index: 1000;
  height: 56px;
  width: 100vw;
  /* box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15); */
  box-shadow: rgb(176 186 197 / 20%) 0px 6px 20px;
`;

const Home = styled.div`
  justify-content: center;
  align-self: center;
  padding: 3px 20px;
`;

const HomeButton = styled(Button)`
  border-radius: 4px;
  border: 2px solid #8484843d;
  :hover {
    /* fill: rebeccapurple; */
    box-shadow: 0 0 5px #3affdb;
  }
`;

const MenuIcon = styled(MenuRoundedIcon)`
  width: 32px;
  height: 32px;
`;

export default Header;

// #acb6e5
// #86fde8

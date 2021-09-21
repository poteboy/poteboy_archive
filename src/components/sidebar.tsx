import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { size } from '@src/constants/size';
import { Path } from '@src/entity/path';
import { Spacer } from '@src/components/Lib/Spacer';
import Image from '@src/components/Lib/Image';

type Props = {};

const SideBar: FC<Props> = () => {
  return (
    <Wrapper>
      <Spacer size={50} />
      <Container>
        <IconCard>
          <Icon filename="icon/poteicon.png" />
        </IconCard>
        <Spacer size={40} />
        <Profile>
          <Myname>Keita Furuse</Myname>
          <AboutMe>Front-End / iOS Developer</AboutMe>
        </Profile>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 25%;
  padding: 0 0 0 30px;
  justify-content: flex-end;
  @media (max-width: ${size.device.tablet}px) {
    width: 80%;
    margin-top: 50px;
  }
`;

const Container = styled.div`
  margin: 0px 15px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background: white;
  @media (max-width: ${size.device.tablet}px) {
    margin: 10px 0px;
  }
`;

const IconCard = styled.div`
  align-self: center;
  object-fit: contain;
  height: 100px;
`;

const Icon = styled(Image)`
  object-fit: contain;
  width: 140px;
  height: 140px;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  margin: 0 auto;
`;

const Myname = styled.div`
  font-weight: 600;
  text-align: center;
  align-items: center;
  padding: 10px 20px;
  color: gray;
  font-size: 40px;
  font-family: phenomena-bold;
`;

const AboutMe = styled.div`
  padding: 10px 20px;
  color: white;
  font-size: x-large;
  font-family: phenomena-regular;
  background: linear-gradient(to right, #acb6e5, #86fde8);
  box-shadow: 0 0 5px #acb6e5;
  border-radius: 20px;
`;

export default SideBar;

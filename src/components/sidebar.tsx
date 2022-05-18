import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { size } from '@src/constants/size';
import { Path } from '@src/entity/path';
import { Spacer } from '@src/components/Lib/Spacer';
import Image from '@src/components/Lib/Image';
import { ZennIcon } from '@src/components/icons/zenn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

type Props = {};

export const SideBar: FC<Props> = () => {
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
          <AboutMe>Design Engineer</AboutMe>
          <SocialNetworks>
            <a href="https://twitter.com/_poteboy_" target="_blank">
              <SnsIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://github.com/poteboy" target="_blank">
              <SnsIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://zenn.dev/poteboy" target="_blank">
              <ZennIcon />
            </a>
          </SocialNetworks>
        </Profile>
        <Introduction>
          I 🍑 React Native & Figma🚀 <br />
          絵も描きます🎨
        </Introduction>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 25%;
  padding: 0 0 0 30px;
  justify-content: flex-end;
  @media (max-width: ${size.device.tablet}px) {
    width: 90%;
    margin-top: 50px;
    align-self: center;
    padding: 0 0 0 0px;
  }
`;

const Container = styled.div`
  margin: 0px 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  position: sticky;
  top: 80px;
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
  font-size: 30px;
  font-family: phenomena-bold;
`;

const AboutMe = styled.div`
  text-align: center;
  padding: 7px 14px;
  margin-bottom: 10px;
  color: white;
  font-size: large;
  font-family: phenomena-regular;
  background: linear-gradient(to right, #acb6e5, #86fde8);
  box-shadow: 0 0 5px #acb6e5;
  border-radius: 20px;
`;

const SocialNetworks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 15px 0;
  width: 80%;
  align-self: center;
`;

const SnsIcon = styled(FontAwesomeIcon)`
  color: gray;
  :hover {
    color: #3affdb;
    cursor: pointer;
  }
`;

const Introduction = styled.p`
  align-self: center;
  width: 90%;
  text-align: center;
`;

const SVGIcon = styled(ZennIcon)`
  background-color: gray;
  height: 40px;
  width: 40px;
  color: gray;
  :hover {
    color: #3affdb;
    cursor: pointer;
  }
`;

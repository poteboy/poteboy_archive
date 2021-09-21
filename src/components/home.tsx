import React, { FC, useEffect, useState, ReactNode } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import {
  faGithub,
  faLinkedin,
  faTwitter,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons';
import { faPaintBrush, faPalette } from '@fortawesome/free-solid-svg-icons';
import styled, { keyframes } from 'styled-components';
import { size } from '@src/constants/size';
import { Path } from '@src/entity/path';
import { Spacer } from '@src/components/Lib/Spacer';
import { ContentContainer } from '@src/components/Lib/ContentContainer';
import Image from '@src/components/Lib/Image';
import { projects, illustrations } from '@src/entity';
import ProjectCard from '@src/components/Card/ProjectCard';
import IllustrationCard from '@src/components/Card/IllustrationCard';
import { TiArrowForward } from 'react-icons/ti';

type Props = {
  children: Partial<ReactNode>;
  path: Path;
};

const Home: FC<Props> = ({ children, path }) => {
  // animation: ${IconTransition} 3s ease-in-out infinite;

  const image = useStaticQuery(
    graphql`
      {
        file(name: { eq: "poteicon" }) {
          publicURL
        }
      }
    `,
  );

  return (
    <ContentContainer>
      <Wrapper>
        <Table path={path}>
          <IconBox>
            <IconImage
              src={image.file.publicURL}
              alt="keita furuse aka poteboy's icon"
            />
          </IconBox>
          <Profile>
            <Myname>Keita Furuse</Myname>
            <AboutMe>Front-End / iOS Developer</AboutMe>
          </Profile>
        </Table>
        <Spacer size={40} />
        <Header>
          <Title>PROJECTS</Title>
          <SeeAll>
            SEE ALL
            <TiArrowForward style={{ paddingLeft: 10 }} />
          </SeeAll>
        </Header>
        <Projects>
          {projects.map(v => {
            return <ProjectCard project={v} key={v.slug} />;
          })}
        </Projects>
        <Spacer size={30} />
        <Header>
          <Title>ILLUSTRATIONS</Title>
          <SeeAll>
            SEE ALL
            <TiArrowForward style={{ paddingLeft: 10 }} />
          </SeeAll>
        </Header>
        <Projects>
          {illustrations.map(v => {
            return <IllustrationCard illustration={v} key={v.slug} />;
          })}
        </Projects>
        <Spacer size={50} />
        {children}
      </Wrapper>
    </ContentContainer>
  );
};

export default Home;

const Wrapper = styled.div`
  margin: 0 auto;
`;

const Table = styled.div<{ path: Path }>`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 20px;
  @media (max-width: ${size.device.tablet}px) {
    width: auto;
    flex-direction: column;
  }
`;

const IconBox = styled.div`
  padding: 5vh;
  border-radius: 20px;
  @media (max-width: 1194px) {
    margin: 0 auto 0 auto;
    padding: 0;
  }
`;
// background: linear-gradient(to right, #acb6e5, #86fde8);

const Beat = keyframes`
  0% {
    transform: scale(1, 1, 1);
    text-shadow: 0px 0px 100px;
  }
  11% {
    transform: scale(1.03, 1.03);
  }
  22% {
    transform: scale(1, 1);
  }
  33% {
    transform: scale(1.05, 1.05);
  }
  44% {
    transform: scale(1, 1);
    text-shadow: 0px 0px 100px;
  }
  100% {
    transform: scale(1, 1);
    text-shadow: 0px 0px 100px;
  }
`;

const IconImage = styled.img`
  text-align: center;
  border-radius: 80px;
  width: 140px;
  height: 140px;
  margin: auto;
  animation: 1.24s infinite ${Beat};
  // box-shadow: 2px 3px 7px #2dcece;
  @media (max-width: ${size.device.tablet}px) {
    width: 90px;
    height: 90px;
  }
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 50%;
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

const Projects = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-start;
  @media (max-width: ${size.device.tablet}px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.h3`
  text-align: left;
  align-self: flex-start;
  font-family: phenomena-bold;
  letter-spacing: 1.5px;
  padding: 15px;
`;

const SeeAll = styled.div`
  font-family: phenomena-bold;
  align-self: center;
  padding: 10px;
  :hover {
    border-radius: 20px;
    box-shadow: 18px 18px 36px #d5d8e0, -18px -18px 36px #ffffff;
    cursor: pointer;
  }
`;

interface SnsLink {
  link: string;
  name: string;
  iconName: IconDefinition;
}

const SnsLinks: SnsLink[] = [
  {
    link: 'https://github.com/poteboy',
    name: 'GitHub',
    iconName: faGithub,
  },
  {
    link: 'https://www.linkedin.com/in/keitafuruse/',
    name: 'LinkedIn',
    iconName: faLinkedin,
  },
  {
    link: 'https://twitter.com/_poteboy_',
    name: 'Twitter',
    iconName: faTwitter,
  },
  {
    link: 'https://www.pixiv.net/users/59139347',
    name: 'Pixiv',
    iconName: faPalette,
  },
];

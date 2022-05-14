import React, { FC } from 'react';
import styled from 'styled-components';
import { Project, projects } from '@src/entity';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { Spacer } from '@src/components/Lib/Spacer';
import { size } from '@src/constants/size';
import Image from '@src/components/Lib/Image';

type Props = {
  project: Project;
};

const ProjectCard: FC<Props> = ({ project }) => {
  return (
    <ExternalLink href={project.url} target="__blank">
      {/* <Wrapper>
        <Card> */}
      <AppImg filename={project.fileName} />
      {/* </Card>
        <Tags>
          {project.tags.map((v, index) => {
            return <Tag key={index}>{v}</Tag>;
          })}
        </Tags>
        <Title>{project.name}</Title>
      </Wrapper> */}
    </ExternalLink>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 18px 18px 23px #c9ccd4, -18px -18px 23px #ffffff;
  border-radius: 20px;
  padding: 15px;
  width: 200px;
  gap: 10px;
  margin: 0 15px;
  transition: transform 0.1s linear;
  :hover {
    transform: translateY(-10px);
  }
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AppImg = styled(Image)`
  object-fit: contain;
  height: 200px;
  width: 200px;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  transition: transform 0.1s linear;
  :hover {
    transform: translateY(-6px);
  }
`;

const Title = styled.div`
  font-family: demilight;
  text-align: center;
  font-weight: bold;
  font-size: large;
  padding: 0px 0 10px 0;
`;

const Description = styled.div`
  padding: 5px 0;
  color: gray;
  font-size: smaller;
  word-break: break-all;
  width: 180px;
`;

const Tags = styled.div`
  width: 90%;
  justify-content: flex-start;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-family: phenomena-regular;
  letter-spacing: 2px;
`;

const Tag = styled.div`
  background: #fd73a4;
  box-shadow: 0 0 5px #fd73a4;
  color: white;
  padding: 3px 10px;
  border-radius: 5px;
  font-size: x-small;
  align-self: flex-start;
  margin-right: 10px;
`;

const ExternalLink = styled.a`
  text-decoration: none;
  text-decoration: none;
  margin: 0 10px;
  @media (max-width: ${size.device.tablet}px) {
    margin: 15px 0;
  }
`;

export default ProjectCard;

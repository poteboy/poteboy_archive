import React, { FC } from 'react';
import styled from 'styled-components';
import { Project, projects } from '@src/entity';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { Spacer } from '@src/components/Lib/Spacer';
import Image from '@src/components/Lib/Image';

type Props = {
  project: Project;
};

const ProjectCard: FC<Props> = ({ project }) => {
  return (
    <Wrapper>
      <Card>
        <AppImg filename={project.fileName} />
      </Card>
      <Tags>
        {project.tags.map((v, index) => {
          return <Tag key={index}>{v}</Tag>;
        })}
      </Tags>
      <Title>{project.name}</Title>
    </Wrapper>
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
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AppImg = styled(Image)`
  object-fit: contain;
  max-width: 95%;
  max-height: 90%;
  border-radius: 20px;
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

export default ProjectCard;

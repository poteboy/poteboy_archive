import React, { FC } from 'react';
import styled from 'styled-components';
import { Project, projects } from '@src/entity';
import { useStaticQuery, graphql, Link } from 'gatsby';
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
      <Title>{project.name}</Title>
      <Description>{project.description}</Description>
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
  text-align: center;
  font-weight: bold;
  padding: 20px 0 0 0;
`;

const Description = styled.div`
  padding: 5px 0;
  color: gray;
  font-size: smaller;
  word-break: break-all;
  width: 180px;
`;

export default ProjectCard;

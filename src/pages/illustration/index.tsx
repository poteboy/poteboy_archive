import React from 'react';
import Layout from '../../components/layout';
import Home from '../../components/home';
import BlogPost from '../../components/BlogList/BlogList';
import Meta from '../../components/meta';
import { projects, illustrations } from '@src/entity';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { size } from '@src/constants/size';
import styled, { keyframes } from 'styled-components';
import { Spacer } from '@src/components/Lib/Spacer';
import IllustrationCard from '@src/components/Card/IllustrationCard';

const Illustration = () => {
  return (
    <Layout path={`blog`} side={true}>
      <Meta />
      <Spacer size={50} />
      <Wrapper>
        <Container>
          {illustrations.map((v, index) => {
            return (
              <Card key={index}>
                <IllustrationCard illustration={v} />
              </Card>
            );
          })}
        </Container>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div`
  width: 90%;
  max-width: 600px;
  margin-left: auto;
  @media (max-width: ${size.device.tablet}px) {
    width: 100%;
    margin: auto;
  }
`;

const Container = styled.div`
  padding: 30px;
  background-color: hsla(0, 0%, 100%, 0.5);
  border-radius: 6px;
  box-shadow: 0 0 10px rgb(0 0 0 / 16%);
  min-height: 100px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Card = styled.div`
  margin: 10px;
  @media (max-width: ${size.device.tablet}px) {
    margin: 10px auto;
  }
`;

export default Illustration;

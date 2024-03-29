import React, { FC } from 'react';
import styled from 'styled-components';
import { Illustration, illustrations } from '@src/entity';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { size } from '@src/constants/size';
import Image from '@src/components/Lib/Image';

type Props = {
  illustration: Illustration;
};

const IllustrationCard: FC<Props> = ({ illustration }) => {
  return (
    <ExternalLink href={illustration.url} target="__blank">
      {/* <Wrapper>
        <Card> */}
      <AppImg filename={illustration.fileName} />
      {/* </Card>
      </Wrapper> */}
    </ExternalLink>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 15px;
  box-shadow: 18px 18px 23px #c9ccd4, -18px -18px 23px #ffffff;
  border-radius: 20px;
  padding: 15px;
  width: 200px;
  transition: transform 0.1s linear;
  @media (max-width: ${size.device.tablet}px) {
    margin: 15px 0;
  }
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
  object-fit: cover;
  height: 200px;
  width: 200px;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  transition: transform 0.1s linear;
  :hover {
    transform: translateY(-6px);
  }
`;

const ExternalLink = styled.a`
  text-decoration: none;
  margin: 0 10px;
  @media (max-width: ${size.device.tablet}px) {
    margin: 15px 0;
  }
`;

export default IllustrationCard;

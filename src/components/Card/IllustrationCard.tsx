import React, { FC } from 'react';
import styled from 'styled-components';
import { Illustration } from '@src/entity';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { size } from '@src/constants/size';
import Image from '@src/components/Lib/Image';

type Props = {
  illustration: Illustration;
};

const IllustrationCard: FC<Props> = ({ illustration }) => {
  return (
    <Wrapper>
      <Card>
        <AppImg filename={illustration.fileName} />
      </Card>
    </Wrapper>
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
  @media (max-width: ${size.device.tablet}px) {
    margin: 15px 0;
  }
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AppImg = styled(Image)`
  object-fit: cover;
  height: 180px;
  width: 180px;
  border-radius: 20px;
`;

export default IllustrationCard;

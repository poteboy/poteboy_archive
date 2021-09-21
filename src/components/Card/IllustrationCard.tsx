import React, { FC } from 'react';
import styled from 'styled-components';
import { Illustration } from '@src/entity';
import { useStaticQuery, graphql, Link } from 'gatsby';
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
  margin: 0 10px;
`;

const Card = styled.div`
  background: white;
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 0px 4px 8px rgb(0 0 0 / 9%);
  border-radius: 20px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AppImg = styled(Image)`
  object-fit: contain;
  max-height: 90%;
  max-width: 90%;
  border-radius: 20px;
`;

export default IllustrationCard;

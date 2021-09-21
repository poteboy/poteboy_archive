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
      <Container>
        <IconCard>
          <Icon
            filename="poteicon"
            style={{
              objectFit: 'contain',
              width: 140,
              height: 140,
            }}
          />
        </IconCard>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 30%;
`;

const Container = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background: white;
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

const Test = styled.img`
  object-fit: contain;
  width: 140px;
  height: 140px;
`;

export default SideBar;
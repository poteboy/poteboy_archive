import styled from 'styled-components';
import { size } from '@src/constants/size';

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 16px;
  margin: 0 auto;
  @media (max-width: ${size.device.tablet}px) {
    width: auto;
  }
`;

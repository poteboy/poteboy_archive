import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Spacer } from '@src/components/Lib/Spacer';

const Footer = () => {
  const title = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `).site.siteMetadata.title;

  return <Spacer size={100} />;
};

const Foot = styled.footer`
  margin-top: 5vh;
  padding: 3vh;
  display: flex;
  justify-content: center;
`;

const Text = styled.div;

export default Footer;

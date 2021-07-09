import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Link } from 'gatsby';
import styled from 'styled-components'
const style = require('../styles/footer.module.scss');


const Footer = () => {

    const title = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                title
        }
      }
    }
    `).site.siteMetadata.title

    return(
        <Foot>
            <div className={style.footer}>
                <p>Copyright©2021 Keita Furuse</p>
            </div>
        </Foot>
    )
}

const Foot = styled.footer`
    margin-top: 5vh;
    padding: 3vh;
    display: flex;
    justify-content: center;
`

const Text = styled.div

export default Footer
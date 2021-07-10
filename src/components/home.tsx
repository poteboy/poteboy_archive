import React, { FC, useEffect, useState } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby';
import { faGithub, faLinkedin, faTwitter, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faPaintBrush, faPalette } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Path } from 'src/entity/path';

const style = require('../styles/home.module.scss');

type Props =  {
    children: any,
    path: Path
}

const Home: FC<Props> = ({children, path}) => {

    const isBrowser = typeof window !== "undefined"

    const [width, setWidth] = useState(
        typeof window !== "undefined" ? window.innerWidth : 1195
      );
    type Orientation = "portrait" | 'landscape';

    const [orientation, setOrientation] = useState<Orientation>(
        typeof window !== "undefined" ? (window.innerWidth > window.innerHeight ? 'landscape' : 'portrait') : 'portrait'
    );
    useEffect(() => {
        const updateWidth = () => {
            setWidth(window.innerWidth)
            if(window.innerHeight > window.innerWidth){
                setOrientation('portrait')
            } else {
                setOrientation('landscape')
            }
        }
        window.addEventListener('resize', updateWidth);
        return(() => window.removeEventListener('resize', updateWidth))
    })

    const image = useStaticQuery(
        graphql`
        {
            file(name: { eq: "poteicon" }) {
                publicURL
            }
        }
        `
    )
    
    const isMobile = (): boolean => {
        return width < 1195  && path !== 'home' && orientation === 'portrait'
    }

    const isLaptop = (): boolean => {
        return width > 1194
    }

    return(
            <Table>
                <Left>
                    <IconBox>
                        <IconImage src={image.file.publicURL} alt="keita furuse aka poteboy's icon"/>
                    </IconBox>
                    <Name>Keita Furuse</Name>
                    <Links>
                            <LinkBox>
                                {SnsLinks.map( (r) => <SNS href={r.link} title={r.name} target="_blank" rel="noopener">
                                    <SnsIcon>
                                        <FontAwesomeIcon icon={r.iconName}
                                        size="2x"
                                        />
                                        <SnsName>{r.name}</SnsName>
                                    </SnsIcon>
                                </SNS>)}
                            </LinkBox>
                        </Links> 
                </Left>
                {children}
            </Table>
    )
}

export default Home

const Table = styled.div`
    color: snow;
    display: flex;
    flex-direction: row;
    margin-left: 80px;
`

const Left = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
`

const IconBox = styled.div`
    margin: 5em auto 0 auto;
    transform: translateX(0.5em);
    padding: 5vh 5vh 0 5vh;
`

const IconImage = styled.img`
    text-align: center;
    border-radius: 80px;
    width: 140px;
    height: 140px;
    margin: auto;
    box-shadow: 2px 3px 7px #2dcece;
`

const Name = styled.div`
    margin: auto;
    padding: 3vh;
    font-family: 'Quicksand';
    font-size: 40px;
`

const Links = styled.div`
    z-index: 100;
    margin: 1em auto auto auto;
    width: 30vh;
    background: transparent;
    backdrop-filter: blur(20px);
`

const LinkBox = styled.div`
    display: flex;
    flex-direction: column;
`

const SNS = styled.a`
    text-decoration: none;
    color: snow;
    margin: 0.5vh;
`

const SnsIcon = styled.div`
    display: flex;
    padding: 1vh;
    border: solid 1px #2dcece;
    border-radius: 15px;
    box-shadow: 0px 1px 8px 2px #2dcece;
    &:hover {
        background-color: snow;
        color: #2dcece;
        z-index: 1000;
        transform: scale(1.03);
        cursor: pointer;
        border-color: snow;
        box-shadow: 3px 5px 5px 0px #2dcece;
    }
`

const SnsName = styled.span`
    font-family: 'Quicksand';
    text-align: center;
    margin: auto;
`

interface SnsLink  {
    link: string,
    name: string,
    iconName: IconDefinition
}

const SnsLinks: SnsLink[] = [
    {
        link: "https://github.com/poteboy",
        name: 'GitHub',
        iconName: faGithub
    },
    {
        link: "https://www.linkedin.com/in/keitafuruse/",
        name: 'LinkedIn',
        iconName: faLinkedin
    },
    {
        link: "https://twitter.com/_poteboy_",
        name: 'Twitter',
        iconName: faTwitter
    },
    {
        link: "https://www.pixiv.net/users/59139347",
        name: 'Pixiv',
        iconName: faPalette
    }
]
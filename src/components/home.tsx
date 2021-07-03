import React, { FC, useEffect, useState } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby';
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
            <div className={style.table} style={{ borderRadius: '30px', marginLeft:  isLaptop() ? '80px' : '0px'}}>
                { isMobile() ? <></> : <div className={style.left}>
                    <div className={style.iconBox}>
                        <img src={image.file.publicURL} alt="keita furuse aka poteboy's icon" className={style.iconF}/>
                        <img src={image.file.publicURL} alt="keita furuse aka poteboy's icon" className={style.iconR}/>
                    </div>
                </div>}
                {children}
            </div>
    )
}

export default Home
import React, { FC, useEffect, useState } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby';
import { Path } from 'src/entity/path';

const style = require('../styles/home.module.scss');

type Props =  {
    children: any,
    path: Path
}

const Home: FC<Props> = ({children, path}) => {

   const [width, setWidth] = useState(window.innerWidth)

    const image = useStaticQuery(
        graphql`
        {
            file(name: { eq: "poteicon" }) {
                publicURL
            }
        }
        `
    )

    const updateWidth = () => {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', updateWidth);
        return(() => window.removeEventListener('resize', updateWidth))
    })
    
    const isMobile = (): boolean => {
        return width < 1195  && path !== 'home'
    }

    return(
            <div className={style.table} style={{ borderRadius: '30px', marginLeft: '80px'}}>
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
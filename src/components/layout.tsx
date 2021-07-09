import React, { FC, useState, useEffect } from 'react';
import Footer from './footer';
import Enable from './enable';
import SideBar from './sidebar';
import Header from './header';
import { useEnableContext } from './context/enable'
import Meta from './meta';

interface Props {
    children: object
}

const Layout: FC<Props> = ({children}) => {

    // const { enable, setEnable } = useEnableContext()

    const [enable, setEnable] = useState(false)

    const isBrowser = typeof window !== "undefined"

    const [width, setWidth] = useState(
        typeof window !== "undefined" ? window.innerWidth : 1194
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

    const isResponsive = (): boolean => {
        return width > 1194 || orientation === 'landscape'
    }

    console.log(orientation)

    return(
        <div id="wrapper" >
            <Header/>
                {children}    
            <Footer />
        </div>
    )
}

export default Layout
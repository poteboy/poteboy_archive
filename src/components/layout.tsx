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

    useEffect(() => {
        const updateWidth = () => setWidth(window.innerWidth)
        window.addEventListener('resize', updateWidth);
        return(() => window.removeEventListener('resize', updateWidth))
    })

    return(
        <div id="wrapper" >
            {width > 1194 ? <SideBar/> : <Header/>}
                {children}    
            <Footer />
        </div>
    )
}

export default Layout
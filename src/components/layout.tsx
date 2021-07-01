import React, { FC, useState, useEffect } from 'react';
import Footer from './footer';
import Enable from './enable';
import SideBar from './sidebar';
import { useEnableContext } from './context/enable'
import Meta from './meta';

interface Props {
    children: object
}

const Layout: FC<Props> = ({children}) => {

    // const { enable, setEnable } = useEnableContext()

    const [enable, setEnable] = useState(true)

    // style={{transform: !enable ? 'translateX(-5vh)' : ""}}

    return(
        <div id="wrapper" >
            {enable ? <SideBar/> : <></>}
                {children}    
            <Footer />
            <Enable setEnable={setEnable} enable={enable}/>
        </div>
    )
}

export default Layout
import React, { FC, useState, useEffect } from 'react';
import Footer from './footer';
import Enable from './enable';
import SideBar from './sidebar';
import { useEnableContext } from './context/enable'
import Meta from './meta';

interface Props {
    children: any
}

const Layout: FC<Props> = ({children}) => {

    // const { enable, setEnable } = useEnableContext()

    const [enable, setEnable] = useState(true)

    return(
        <div id="wrapper" >
            {enable ? <SideBar/> : <></>}
            <span style={{marginRight: !enable ? (10 + 'vh') : ""}}>
                {children}
            </span>
            <Footer />
            <Enable setEnable={setEnable} enable={enable}/>
        </div>
    )
}

export default Layout
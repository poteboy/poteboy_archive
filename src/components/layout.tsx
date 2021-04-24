import React from 'react';
import '../styles/index.scss';

const Layout = (props: any) => {
    return(
        <div>
            hello
            {props.children}
        </div>
    )
}

export default Layout
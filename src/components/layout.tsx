import React from 'react';
import Footer from './footer';
import Header from './header';
import Home from './home';

const Layout = (props: any) => {
    return(
        <div id="wrapper">
            <Header/>
                <Home />
            <Footer />
        </div>
    )
}

export default Layout
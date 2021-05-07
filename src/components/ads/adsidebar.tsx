import React, { Component } from 'react';
const style = require("../../styles/adsidebar.module.scss")

const AdSidebar = () => {
    return(
        <>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
            <ins className={style.adsbygoogle}
                style={{display:'block'}}
                data-ad-client="ca-pub-7302857299919167"
                data-ad-slot="6498963500"
                data-ad-format="auto"
                data-full-width-responsive="true"></ins>
            <script>
                (adsbygoogle = window.adsbygoogle || []).push({});
            </script>
            </>
    )
}

export default AdSidebar
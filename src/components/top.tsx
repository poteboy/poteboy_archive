import React from 'react';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPaintBrush, faPalette } from '@fortawesome/free-solid-svg-icons';
const style = require('../styles/top.module.scss');

const Top = () => {


    return(
        <div className={style.right}>
            <div className={style.myname}>Hello World...!</div>
            <div className={style.blur}></div>
            <div className={style.myjob}>
                <p className={style.desc}>Application Developer based in Tokyo.</p>
            </div>
        </div>
    )
}

export default Top
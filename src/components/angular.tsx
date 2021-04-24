import React from 'react';
import { Link } from "gatsby"
const style = require('../styles/angular.module.scss');

const Angular = (props: any) => {
    return(
        <div className={style.home}>
        <div className={style.logo}>
          <div className={style.myname}>KEITA FURUSE
            <p className={style.description}>WEB APPLICATION DEVELOPER</p>
          </div>
        </div>
      </div>
    )
}

export default Angular
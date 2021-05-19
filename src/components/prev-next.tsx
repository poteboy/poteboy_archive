import React, {useEffect, useState} from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { chosePath, PathType} from '../func';
import { query } from './post';
import { PrevNext } from '../entity';
const style = require("../styles/prev-next.module.scss");

const PrevNextComponent = ({prev,next}: PrevNext) => {


    const [path, setPathName] = useState('')

    useEffect(() => {
        setPathName(window.location.pathname.slice(1,5))
    })

    return(
        <>
        <br/>
        <div className={style.prevNext}>
            <Link
            className={style.prev}
            to={'/' + path + '/' + prev?.slug as string}
            style={{ display: prev ? '' : 'none'}}
            >  
                <img src="https://www.webcreatorbox.com/sample/images/arrow-prev.svg" alt="previous page"/>
                <p>{prev?.title}</p>
            </Link>
            <Link
            className={style.next}
            to={'/' + path + '/' + next?.slug as string}
            style={{ display: next ? '' : 'none'}}
            >
                <p>{next?.title}</p>
                <img src="http://www.webcreatorbox.com/sample/images/arrow-next.svg" alt="next page"/>   
            </Link>
        </div>
        </>
    )

}

export default PrevNextComponent
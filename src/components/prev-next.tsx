import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { chosePath, PathType} from '../func';
import { query } from './post';
const style = require("../styles/prev-next.module.scss");

const PrevNext = ({prev,next}: PrevNextProps) => {
    
    const path = window.location.pathname.slice(1,5) as PathType;
    const contentfulType: string = chosePath(path)

    return(
        <>
        <br/>
        <div className={style.prevNext}>
            <Link
            className={style.prev}
            to={'/' + path + '/' + prev?.slug as string}
            style={{ display: prev ? '' : 'none'}}
            >
                <p>{prev?.title}</p>
            </Link>
            <Link
            className={style.next}
            to={'/' + path + '/' + next?.slug as string}
            style={{ display: next ? '' : 'none'}}
            >
                <p>{next?.title}</p>
            </Link>
        </div>
        </>
    )

}

interface PrevNextProps {
    next: {slug: string, title: string} | null,
    prev: {slug: string, title: string} | null,
}

export default PrevNext
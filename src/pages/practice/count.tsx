import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { routes } from '../../config';

const CountPage = () => {

    const [ count, setCount ] = useState(0);

    useEffect(() => {
        console.log('hello')
    })

    return(
        <>
            <p>you clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>click</button>
            <Link to='/practice/blog'>blog</Link>
        </>
    )
}

export default CountPage
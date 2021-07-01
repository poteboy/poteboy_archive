import React, {FC, useState, useEffect, Dispatch, SetStateAction} from "react";
const style = require("../styles/enable.module.scss")

interface Prop {
    enable: boolean,
    setEnable: Dispatch<SetStateAction<boolean>>
}

const Enable: FC<Prop> = ({setEnable, enable}) => {

    const updateEnable = () => {
        return setEnable(!enable)
    }

    const isBrowser = typeof window !== "undefined"

    const [width, setWidth] = useState(
        typeof window !== "undefined" ? window.innerWidth : 1195
      );

    useEffect(() => {
        const updateWidth = () => setWidth(window.innerWidth)
        window.addEventListener('resize', updateWidth);
        return(() => window.removeEventListener('resize', updateWidth))
    })

    return(
        <button style={{ display: (width > 1194 ? 'none' : '')}}>
            <div className={style.arrow} onClick={updateEnable}>
            {enable ? '<' : '>'}
            </div>
        </button>
    )
}

export default Enable
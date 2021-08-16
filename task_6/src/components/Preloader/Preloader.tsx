import React from 'react';
import style from './Preloader.module.css'


export function Preloader() {

    return (
        <div className={style.preloader}>
            <div className={style.preloader__row}>
                <div className={style.preloader__item}></div>
                <div className={style.preloader__item}></div>
            </div>
        </div>
    );
}
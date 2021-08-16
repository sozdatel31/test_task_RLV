import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './Header.module.css'

export function Header() {
    return (
        <div className={style.container}>
            <nav className={style.navigation}>
                <NavLink className={style.navItem} activeClassName="" to="/">Главная</NavLink>
                <NavLink className={style.navItem} activeClassName="" to="/employees">Сотрудники</NavLink>
            </nav>
        </div>
    );
};

import React from 'react';
import styles from './header.module.scss'
import {useNavigate} from "react-router";

const Header = () => {

    const navigate = useNavigate()

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div onClick={() => navigate("/")}>
                    <img src={require('../../../assets/images/logo.png')} alt="logo"/>
                </div>
            </div>
        </header>
);
};

export default Header;

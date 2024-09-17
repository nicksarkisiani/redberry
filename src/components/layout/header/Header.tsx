import React from 'react';
import styles from './header.module.scss'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div>
                    <img src={require('../../../assets/images/logo.png')} alt="logo"/>
                </div>
            </div>
        </header>
);
};

export default Header;

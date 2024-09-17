import React from 'react';
import styles from "./iconInfo.module.scss"

interface IconInfoProps {
    children?: React.ReactNode;
}

const IconInfo: React.FC<IconInfoProps> = ({children}) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
};

export default IconInfo;

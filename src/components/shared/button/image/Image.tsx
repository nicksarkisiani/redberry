import React from 'react';
import styles from './image.module.scss'

interface ImageProps {
    width: string;
    height: string;
    src: string
    children?: React.ReactNode
}

const Image: React.FC<ImageProps> = ({width, height, src, children}) => {
    return (
        <div style={{width, height}} className={styles.container}>
            <img
                style={{width: "100%", height: "100%", objectFit: "cover"}}
                src={src} alt="default"/>
            {children}
        </div>
    );
};

export default Image;
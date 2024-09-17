import React from 'react';

interface ImageProps {
    width: string;
    height: string;
    src: string
}

const Image: React.FC<ImageProps> = ({width, height, src}) => {
    return (
        <div style={{width, height}}>
            <img
                style={{width: "100%", height: "100%", objectFit: "cover"}}
                src={src} alt="default"/>
        </div>
    );
};

export default Image;
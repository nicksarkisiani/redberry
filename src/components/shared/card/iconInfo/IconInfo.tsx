import React from 'react';
import styles from "./iconInfo.module.scss"
import Field from "../../field/Field";

interface IconInfoProps {
    text: string
    svg?: React.ReactNode
    children?: React.ReactNode;
    width?: string
}

const IconInfo: React.FC<IconInfoProps> = ({text,svg, width, children}) => {
    return (
        <div className={styles.container}>
            {svg}
            <Field fontSize={16} color={"rgba(2, 21, 38, 0.7)"} width={width}>{text}{children}</Field>
        </div>
    );
};

export default IconInfo;

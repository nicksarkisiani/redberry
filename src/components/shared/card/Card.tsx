import React from 'react';
import Image from "../image/Image";
import IconInfo from "./iconInfo/IconInfo";
import Field from "../field/Field";
import styles from "./card.module.scss";
import SignSvg from "../svgs/SignSvg";
import AreaSvg from "../svgs/AreaSvg";
import LocationSvg from "../svgs/LocationSvg";
import BedSvg from "../svgs/BedSvg";

interface CardProps {
    is_rental: number
    price: number
    address: string
    bedrooms: number
    area: number
    zip_code: number
    img_path: string
    onClick: Function
    id: number
}


const Card: React.FC<CardProps> = ({
                                       area, bedrooms, price, zip_code, is_rental, address
                                       , img_path, onClick, id
                                   }) => {
    return (
        <div className={styles.card} onClick={() => onClick(id)}>
            <Image width={"384px"} height={"307px"} src={img_path}>
                <span>{!!is_rental ? "ქირავდება" : "იყიდება"}</span>
            </Image>
            <div className={styles.info}>
                <div className={styles.title}>
                    <Field fontSize={28} color={"#021526"} fontWeight={800}>{price} ₾</Field>
                    <IconInfo text={address} svg={<LocationSvg/>}/>
                </div>
                <div className={styles.details}>
                    <IconInfo text={`${bedrooms}`} svg={<BedSvg/>} />
                    <IconInfo text={`${area} მ`} svg={<AreaSvg/>} width={"59px"}>
                        <sup>2</sup>
                    </IconInfo>
                    <IconInfo text={`${zip_code}`} svg={<SignSvg/>}/>
                </div>
            </div>
        </div>
    );
};

export default Card;
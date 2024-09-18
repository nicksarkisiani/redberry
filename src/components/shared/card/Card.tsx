import React from 'react';
import Image from "../../ui/image/Image";
import IconInfo from "../../ui/iconInfo/IconInfo";
import Field from "../../ui/Field/Field";
import styles from "./card.module.scss";
import SignSvg from "../../ui/svgs/SignSvg";
import AreaSvg from "../../ui/svgs/AreaSvg";
import LocationSvg from "../../ui/svgs/LocationSvg";
import BedSvg from "../../ui/svgs/BedSvg";

const Card = () => {
    return (
        <div className={styles.card}>
            <Image width={"384px"} height={"307px"} src={require('../../../assets/images/default.png')}>
                <span>იყიდება</span>
            </Image>
            <div className={styles.info}>
                <div className={styles.title}>
                    <Field fontSize={28} color={"#021526"} fontWeight={800}>80 000 ₾</Field>
                    <IconInfo text={"თბილისი, ი. ჭავჭავაძის 53"} svg={<LocationSvg />}/>
                </div>
                <div className={styles.details}>
                    <IconInfo text={"2"} svg={<BedSvg />}/>
                    <IconInfo text="55 მ" svg={<AreaSvg />}>
                        <sup>2</sup>
                    </IconInfo>
                    <IconInfo text={"0160"} svg={<SignSvg />}/>
                </div>
            </div>
        </div>
    );
};

export default Card;
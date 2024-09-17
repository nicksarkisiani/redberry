import React from 'react';
import Image from "../../ui/image/Image";
import IconInfo from "../../ui/iconInfo/IconInfo";
import Field from "../../ui/Field/Field";
import styles from "./card.module.scss";
import {Bed} from "react-ionicons";

const Card = () => {
    return (
        <div className={styles.card}>
            <Image width={"384px"} height={"307px"} src={require('../../../assets/images/default.png')} />
            <div className={styles.info}>
                <div className={styles.title}>
                    <Field fontSize={28} color={"#021526"} fontWeight={800}>80 000 ₾</Field>
                    <IconInfo>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M5.05025 4.05025C7.78392 1.31658 12.2161 1.31658 14.9497 4.05025C17.6834 6.78392 17.6834 11.2161 14.9497 13.9497L10 18.8995L5.05025 13.9497C2.31658 11.2161 2.31658 6.78392 5.05025 4.05025ZM10 11C11.1046 11 12 10.1046 12 9C12 7.89543 11.1046 7 10 7C8.89543 7 8 7.89543 8 9C8 10.1046 8.89543 11 10 11Z"
                                  fill="#021526" fillOpacity="0.5"/>
                        </svg>
                        <Field fontSize={16} color={"rgba(2, 21, 38, 0.7)"}>თბილისი, ი. ჭავჭავაძის 53</Field>
                    </IconInfo>
                </div>
                <div className={styles.details}>
                    <IconInfo>
                        <Bed
                            color={'rgba(2, 21, 38, 0.5)'}
                            height="20px"
                            width="20px"
                        />
                        <Field fontSize={16} color={"rgba(2, 21, 38, 0.7)"}>2</Field>
                    </IconInfo>
                    <IconInfo>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0 16C0 16.5304 0.210714 17.0391 0.585786 17.4142C0.960859 17.7893 1.46957 18 2 18H16C16.5304 18 17.0391 17.7893 17.4142 17.4142C17.7893 17.0391 18 16.5304 18 16V2C18 1.46957 17.7893 0.960859 17.4142 0.585786C17.0391 0.210714 16.5304 0 16 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V16ZM9 3H15V9H13V5H9V3ZM3 9H5V13H9V15H3V9Z"
                                fill="#021526" fillOpacity="0.5"/>
                        </svg>
                        <Field fontSize={16} color={"rgba(2, 21, 38, 0.7)"}>55 მ<sup>2</sup></Field>
                    </IconInfo>
                    <IconInfo>
                        <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.01717 0.338139C6.80804 0.554674 6.69051 0.848379 6.69045 1.15465V4.14122H1.11507C0.819339 4.14122 0.535715 4.2629 0.326598 4.47948C0.117481 4.69607 0 4.98982 0 5.29612V9.91571C0 10.222 0.117481 10.5158 0.326598 10.7323C0.535715 10.9489 0.819339 11.0706 1.11507 11.0706H6.69045V18H8.9206V11.0706H12.859C13.0225 11.0705 13.1839 11.0333 13.3319 10.9614C13.4799 10.8896 13.6108 10.7849 13.7154 10.6548L15.8709 7.97548C15.9543 7.87172 16 7.74095 16 7.60591C16 7.47088 15.9543 7.34011 15.8709 7.23635L13.7154 4.55698C13.6108 4.42691 13.4799 4.32225 13.3319 4.2504C13.1839 4.17856 13.0225 4.14128 12.859 4.14122H8.9206V1.15465C8.92055 0.926271 8.85513 0.703031 8.7326 0.513154C8.61007 0.323277 8.43594 0.175289 8.23221 0.0878981C8.02849 0.000506893 7.80432 -0.0223635 7.58805 0.0221781C7.37178 0.0667197 7.17311 0.176673 7.01717 0.338139Z"
                                fill="#021526" fillOpacity="0.5"/>
                        </svg>
                        <Field fontSize={16} color={"rgba(2, 21, 38, 0.7)"}>0160</Field>
                    </IconInfo>
                </div>
            </div>
        </div>
    );
};

export default Card;
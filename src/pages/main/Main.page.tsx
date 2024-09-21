import React from 'react';
import Card from "../../components/shared/card/Card";
import Toolbar from "../../components/layout/toolbar/Toolbar";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {Space} from "antd";
import styles from "./main.module.scss"
import {useNavigate} from "react-router";

const MainPage = () => {

    const {filter} = useTypedSelector(state => state.filter)

    const navigate = useNavigate();

    const onClickHandler = (id: number) => {
        navigate(`/listing/${id}`)
    }

    return (
        <div className={styles.container}>
            <Toolbar/>
            <Space wrap={true} size="middle" style={{columnGap: "18px", rowGap: "20px"}}>
                {filter.map(estate => (
                    <Card is_rental={estate.is_rental} price={estate.price} address={estate.address}
                          bedrooms={estate.bedrooms} area={estate.area} zip_code={estate.zip_code} img_path={estate.image} key={estate.id} onClick={onClickHandler} id={estate.id}/>
                ))}
            </Space>

        </div>
    );
};

export default MainPage;
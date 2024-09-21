import React from 'react';
import {Select} from "antd";
import styles from "./filter.module.scss"
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useActions} from "../../../hooks/useActions";

const Filter = () => {

    const {estates} = useTypedSelector(state => state.estate)

    const regions = estates.map(estate => estate.city.region)
    const uniqueRegions = Array.from(
        new Map(regions.map(region => [region?.id, region])).values()
    );


    const prices = Array.from(new Set(estates.map(estate => estate.price))).sort((a, b) => a - b)
    const areas = Array.from(new Set(estates.map(estate => estate.area))).sort((a, b) => a - b)
    const bedrooms = Array.from(new Set(estates.map(estate => estate.bedrooms))).sort((a, b) => a - b)

    return (
        <div className={styles.container}>
            <Select
                defaultValue="რეგიონი"
                style={{ width: 120, textAlign: "center" }}
                options={uniqueRegions.map(region => {
                    return {
                        value: region?.id,
                        label: region?.name
                    }
                })}
                dropdownStyle={{width:"731px"}}
                variant="borderless"
            />
            <Select
                defaultValue="საფასო კატეგორია"
                style={{ width: 200, textAlign: "center" }}
                options={prices.map(price => {
                    return {
                        value: price,
                        label: price
                    }
                })}
                dropdownStyle={{width:"382px"}}
                variant="borderless"
            />
            <Select
                defaultValue="ფართობი"
                style={{ width: 124, textAlign: "center" }}
                options={areas.map(area => {
                    return {
                        value: area,
                        label: area
                    }
                })}
                dropdownStyle={{width:"382px"}}
                variant="borderless"
            />
            <Select
                defaultValue="საძინებლების რაოდენობა"
                style={{ width: 262, textAlign: "center" }}
                options={bedrooms.map(bedroom => {
                    return {
                        value: bedroom,
                        label: bedroom
                    }
                })}
                dropdownStyle={{width:"282px"}}
                variant="borderless"
            />
        </div>
    );
};

export default Filter;
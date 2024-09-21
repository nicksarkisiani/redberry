import React, {useState} from 'react';
import {Button, InputNumber, List, message, Select, Space} from "antd";
import styles from "./filter.module.scss"
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useActions} from "../../../hooks/useActions";

const Filter = () => {

    const {filter} = useTypedSelector(state => state.filter)
    const {filterByArea, filterByBedrooms, reset, filterByMinPrice, filterByMaxPrice} = useActions()

    const regions = filter.map(estate => estate.city.region)
    const uniqueRegions = Array.from(
        new Map(regions.map(region => [region?.id, region])).values()
    );

    const prices = Array.from(new Set(filter.map(estate => estate.price))).sort((a, b) => a - b)
    const areas = Array.from(new Set(filter.map(estate => estate.area))).sort((a, b) => a - b)
    const bedrooms = Array.from(new Set(filter.map(estate => estate.bedrooms))).sort((a, b) => a - b)

    const [minPrice, setMinPrice] = useState<number | null>(null);
    const [maxPrice, setMaxPrice] = useState<number | null>(null);


    const minPrices = prices.slice(0, prices.length - 1);

    const maxPrices = prices.slice(1);

    const onFilterByNumber  = (value: string, type: "bedrooms" | "area") => {
        if(type === "area") filterByArea(+value)
        if(type === "bedrooms") filterByBedrooms(+value)
    }

    const onReset = () => {
        reset()
    }

    const searchByPrices = () => {
        if(minPrice && maxPrice) {
            if(minPrice > maxPrice){
                message.error("გთხოვთ შეიყვანოთ ვალიდური რიცხვები")
                return;
            }
            filterByMinPrice(minPrice)
            filterByMaxPrice(maxPrice)
        }
        if(minPrice) {
            filterByMinPrice(minPrice)
            return;
        }
        if(maxPrice) {
            filterByMaxPrice(maxPrice)
            return;
        }


    }

    return (
        <div className={styles.container}>
            <Select
                placeholder="რეგიონი"
                style={{ width: 120, textAlign: "center" }}
                options={uniqueRegions.map(region => {
                    return {
                        value: region?.id,
                        label: region?.name
                    }
                })}
                dropdownStyle={{width:"731px"}}
                variant="borderless"
                allowClear={true}
                onClear={onReset}
            />
            <Select
                placeholder="საფასო კატეგორია"
                style={{ width: 200, textAlign: "center" }}
                dropdownStyle={{width:"382px"}}
                variant="borderless"
                allowClear={true}
                onClear={onReset}
                dropdownRender={(menu) => (
                    <div>
                        <div style={{ padding: 8 }}>
                            <Space style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <InputNumber
                                    placeholder="Min"
                                    value={minPrice}
                                    onChange={(value) => setMinPrice(value)}
                                />
                                <InputNumber
                                    placeholder="Max"
                                    value={maxPrice}
                                    onChange={(value) => setMaxPrice(value)}
                                />
                            </Space>
                        </div>
                        <Space style={{ marginTop: 8, display: 'flex', justifyContent: 'space-between' }}>
                            <List
                                dataSource={minPrices}
                                renderItem={(item) => (
                                    <List.Item
                                        onClick={() => setMinPrice(item)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        {item}
                                    </List.Item>
                                )}

                                header={<div>Min</div>}
                                bordered
                            />
                            <List
                                dataSource={maxPrices}
                                renderItem={(item) => (
                                    <List.Item
                                        onClick={() => setMaxPrice(item)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        {item}
                                    </List.Item>
                                )}

                                header={<div>Max</div>}
                                bordered
                            />
                        </Space>
                        <Button
                            type="primary"
                            onClick={searchByPrices}
                            style={{ marginTop: 8, width: '100%' }}
                        >
                            ძებნა
                        </Button>
                        <Button
                            type="default"
                            onClick={onReset}
                            style={{ marginTop: 8, width: '100%' }}
                        >
                            გაუქმება
                        </Button>
                    </div>
                )}
            />
            <Select
                placeholder="ფართობი"
                style={{ width: 124, textAlign: "center" }}
                options={areas.map(area => {
                    return {
                        value: area,
                        label: area
                    }
                })}
                dropdownStyle={{width:"382px"}}
                variant="borderless"
                onSelect={(value) => onFilterByNumber(value, "area")}
                allowClear={true}
                onClear={onReset}
            />
            <Select
                placeholder="საძინებლების რაოდენობა"
                style={{ width: 262, textAlign: "center" }}
                options={bedrooms.map(bedroom => {
                    return {
                        value: bedroom,
                        label: bedroom
                    }
                })}
                dropdownStyle={{width:"282px"}}
                allowClear={true}
                onClear={onReset}
                variant="borderless"
                onSelect={(value) => onFilterByNumber(value, "bedrooms")}
            />
        </div>
    );
};

export default Filter;
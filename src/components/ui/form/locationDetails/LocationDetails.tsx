import {Form, Input, Select, Typography} from "antd";
import {useTypedSelector} from "../../../../hooks/useTypedSelector";
import {FieldType} from "../../../../types/form/form.type";
import styles from "../form.module.scss"
import {useState} from "react";
import {ICity} from "../../../../types/store";


const LocationDetails = () => {
    const {cities, regions} = useTypedSelector(state => state.location);
    const [selectedCities, setSelectedCities] = useState<ICity[]>();

    const printCitiesHandler = (regionId: number) => {
        setSelectedCities(cities.filter((city) => city.region_id === regionId));
    }

    return (
        <div
            className={styles.formItem}
        >
            <Typography.Title level={5}
                              className={styles.subtitle}
            >მდებარეობა</Typography.Title>
            <div
                className={styles.column}
            >
                <div
                    className={styles.row}
                >
                    <Form.Item<FieldType>
                        label="მისამართი"
                        name="address"
                        rules={[{
                            required: true,
                            message: "სავალდებულოა!"
                        }, {type: "string", min: 2, message: "სავალდებულოა მინიმუმ 2 სიმბოლო!"},]}
                        layout="vertical"
                        className={styles.formItemInput}
                        validateFirst={true}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        label="საფოსტო ინდექსი"
                        name="zip_code"
                        validateFirst={true}
                        rules={[{required: true, message: "სავალდებულოა!"},
                            {
                                validator: (_, value) => {
                                    if (isNaN(value)) {
                                        return Promise.reject(new Error("საფოსტო ინდექსი უნდა იყოს რიცხობრივი!"));
                                    }
                                    if (value <= 0) {
                                        return Promise.reject(new Error("საფოსტო ინდექსი უნდა იყოს დადებითი!"));
                                    }

                                    return Promise.resolve();
                                },
                            }
                        ]}
                        layout="vertical"
                        className={styles.formItemInput}
                    >
                        <Input/>
                    </Form.Item>
                </div>
                <div
                    className={styles.row}
                >
                    <Form.Item
                        label="რეგიონი"
                        name="region_id"
                        layout="vertical"
                        rules={[{required: true, message: "სავალდებულოა!"}]}
                        className={styles.formItemInput}
                    >
                        <Select
                            allowClear
                            options={regions.map(region => ({
                                value: region.id,
                                label: region.name,
                            }))}
                            onChange={(id) => printCitiesHandler(id)}
                        />
                    </Form.Item>
                    <Form.Item
                        label="ქალაქი"
                        name="city_id"
                        layout="vertical"
                        rules={[{required: true, message: "სავალდებულოა!"}]}
                        className={styles.formItemInput}
                    >
                        <Select
                            allowClear
                            options={!!setSelectedCities && selectedCities?.map(city => {
                                return {
                                    value: city.id,
                                    label: city.name,
                                }
                            })}
                        />
                    </Form.Item>
                </div>
            </div>
        </div>
    )
        ;
};

export default LocationDetails
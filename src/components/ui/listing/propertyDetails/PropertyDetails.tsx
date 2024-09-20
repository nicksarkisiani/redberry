import {Form, Input, Typography} from "antd";
import TextArea from "antd/es/input/TextArea";
import FileUploader from "../fileUploader/FileUploader";
import styles from "../form.module.scss"
import {FieldType} from "../../../../types/form/form.type";


const PropertyDetails = () => (
    <div
        className={styles.formItem}
    >
        <Typography.Title level={5}
                          className={styles.subtitle}
        >ბინის დეტალები</Typography.Title>
        <div
            className={styles.column}
        >
            <div
                className={styles.row}
            >
                <Form.Item<FieldType>
                    label="ფასი"
                    name="price"
                    rules={[{ required: true, message: "სავალდებულოა!" },
                        {
                            validator: (_, value) => {
                                if (isNaN(value)) {
                                    return Promise.reject(new Error("ფასი უნდა იყოს რიცხობრივი!"));
                                }
                                if (value <= 0) {
                                    return Promise.reject(new Error("ფასი უნდა იყოს დადებითი რიცხობრივი!"));
                                }

                                return Promise.resolve();
                            },
                        }
                    ]}
                    layout="vertical"
                    className={styles.formItemInput}
                    validateFirst={true}
                >
                    <Input type="number" />
                </Form.Item>
                <Form.Item<FieldType>
                    label="ფართობი"
                    name="area"
                    rules={[{ required: true, message: "სავალდებულოა!" },
                        {
                            validator: (_, value) => {
                                if (isNaN(value)) {
                                    return Promise.reject(new Error("ფართობი უნდა იყოს რიცხობრივი!"));
                                }
                                if (value <= 0) {
                                    return Promise.reject(new Error("ფართობი უნდა იყოს დადებითი!"));
                                }

                                return Promise.resolve();
                            },
                        }
                    ]}
                    layout="vertical"
                    className={styles.formItemInput}
                    validateFirst={true}
                >
                    <Input type="number" />
                </Form.Item>
            </div>
            <div
                className={styles.row}
            >
                <Form.Item<FieldType>
                    label="საძინებლის რაოდენობა"
                    name="bedrooms"
                    rules={[
                        { required: true, message: "სავალდებულოა!" },
                        {
                            validator: (_, value) => {
                                if (isNaN(value) || value <= 0) {
                                    return Promise.reject(new Error("საძინებლის რაოდენობა უნდა იყოს დადებითი!"));
                                }
                                if (value % 1 !== 0) {
                                    return Promise.reject(new Error("საძინებლის რაოდენობა უნდა იყოს მთელი რიცხვი!"));
                                }
                                return Promise.resolve();
                            },
                        },
                    ]}
                    layout="vertical"
                    className={styles.formItemInput}
                    validateFirst={true}
                >
                    <Input type="number"/>
                </Form.Item>
            </div>
            <Form.Item<FieldType>
                label="აღწერა"
                name="description"
                rules={[{ required: true, message: "სავალდებულოა!"},{type: "string", min: 4, message: "სავალდებულოა მინიმუმ 4 სიმბოლო!" }]}
                layout="vertical"
                className={styles.textArea}
            >
                <TextArea rows={4} autoSize={{ minRows: 5, maxRows: 5 }} />
            </Form.Item>
            <FileUploader />
        </div>
    </div>
);

export default PropertyDetails
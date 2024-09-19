import React from 'react';
import {Select, Button, Form, FormProps, Input, Radio, Typography, UploadProps, message, Space, Upload} from "antd";
import styles from "./addListingPage.module.scss"
import TextArea from "antd/es/input/TextArea";
import {PlusCircleOutlined} from "@ant-design/icons";

const { Dragger } = Upload

type FieldType = {
    is_rental?: number
    address?: string
    zip_code?: number
    image?: string
    city_id?: number
    region_id?: number
    price?: number
    area?: number
    bedrooms?: number
    agent_id?: number
    description?: string
};

const props: UploadProps = {
    name: 'file',
    multiple: true,
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
    onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
    },
};

const AddListingPage = () => {


    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className={styles.container}>
            <Typography.Title level={2} className={styles.title}>ლისტინგის დამატება</Typography.Title>
            <Form
                name="add-listing"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                initialValues={{is_rental: "1"}}
                className={styles.form}

            >
                <div className={styles.formItem}>
                    <Typography.Title level={5}>გარიგების ტიპი</Typography.Title>
                    <div>
                        <Form.Item<FieldType>
                            name="is_rental"
                            rules={[{required: true}]}
                            layout="vertical"
                            wrapperCol={{offset: 0, span: 8}}
                        >
                            <Radio.Group buttonStyle="outline">
                                <Radio value={"1"}>იყიდება</Radio>
                                <Radio value={"0"}>ქირავდება</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </div>
                </div>


                <div className={styles.formItem}>
                    <Typography.Title level={5} className={styles.subtitle}>მდებარეობა</Typography.Title>
                    <div className={styles.column}>
                        <div className={styles.row}>
                            <Form.Item<FieldType>
                                label="მისამართი"
                                name="address"
                                rules={[{required: true, type: "string"}]}
                                layout="vertical"
                                className={styles.formItemInput}

                            >
                                <Input/>
                            </Form.Item>
                            <Form.Item<FieldType>
                                label="საფოსტო ინდექსი"
                                name="zip_code"
                                rules={[{required: true, type: "string", min: 4}]}
                                layout="vertical"
                                className={styles.formItemInput}
                            >
                                <Input/>
                            </Form.Item>
                        </div>
                        <div className={styles.row}>
                            <Form.Item<FieldType>
                                label="რეგიონი"
                                name="region_id"
                                layout="vertical"
                                className={styles.formItemInput}>
                                <Select defaultValue="lucy"
                                        allowClear
                                        options={[{value: 'lucy', label: 'Lucy'}]}
                                        placeholder="select it"
                                        className={styles.formItemInput}
                                />
                            </Form.Item>
                            <Form.Item<FieldType>
                                className={styles.formItemInput}
                                label="ქალაქი"
                                name="city_id"
                                layout="vertical"
                            >
                                <Select defaultValue="lucy"
                                        allowClear
                                        options={[{value: 'lucy', label: 'Lucy'}]}
                                        placeholder="select it"

                                />
                            </Form.Item>
                        </div>
                    </div>
                </div>

                <div className={styles.formItem}>
                    <Typography.Title level={5} className={styles.subtitle}>ბინის დეტალები</Typography.Title>
                    <div className={styles.column}>
                        <div className={styles.row}>
                            <Form.Item<FieldType>
                                label="ფასი"
                                name="price"
                                rules={[{required: true, type: "string"}]}
                                layout="vertical"
                                className={styles.formItemInput}
                            >
                                <Input/>
                            </Form.Item>
                            <Form.Item<FieldType>
                                label="ფართობი"
                                name="area"
                                rules={[{required: true, type: "string", min: 4}]}
                                layout="vertical"
                                className={styles.formItemInput}
                            >
                                <Input/>
                            </Form.Item>
                        </div>
                        <div className={styles.row}>
                            <Form.Item<FieldType>
                                label="საძინებლის რაოდენობა"
                                name="bedrooms"
                                rules={[{required: true, type: "string", min: 4}]}
                                layout="vertical"
                                className={styles.formItemInput}
                            >
                                <Input/>
                            </Form.Item>
                        </div>
                        <div>
                            <Form.Item<FieldType>
                                label="აღწერა"
                                name="description"
                                rules={[{required: true, type: "string", min: 4}]}
                                layout="vertical"
                                className={styles.textArea}
                            >
                                <TextArea rows={4} autoSize={{minRows: 5, maxRows: 5}}/>
                            </Form.Item>
                        </div>
                        <div>
                            <Form.Item<FieldType>
                                label="ატვირთეთ ფაილი"
                                name="image"
                                rules={[{required: true, type: "string", min: 4}]}
                                layout="vertical"
                                style={{height: "157px"}}
                                valuePropName="image"
                            >
                                <Dragger {...props} height={157} style={{borderColor: "#2D3648",borderStyle: "dashed", backgroundColor: "transparent"}}>
                                    <PlusCircleOutlined width={"24px"} height={"24px"} />
                                </Dragger>
                            </Form.Item>
                        </div>
                    </div>
                </div>

                <div className={styles.formItem}>
                    <Typography.Title level={5}>აგენტი</Typography.Title>
                    <div>
                        <Form.Item<FieldType>
                            className={styles.formItemInput}
                            label="აირჩიე"
                            name="agent_id"
                            layout="vertical"
                        >
                            <Select defaultValue="lucy"
                                    allowClear
                                    options={[{value: 'lucy', label: 'Lucy'}]}
                                    placeholder="select it"

                            />
                        </Form.Item>
                    </div>
                </div>

                <div className={styles.formSubmit}>
                    <Form.Item>
                        <Space>
                            <Button type="primary" ghost={true} htmlType="submit" size="large"
                                    style={{color: "#F93B1D", borderColor: "#F93B1D"}}>
                                გაუქმება
                            </Button>
                            <Button type="primary" htmlType="submit" size="large" style={{backgroundColor: "#F93B1D"}}>
                                დაამატე ლისტინგი
                            </Button>
                        </Space>
                    </Form.Item>
                </div>
            </Form>
        </div>
    );
};

export default AddListingPage;
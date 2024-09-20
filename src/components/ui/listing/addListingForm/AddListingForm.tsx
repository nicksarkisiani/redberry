import {Form, FormProps, UploadFile} from "antd";
import TransactionType from "../transactionType/TransactionType";
import {FieldType} from "../../../../types/form/form.type";
import LocationDetails from "../locationDetails/LocationDetails";
import PropertyDetails from "../propertyDetails/PropertyDetails";
import AgentSelect from "../agentSelect/AgentSelect";
import styles from "../form.module.scss"
import {$api} from "../../../../http";
import {useNavigate} from "react-router";
import CreateButtons from "../../../shared/createButtons/CreateButtons";
import React from "react";

const AddListingForm = () => {

    const [form] = Form.useForm();
    const navigate = useNavigate();

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        const file = values?.image?.file as UploadFile<any> & File;
        console.log(file)
        if(!file){
            throw Error
        }

        const formData = new FormData();
        formData.append("image", file)

        Object.keys(values).forEach((key) => {
            if (key !== 'image') {
                const value = values[key as keyof FieldType];
                formData.append(key, value !== undefined ? String(value) : '');
            }
        });
        $api.post("/real-estates", formData)
        form.resetFields()
    };

    const onCancel = () => {
        form.resetFields();
        navigate("/")
    }

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            name="add-listing"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            initialValues={{ is_rental: "0" }}
            className={styles.form}
            form={form}
        >
            <TransactionType />
            <LocationDetails />
            <PropertyDetails />
            <AgentSelect />
            <div
                className={styles.formSubmit}
            >
                <Form.Item>
                    <CreateButtons onClickFirst={onCancel} textFirst={"გაუქმება"} textSecond={"დაამატე ლისტინგი"}/>
                </Form.Item>
            </div>
        </Form>
    );
};

export default AddListingForm


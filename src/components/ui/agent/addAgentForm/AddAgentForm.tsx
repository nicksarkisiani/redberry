import React from 'react';
import stylesForm from "../../listing/form.module.scss";
import stylesAgent from "../agent.module.scss";
import {Form, FormProps, UploadFile} from "antd";
import FileUploader from "../../listing/fileUploader/FileUploader";
import styles from "../../listing/form.module.scss";
import CreateButtons from "../../../shared/createButtons/CreateButtons";
import AgentsDetails from "../agentsDetails/AgentsDetails";
import {FieldType} from "../../../../types/form/form.type";
import {$api} from "../../../../http";

interface AddAgentFormProps {
    closeModal: Function
}

const AddAgentForm: React.FC<AddAgentFormProps> = ({closeModal}) => {

    const [form] = Form.useForm();

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        const file = values?.image?.file as UploadFile<any> & File;
        console.log(file)
        if (!file) {
            throw Error
        }

        const formData = new FormData();
        formData.append("avatar", file)

        Object.keys(values).forEach((key) => {
            if (key !== 'image') {
                const value = values[key as keyof FieldType];
                formData.append(key, value !== undefined ? String(value) : '');
            }
        });
        $api.post("/agents", formData)
        form.resetFields()
    };

    const onCancel = () => {
        form.resetFields();
        console.log(form)
        closeModal()
    }

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            name={"add-agent"}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            form={form}
            className={`${stylesForm.form} ${stylesAgent.agentForm}`}>

            <div className={stylesAgent.inputValues}>
                <AgentsDetails/>
                <FileUploader/>
            </div>
            <div
                className={styles.formSubmit}
            >
                <Form.Item>
                    <CreateButtons textFirst={"გაუქმება"} onClickFirst={onCancel}
                                   textSecond={"დაამატე აგენტი"}/>
                </Form.Item>
            </div>
        </Form>
    );
};

export default AddAgentForm;
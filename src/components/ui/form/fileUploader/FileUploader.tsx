import React from 'react';
import {Upload, Form} from 'antd';
import {PlusCircleOutlined} from '@ant-design/icons';
import {FieldType} from "../../../../types/form/form.type";

const {Dragger} = Upload;

const FileUploader: React.FC = () => {

    return (
        <Form.Item<FieldType>
            label="ატვირთეთ ფაილი"
            name="image"
            rules={[{required: true, message: "სავალდებულოა!"}]}
            style={{height: "157px"}}
            layout="vertical"
        >
            <Dragger
                name="file"
                height={157}
                style={{borderColor: "#2D3648", borderStyle: "dashed", backgroundColor: "transparent"}}
                maxCount={1}
                accept="image/*,.png,.jpg,.gif,.web,"
            >
                <PlusCircleOutlined style={{fontSize: '24px'}}/>
            </Dragger>
        </Form.Item>
    );
};

export default FileUploader;

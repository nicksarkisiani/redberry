import React, {useState} from 'react';
import {Upload, Form, UploadFile, message} from 'antd';
import {PlusCircleOutlined} from '@ant-design/icons';
import {FieldType} from "../../../../types/form/form.type";
import {UploadChangeParam} from "antd/es/upload";

const {Dragger} = Upload;

const FileUploader: React.FC = () => {

    const [fileList, setFileList] = useState<UploadFile<any>[]>([]);

    const onUploadFile = (e: UploadChangeParam<UploadFile<any>>) => {
        const fileSize = e?.file?.size
        const maxFileSize = 1 * 1024 * 1024;
        if(fileSize && fileSize > maxFileSize){
            message.error("File must be under 1 MB")
            setFileList(prevFileList => prevFileList.filter(file => file.uid !== e.file.uid));
        } else {
            setFileList(e.fileList);
        }

    }
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
                onChange={onUploadFile}
                beforeUpload={() => false}
                fileList={fileList}
            >
                <PlusCircleOutlined style={{fontSize: '24px'}}/>
            </Dragger>
        </Form.Item>
    );
};

export default FileUploader;

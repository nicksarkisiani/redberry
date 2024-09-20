import {Form, Radio, Typography} from "antd";
import {FieldType} from "../../../../types/form/form.type";
import styles from "../form.module.scss"

const TransactionType = () => (
    <div
        className={styles.formItem}
    >
        <Typography.Title level={5}>გარიგების ტიპი</Typography.Title>
        <Form.Item<FieldType> name="is_rental" rules={[{ required: true, message: "სავალდებულოა!" }]}>
            <Radio.Group buttonStyle="outline">
                <Radio value="0">იყიდება</Radio>
                <Radio value="1">ქირავდება</Radio>
            </Radio.Group>
        </Form.Item>
    </div>
);

export default TransactionType
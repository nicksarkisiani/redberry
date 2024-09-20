import {Button, Form, Space} from "antd";
import styles from "../form.module.scss"

const FormButtons = () => (
    <div
        className={styles.formSubmit}
    >
        <Form.Item>
            <Space>
                <Button type="primary" ghost={true} htmlType="reset" size="large" style={{ color: "#F93B1D", borderColor: "#F93B1D" }}>
                    გაუქმება
                </Button>
                <Button type="primary" htmlType="submit" size="large" style={{ backgroundColor: "#F93B1D" }}>
                    დაამატე ლისტინგი
                </Button>
            </Space>
        </Form.Item>
    </div>
);

export default FormButtons;

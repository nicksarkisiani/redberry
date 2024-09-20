import {useTypedSelector} from "../../../../hooks/useTypedSelector";
import {Form, Select, Typography} from "antd";
import styles from "../form.module.scss"
import {FieldType} from "../../../../types/form/form.type";

const AgentSelect = () => {
    const { agents } = useTypedSelector(state => state.agents);

    return (
        <div
            className={styles.formItem}
        >
            <Typography.Title level={5}>აგენტი</Typography.Title>
            <Form.Item<FieldType>
                label="აირჩიე"
                name="agent_id"
                layout="vertical"
                rules={[{ required: true, message: "სავალდებულოა!" }]}
                className={styles.formItemInput}
            >
                <Select
                    allowClear
                    options={agents.map(agent => ({
                        value: agent.id,
                        label: `${agent.name} ${agent.surname}`,
                    }))}
                />
            </Form.Item>
        </div>
    );
};

export default AgentSelect;
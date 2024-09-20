import React from 'react';
import stylesForm from "../../listing/form.module.scss";
import stylesAgent from "../agent.module.scss";
import {Form, Input} from "antd";
import {AgentType} from "../../../../types/form/form.type";

const AgentsDetails = () => {
    return (
        <div
            className={stylesForm.column}
        >
            <div
                className={`${stylesForm.row} ${stylesAgent.agentRow} `}
            >
                <Form.Item<AgentType>
                    label="სახელი"
                    name="name"
                    rules={[{required: true, message: "სავალდებულოა!"}, {
                        type: "string",
                        min: 2,
                        message: "სავალდებულოა მინიმუმ 2 სიმბოლო!"
                    }]}
                    layout="vertical"
                    className={stylesForm.formItemInput}
                    validateFirst={true}
                >
                    <Input/>
                </Form.Item>
                <Form.Item<AgentType>
                    label="გვარი"
                    name="surname"
                    rules={[{required: true, message: "სავალდებულოა!"}, {
                        type: "string",
                        min: 2,
                        message: "სავალდებულოა მინიმუმ 2 სიმბოლო!"
                    }]}
                    layout="vertical"
                    className={stylesForm.formItemInput}
                    validateFirst={true}
                >
                    <Input/>
                </Form.Item>
            </div>
            <div
                className={`${stylesForm.row} ${stylesAgent.agentRow} `}

            >
                <Form.Item<AgentType>
                    label="ელ-ფოსტა"
                    name="email"
                    rules={[
                        {required: true, message: "სავალდებულოა!"}, {
                            type: "email",
                            message: "მიუთითეთ სწორი ელ-ფოსტა"
                        },
                        {
                            validator: (_, value) => {
                                if (typeof value === 'string' && !value.endsWith('@redberry.ge')) {
                                    return Promise.reject(new Error("სტრიქონი უნდა მთავრდებოდეს @redberry.ge-ით!"));
                                }
                                return Promise.resolve();
                            },
                        },
                    ]}
                    layout="vertical"
                    className={stylesForm.formItemInput}
                    validateFirst={true}
                >
                    <Input/>
                </Form.Item>
                <Form.Item<AgentType>
                    label="ტელეფონის ნომერი"
                    name="phone"
                    rules={[
                        {required: true, message: "სავალდებულოა!"},
                        {
                            validator: (_, value) => {
                                if (isNaN(value)) {
                                    return Promise.reject(new Error("ტელეფონის ნომერი უნდა იყოს რიცხვი!"));
                                }
                                const phoneRegex = /^5\d{8}$/;
                                if (!phoneRegex.test(value)) {
                                    return Promise.reject(new Error("ტელეფონის ნომერი უნდა იყოს ფორმატში 5XXXXXXXX!"));
                                }
                                return Promise.resolve();
                            },
                        },
                    ]}
                    layout="vertical"
                    className={stylesForm.formItemInput}
                    validateFirst={true}
                >
                    <Input type="number"/>
                </Form.Item>
            </div>
        </div>
    );
};

export default AgentsDetails;
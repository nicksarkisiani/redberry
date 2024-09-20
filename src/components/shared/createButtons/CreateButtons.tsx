import React from 'react';
import {Button, Space} from "antd";

interface CreateButtonProps {
    textFirst: string
    textSecond: string
    icon?: React.ReactNode
    onClickFirst?: Function
    onClickSecond?: Function
    reverse?: boolean
}

const CreateButtons: React.FC<CreateButtonProps> = ({
                                                        textFirst,
                                                        textSecond,
                                                        onClickFirst,
                                                        onClickSecond,
                                                        icon,
                                                        reverse
                                                    }) => {
    return (
        <Space dir={!!reverse ? "rtl" : "ltr"}>
            <Button type="primary" ghost={true} onClick={() => onClickFirst && onClickFirst()} htmlType="reset"
                    size="large" style={{color: "#F93B1D", borderColor: "#F93B1D"}}>
                {icon}{textFirst}
            </Button>
            <Button type="primary" htmlType="submit" size="large" style={{backgroundColor: "#F93B1D"}} onClick={() => onClickSecond && onClickSecond()}>
                {icon}{textSecond}
            </Button>
        </Space>
    );
};

export default CreateButtons;
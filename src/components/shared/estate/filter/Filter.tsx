import React from 'react';
import {Select, SelectItem} from "@nextui-org/react";

const Filter = () => {
    return (
        <div>
            <Select
                size="sm"
                label="Select an animal"
                className="max-w-xs"
            >
                <SelectItem key="123">123</SelectItem>
            </Select>
        </div>
    );
};

export default Filter;
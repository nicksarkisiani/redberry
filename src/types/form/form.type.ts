import type {UploadChangeParam} from "antd/es/upload";
import {UploadFile} from "antd";

export type FieldType = {
    is_rental: number
    address: string
    zip_code: number
    image: UploadChangeParam<UploadFile<any>>
    city_id: number
    region_id: number
    price: number
    area: number
    bedrooms: number
    agent_id: number
    description: string
};

export type AgentType = {
    name: string
    surname: string
    email: string
    phone: number
    avatar: UploadChangeParam<UploadFile<any>>
}
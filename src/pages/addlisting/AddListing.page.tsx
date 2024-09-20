import React from 'react';
import { Typography } from "antd";
import styles from "./addListingPage.module.scss"
import AddListingForm from "../../components/ui/form/addListingForm/AddListingForm";

const AddListingPage = () => {
    return (
        <div className={styles.container}>
            <Typography.Title level={2} className={styles.title}>ლისტინგის დამატება</Typography.Title>
            <AddListingForm />
        </div>
    );
};


export default AddListingPage;
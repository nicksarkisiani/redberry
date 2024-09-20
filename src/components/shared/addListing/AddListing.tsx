import React from 'react';
import Button from "../button/Button";
import {useNavigate} from "react-router";

const AddListing = () => {

    const navigate = useNavigate();

    const addListing = () => {
        navigate("/add-listing")
    }

    return (
        <Button onClick={addListing}>ლისტინგის დამატება</Button>
    );
};

export default AddListing;
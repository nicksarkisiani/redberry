import React from 'react';
import Filter from "../../shared/estate/filter/Filter";
import AddListing from "../../shared/estate/addListing/AddListing";

const Toolbar = () => {
    return (
        <div>
            <Filter />
            <div>
                <AddListing />
            </div>
        </div>
    );
};

export default Toolbar;
import React from 'react';
import {useLoaderData} from "react-router";
import {LoaderFunction} from "react-router-dom";
import {IEstate} from "../../types/store";
import {$api} from "../../http";
import {AxiosResponse} from "axios";

export const listingLoader: LoaderFunction = async ({params}): Promise<IEstate> =>  {
    const listingId = params.id as string
    const estate: AxiosResponse<IEstate> = await $api.get(`/real-estates/${listingId}`)
    console.log(estate.data)
    return estate.data
}

const ListingPage = () => {

    const listing = useLoaderData() as { listing: IEstate}

    return (
        <div>

        </div>
    );
};

export default ListingPage;
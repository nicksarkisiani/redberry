import React from 'react';
import {useLoaderData} from "react-router";
import {LoaderFunction} from "react-router-dom";
import {IEstate} from "../../types/store";
import {$api} from "../../http";
import {AxiosResponse} from "axios";
import {Button, Typography} from "antd";
import {ArrowLeftOutlined, MailOutlined, PhoneOutlined} from "@ant-design/icons";
import styles from "./listingPage.module.scss"
import Image from "../../components/shared/image/Image";
import Field from "../../components/shared/field/Field";
import LocationSvg from "../../components/shared/svgs/LocationSvg";
import AreaSvg from "../../components/shared/svgs/AreaSvg";
import BedSvg from "../../components/shared/svgs/BedSvg";
import SignSvg from "../../components/shared/svgs/SignSvg";

export const listingLoader: LoaderFunction = async ({params}): Promise<IEstate> => {
    const listingId = params.id as string
    const estate: AxiosResponse<IEstate> = await $api.get(`/real-estates/${listingId}`)
    return estate.data
}

const ListingPage = () => {
    const listing = useLoaderData() as IEstate

    return (
        <div className={styles.container}>
            <div>
                <Button className={styles.button}>
                    <ArrowLeftOutlined/>
                </Button>
                <div className={styles.row}>
                    <div className={styles.left}>
                        <Image width={"839px"} height={"670px"} src={listing.image}/>
                    </div>

                    <div className={styles.right}>
                        <div className={styles.listingInfo}>
                            <div className={styles.infos}>
                                <Typography.Title level={2}>{listing.price} ₾</Typography.Title>

                                <div className={styles.locationInfo}>
                                    <Field fontSize={24} color={"#808A93"}><LocationSvg/> {listing.address}</Field>
                                    <Field fontSize={24} color={"#808A93"}><AreaSvg/> {listing.area} მ <sup
                                        style={{fontSize: "11px"}}>2</sup></Field>
                                    <Field fontSize={24} color={"#808A93"}><BedSvg/> საძინებელი {listing.bedrooms}
                                    </Field>
                                    <Field fontSize={24} color={"#808A93"}><SignSvg/> საფოსტო ინდექსი {listing.zip_code}
                                    </Field>
                                </div>
                            </div>

                            <div className={styles.description}>
                                <Field lineHeight={"26px"} fontSize={16} color={"#808A93"}>იყიდება ბინა ჭავჭავაძის
                                    ქუჩაზე, ვაკეში. ბინა არის
                                    ახალი რემონტით, ორი საძინებლითა და დიდი აივნებით. მოწყობილია ავეჯითა და
                                    ტექნიკით. </Field>
                            </div>
                        </div>

                        <div className={styles.agentInfo}>
                            <div className={styles.agent}>
                                <div className={styles.agentAbout}>
                                    <div className={styles.thumbnail}>
                                        <Image width={"72px"} height={"72px"} src={require("../../assets/images/woman.png")}  />
                                    </div>
                                    <div className={styles.agentName}>
                                        <Typography.Title level={4}>სოფიო გელოვანი</Typography.Title>
                                        <Field fontSize={14} color={"#676E76"}>აგენტი</Field>
                                    </div>
                                </div>

                                <div className={styles.agentContact}>
                                    <Field fontSize={14} color={"#808A93"}><MailOutlined /> sophio.gelovani@redberry.ge</Field>
                                    <Field fontSize={14} color={"#808A93"}><PhoneOutlined /> 577 777 777</Field>
                                </div>
                            </div>

                            <div className={styles.delete}>
                                <Button className={styles.button}>
                                    ლისტინგის წაშლა
                                </Button>
                            </div>
                        </div>
                    </div>

                </div>

                <div>
                    <Typography.Title level={2}>ბინები მსგავს ლოკაციაზე</Typography.Title>
                    <div>

                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default ListingPage;
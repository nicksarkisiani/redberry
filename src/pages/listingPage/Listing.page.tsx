import React, {useState} from 'react';
import {useLoaderData, useNavigate} from "react-router";
import {LoaderFunction} from "react-router-dom";
import {IEstate} from "../../types/store";
import {$api} from "../../http";
import {AxiosResponse} from "axios";
import {Button, Modal, Typography} from "antd";
import {ArrowLeftOutlined, MailOutlined, PhoneOutlined} from "@ant-design/icons";
import styles from "./listingPage.module.scss"
import Image from "../../components/shared/image/Image";
import Field from "../../components/shared/field/Field";
import LocationSvg from "../../components/shared/svgs/LocationSvg";
import AreaSvg from "../../components/shared/svgs/AreaSvg";
import BedSvg from "../../components/shared/svgs/BedSvg";
import SignSvg from "../../components/shared/svgs/SignSvg";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import Card from "../../components/shared/card/Card";
import CreateButtons from "../../components/shared/createButtons/CreateButtons";
import {useActions} from "../../hooks/useActions";

export const listingLoader: LoaderFunction = async ({params}): Promise<IEstate> => {
    const listingId = params.id as string
    const estate: AxiosResponse<IEstate> = await $api.get(`/real-estates/${listingId}`)
    return estate.data
}

const ListingPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const {fetchEstates} = useActions()
    const listing = useLoaderData() as IEstate

    const {estates} = useTypedSelector(state => state.estate)

    const recommendation = estates.filter(estate => estate.city.region_id === listing.city.region_id && estate.id !== listing.id)
    const navigate = useNavigate()

    const onClickHandler = (id: number) => {
        navigate(`/listing/${id}`)
    }

    const deleteListing = async () => {
        await $api.delete(`real-estates/${listing.id}`)
        await fetchEstates()
        navigate(`/`)
    }

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div className={styles.container}>
            <div className={styles.gap}>
                <Button className={styles.button} onClick={() => navigate("/")}>
                    <ArrowLeftOutlined/>
                </Button>
                <div className={styles.row}>
                    <div className={styles.left}>
                        <Image width={"839px"} height={"670px"} src={listing.image}/>
                        <Field fontSize={16} color={"#808A93"}>გამოქვეყნების თარიღი 08/08/24</Field>
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
                                        <Image width={"72px"} height={"72px"}
                                               src={require("../../assets/images/woman.png")}/>
                                    </div>
                                    <div className={styles.agentName}>
                                        <Typography.Title level={4}>სოფიო გელოვანი</Typography.Title>
                                        <Field fontSize={14} color={"#676E76"}>აგენტი</Field>
                                    </div>
                                </div>

                                <div className={styles.agentContact}>
                                    <Field fontSize={14}
                                           color={"#808A93"}><MailOutlined/> sophio.gelovani@redberry.ge</Field>
                                    <Field fontSize={14} color={"#808A93"}><PhoneOutlined/> 577 777 777</Field>
                                </div>
                            </div>

                            <div className={styles.delete}>
                                <Button className={`${styles.button} ${styles.font}`}
                                        onClick={() => setIsModalOpen(true)}>
                                    ლისტინგის წაშლა
                                </Button>
                                <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}
                                       width={623} height={222}>
                                    <div className={styles.modal}>
                                        <Typography.Title level={3} className={styles.font}>გსურთ წაშალოთ
                                            ლისტინგი?</Typography.Title>
                                        <CreateButtons textFirst={"გაუქმება"} textSecond={"დადასტურება"}
                                                       onClickFirst={handleCancel} onClickSecond={deleteListing}/>
                                    </div>

                                </Modal>
                            </div>
                        </div>
                    </div>

                </div>

                <div>
                    <Typography.Title level={2} className={styles.font}>ბინები მსგავს ლოკაციაზე</Typography.Title>
                    <div>
                        <Swiper
                            spaceBetween={150}
                            slidesPerView={4}
                        >
                            {recommendation.map(estate => (
                                <SwiperSlide key={estate.id}>
                                    <Card is_rental={estate.is_rental} price={estate.price} address={estate.address}
                                          bedrooms={estate.bedrooms} area={estate.area} zip_code={estate.zip_code}
                                          img_path={estate.image} key={estate.id} onClick={onClickHandler}
                                          id={estate.id}/> </SwiperSlide>
                            ))}

                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListingPage;
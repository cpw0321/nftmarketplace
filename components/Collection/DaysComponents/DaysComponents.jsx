'use client'
import React from 'react'

import Style from "./DaysComponents.module.css";
import images from "../../../img";

import Image from "next/image";
import { MdVerified } from "react-icons/md";

const DaysComponents = ({ el, i }) => {
    return (
        <div className={Style.daysComponents}>
            <div className={Style.daysComponents_box}>
                <div className={Style.daysComponents_box_img}>
                    <Image
                        src={el.background}
                        className={Style.daysComponents_box_img_img}
                        alt="profile background"
                        width={200}
                        height={200}
                        objectFit="cover"
                    />
                </div>

                <div className={Style.daysComponents_box_profile}>
                    <Image
                        src={images.creatorbackground2}
                        className={Style.daysComponents_box_img_1}
                        alt="profile picture"
                        width={120}
                        height={120}
                    />
                    <Image
                        src={images.creatorbackground2}
                        className={Style.daysComponents_box_img_2}
                        alt="profile picture"
                        width={120}
                        height={120}
                    />
                    <Image
                        src={images.creatorbackground2}
                        className={Style.daysComponents_box_img_3}
                        alt="profile picture"
                        width={120}
                        height={120}
                    />
                </div>

                <div className={Style.daysComponents_box_title}>
                    <h2>Amazing Collection</h2>
                    <div className={Style.daysComponents_box_title_info}>
                        <div className={Style.daysComponents_box_title_info_profile}>
                            <Image
                                src={el.user}
                                alt="profile picture"
                                width={30}
                                height={30}
                                className={Style.daysComponents_box_title_info_profile_img}
                            />

                            <p>
                                Creator
                                <span>
                                    Shoai Bhai
                                    <small>
                                        <MdVerified />
                                    </small>
                                </span>
                            </p>
                        </div>

                        <div className={Style.daysComponent_box_title_info_price}>
                            <small>1.00 ETH</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DaysComponents
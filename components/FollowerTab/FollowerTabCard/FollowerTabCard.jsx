'use client'
import React from 'react'
import Image from 'next/image'
import Style from './FollowerTabCard.module.css'
import { MdVerified } from "react-icons/md";

const FollowerTabCard = ({ i, el }) => {
    return (
        <div className={Style.followerTabCard}>
            <div className={Style.followerTabCard_rank}>
                <p>
                    # {i + 1} <span>🥇</span>
                </p>
            </div>
            <div className={Style.followerTabCard_box}>
                <div className={Style.followerTabCard_box_img}>
                    <Image
                        className={Style.followerTabCard_box_img_img}
                        src={el.background}
                        alt="profile braground"
                        width={500}
                        height={200}
                    />
                </div>
                <div className={Style.followerTabCard_box_profile}>
                    <Image
                        className={Style.followerTabCard_box_profile_img}
                        alt="profile picture"
                        width={50}
                        height={50}
                        src={el.user}
                    />
                </div>

                <div className={Style.followerTabCard_box_info}>
                    <div className={Style.followerTabCard_box_info_name}>
                        <h4>
                            Giada Mann{""}{" "}
                            <span>
                                <MdVerified />
                            </span>
                        </h4>
                        <p>12.12 ETH</p>
                    </div>

                    <div className={Style.followerTabCard_box_info_following}>
                        {(
                            <a onClick={() => followMe()}>Following</a>
                        )}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FollowerTabCard



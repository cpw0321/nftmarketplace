import React from 'react'

import Style from './Profile.module.css'

import Image from 'next/image'
import images from "../../../img";
import Link from 'next/link';

import { FaUserAlt, FaRegImage, FaUserEdit } from "react-icons/fa";

const Profile = () => {
    return (
        <div className={Style.profile}>
            <div className={Style.profile_account}>
                <Image
                    src={images.user1}
                    width={50}
                    height={50}
                    alt="profile"
                    className={Style.profile_account_img}
                />

                <div className={Style.profile_account_info}>
                    <p>Shoaib Bhai</p>
                    <small>0x0...</small>
                </div>

            </div>
            <div className={Style.profile_menu}>
                <div className={Style.profile_menu_one_item}>
                    <FaUserAlt />
                    <p>
                        <Link href={{ pathname: "/myProfile" }}>My Profile</Link>
                    </p>
                </div>
                <div className={Style.profile_menu_one_item}>
                    <FaRegImage />
                    <p>
                        <Link href={{ pathname: "/my-items" }}>My Items</Link>
                    </p>
                </div>
                <div className={Style.profile_menu_one_item}>
                    <FaUserEdit />
                    <p>
                        <Link href={{ pathname: "/edit-profile" }}>Edit Profile</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Profile
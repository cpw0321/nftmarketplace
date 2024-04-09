'use client'
import React, { useState } from 'react';

import Style from './NavBar.module.css';

import { DiJqueryLogo } from "react-icons/di";
import { BsSearch } from "react-icons/bs";
import { MdNotifications } from "react-icons/md";
import { Button } from "../componentsindex";
import { CgMenuRight } from "react-icons/cg";

// internal import
import { Discover, HelpCenter, Notification, Profile, SideBar } from "./index";

import Image from "next/image";
import images from "../../img";

const NavBar = () => {
    const [discover, setDiscover] = useState(false)
    const [help, setHelp] = useState(false)
    const [notification, setNotification] = useState(false)
    const [profile, setProfile] = useState(false)
    const [openSideMenu, setOpenSideMenu] = useState(false)
    const openMenu = (e) => {
        const btnText = e.target.innerText;
        if (btnText === "Discover") {
            setDiscover((prevState) => !prevState);
            setHelp(false);
            setNotification(false);
            setProfile(false);
        } else if (btnText === "Help Center") {
            setHelp((prevState) => !prevState);
            setDiscover(false);
            setNotification(false);
            setProfile(false);
        } else {
            setDiscover(false);
            setHelp(false);
            setNotification(false);
            setProfile(false);
        }
    };

    const openNotification = () => {
        if (!notification) {
            setNotification(true)
            setDiscover(false)
            setHelp(false)
            setProfile(false)
        } else {
            setNotification(false)
        }
    };

    const openProfile = () => {
        if (!profile) {
            setProfile(true)
            setDiscover(false)
            setHelp(false)
            setNotification(false)
        } else {
            setProfile(false)
        }
    };

    const openSideBar = () => {
        if (!openSideMenu) {
            setOpenSideMenu(true)
        } else {
            setOpenSideMenu(false)
        }
    }
    return (
        <div className={Style.navbar}>
            <div className={Style.navbar_container}>
                <div className={Style.navbar_container_left}>
                    <div className={Style.logo}>
                        <DiJqueryLogo />
                    </div>
                    <div className={Style.navbar_container_left_box_input}>
                        <div className={Style.navbar_container_left_box_input_box}>
                            <input type="text" placeholder="Search NFT" />
                            <BsSearch className={Style.search_icon} />
                        </div>
                    </div>
                </div>

                <div className={Style.navbar_container_right}>
                    {/* discover */}
                    <div className={Style.navbar_container_right_discover}>
                        <p onClick={(e) => openMenu(e)}>Discover</p>
                        {
                            discover && (
                                <div className={Style.navbar_container_right_discover_box}>
                                    <Discover />
                                </div>
                            )
                        }
                    </div>

                    {/* help */}
                    <div className={Style.navbar_container_right_help}>
                        <p onClick={(e) => openMenu(e)}>Help Center</p>
                        {
                            help && (
                                <div className={Style.navbar_container_right_help_box}>
                                    <HelpCenter />
                                </div>
                            )
                        }
                    </div>

                    {/* notification */}
                    <div className={Style.navbar_container_right_notify}>
                        <MdNotifications
                            className={Style.notify}
                            onClick={() => openNotification()}
                        />
                        {notification && <Notification />}
                    </div>

                    {/* create button */}
                    <div className={Style.navbar_container_right_button}>
                        <Button className="Create" btnName="Create" handleClick={() => {}} />
                    </div>

                    {/* profile */}
                    <div className={Style.navbar_container_right_profile_box}>
                        <div className={Style.navbar_container_right_profile}>
                            <Image
                                src={images.user1}
                                width={40}
                                height={40}
                                alt="profile"
                                onClick={() => openProfile()}
                                className={Style.navbar_container_right_profile}
                            />

                            {profile && <Profile />}
                        </div>
                    </div>

                    {/* menu */}
                    <div className={Style.navbar_container_right_menuBtn}>
                        <CgMenuRight
                            className={Style.menuIcon}
                            onClick={() => openSideBar()}
                        />
                    </div>
                </div>
            </div>

            {/* side bar */}
            {
                openSideMenu && (
                    <div className={Style.sideBar}>
                        <SideBar setOpenSideMenu={setOpenSideMenu} />
                    </div>
                )
            }


        </div>
    )
}

export default NavBar
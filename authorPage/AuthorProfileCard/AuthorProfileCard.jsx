import React, { useState } from 'react'
import Image from "next/image";
import {
    MdVerified,
    MdCloudUpload,
    MdOutlineReportProblem,
} from "react-icons/md";
import { FiCopy } from "react-icons/fi";
import {
    TiSocialFacebook,
    TiSocialLinkedin,
    TiSocialYoutube,
    TiSocialInstagram,
} from "react-icons/ti";
import { BsThreeDots } from "react-icons/bs";
import Style from "./AuthorProfileCard.module.css";
import images from "../../img";
import { Button } from "../../components/componentsindex.js";

const AuthorProfileCard = () => {
    const [share, setShare] = useState(false);
    const [report, setReport] = useState(false);

    //copyAddress function
    const copyAddress = () => {
        const copyText = document.getElementById("myInput");

        copyText.select();
        navigator.clipboard.writeText(copyText.value);
    };

    const openShare = () => {
        if (!share) {
            setShare(true);
            setReport(false);
        } else {
            setShare(false);
        }
    };

    const openReport = () => {
        if (!report) {
            setReport(true);
            setShare(false);
        } else {
            setReport(false);
        }
    };
    return (
        <div className={Style.authorProfileCard}>
            <div className={Style.authorProfileCard_box}>
                <div className={Style.authorProfileCard_box_img}>
                    <Image
                        src={images.nft_image_1}
                        alt="author"
                        width={100}
                        height={100}
                        className={Style.authorProfileCard_box_img_img}
                    />
                </div>
            </div>
        </div>
    )
}

export default AuthorProfileCard
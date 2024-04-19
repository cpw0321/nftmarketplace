import React, { useCallback, useState } from 'react'
import { useDropzone } from "react-dropzone";
import Style from "../styles/account.module.css";
import Image from 'next/image';
import images from '../img'

import From from "../accountPage/Form/Form";

const account = () => {
  const [fileUrl, setFileUrl] = useState(null)
  const onDrop = useCallback(async (acceptedFiles) => {
    setFileUrl(acceptedFiles[0].preview)
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop
  });
  return (
    <div className={Style.account}>
      <div className={Style.account_info}>
        <h1>Profile settings</h1>
        <p>
          You can set preferred display name, create your profile URL and manage
          other personal settings.
        </p>
      </div>

      <div className={Style.account_box}>
        <div className={Style.account_box_img} {...getRootProps()}>
          <input type="text" {...getInputProps()} />
          <Image
            src={images.user1}
            width={150}
            height={150}
            alt="user"
            className={Style.account_box_img_img}
          />
          <p className={Style.account_box_img_para}>Change Image</p>
        </div>

        <div className={Style.account_box_from}>
            <From />
          </div>
      </div>
    </div>
  )
}

export default account
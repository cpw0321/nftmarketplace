import React from 'react'
import Style from './Banner.module.css'
import Image from 'next/image'
import images from '../../img'

const Banner = ({bannerImage}) => {
  return (
    <div className={Style.banner}>
        <div className={Style.banner_img}>
            <Image
                src={bannerImage}
                className={Style.banner_img_img}
                alt="background image"
                width={1600}
                height={300}
            />
        </div>
    </div>
  )
}

export default Banner
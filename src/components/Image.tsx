"use client"

import { Image } from "@imagekit/next";
const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

type ImageType = {
    path: string,
    w: number,
    h: number,
    alt: string,
    className?: string,
    tr?: boolean
}

const ImageProp = ({path, w, h, alt, className, tr} : ImageType) => {
    return (
    <Image 
        urlEndpoint = { urlEndpoint }
        src={ path } 
        {...(tr 
            ? { transformation : [{ width: String(w), height: String(h) }], width: Number(w), height: Number(h) }
            : {width:w, height:h} )}  
        alt={alt}
        className={className}
    />
    )
}

export default ImageProp
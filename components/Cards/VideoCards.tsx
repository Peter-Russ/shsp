// import React from 'react'; 
import style from './VideoCards.module.css';
import Image from 'next/image';
import Link from 'next/link';



export default async function Cards(video: Video) {

    return (
        <div className={style.card}>
            <Link href={`/video/${video.id}`}>
                <img className={style.image} src={video.image ?? ""} alt="" />
            </Link>

            <div className={style.videoData}>
                <img className={style.profileImg} src="https://pbs.twimg.com/profile_images/1546458449390739457/yBCOrrIR_400x400.jpg" alt="" />
                <div>
                    <h4>{video.title!}</h4>
                    <span>{video.description ?? ""}</span>
                </div>
            </div>
        </div>
    )
}

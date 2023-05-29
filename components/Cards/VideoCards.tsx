// import React from 'react'; 
import style from './VideoCards.module.css';
import Image from 'next/image';

// async function getVideos() {
//     const videos = await fetch('http://localhost:3000/api/videos/getVideos')
// }

export default async function Cards() {

    // const videos: any = getVideos();

    // interface oder type videos array of objects dann mit fetch holen

    return (
        <>
    <div className={style.row}>
        <div className={style.card}>
            <img className={style.image} src="https://wallpapercave.com/wp/wp11491989.jpg" alt="" />
            <div className={style.videoData}>
                <img className={style.profileImg} src="https://pbs.twimg.com/profile_images/1546458449390739457/yBCOrrIR_400x400.jpg" alt="" />
                <div>
                    <h4>Zelda totk game of the year</h4>
                    <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit</span>
                </div>
            </div>

            
        </div>
        {/* <div className={style.card}>
            
        </div>
        <div className={style.card}>
            
        </div>
        <div className={style.card}>
            
        </div>
        <div className={style.card}>
            
        </div>
        <div className={style.card}>
        
        </div>
        <div className={style.card}>
        
        </div>
        <div className={style.card}>
        
        </div>
        <div className={style.card}>
        
        </div>

        <div className={style.card}>
        
        </div> */}
    </div>
    </>
  )
}

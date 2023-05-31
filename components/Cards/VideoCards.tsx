// import React from 'react'; 
import style from './VideoCards.module.css';
import Image from 'next/image';
import prisma from '@lib/prismadb';



export default async function Cards() {

    // async function getVideos() {
    //     try{
    //         let temp: any = await fetch('http://localhost:3000/api/videos/getVideos', {method: 'GET'})
    //         console.log(temp);
    //         return temp;
    //     } catch (error) {
    //         console.log(error);
    //     }
    
    // }

    // const videos: VideoArray = await getVideos();

    const videos = await prisma.video.findMany();
    

    // interface oder type videos array of objects dann mit fetch holen


    return (
        <>
    <div className={style.row}>
        {videos.map((video) => {
            return (
            <div className={style.card}>
                <img className={style.image} src={video.image!} alt="" />
                <div className={style.videoData}>
                    <img className={style.profileImg} src="https://pbs.twimg.com/profile_images/1546458449390739457/yBCOrrIR_400x400.jpg" alt="" />
                    <div>
                        <h4>{video.title!}</h4>
                        <span>{video.description!}</span>
                    </div>
                </div>
            </div>
            );
            })}
        
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

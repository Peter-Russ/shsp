import prisma from '@lib/prismadb'
import style from './videoPage.module.css'

interface Props {
    params: {
        videoId: string;
    }
}

export default async function VideoPlayer({params}: Props) {
    
    const foundVideo: any = await prisma.video.findUnique({ where: { id: params.videoId } });
    const video: Video = foundVideo;

    const similarVideos = await prisma.video.findMany();
    // const videos = await prisma.video.findMany(where: { tags: ...);

    // const user : any = await prisma.user.findUnique({ where: { id: video.userId }})

    return (
        <div className={style.videoPage}>
            <section className={style.column}>
                
                <video width="1200" height="auto" controls={true} autoPlay={true} src="https://www.youtube.com/watch?v=We80b2McYnc">

                </video>
                <div className={style.videoInfo}>
                    <img className={style.profileImg} src="https://pbs.twimg.com/profile_images/1546458449390739457/yBCOrrIR_400x400.jpg" alt="" />
                    <h1>{video.title}</h1>
                </div>
            </section>

            <section className={style.column}>
                {similarVideos.map((video) => {
                    return(
                            <div key={video.id} className={style.row}>
                                <img src={video.image!}  className={style.thumbnail} alt="" />
                                <div className={style.videoData}>
                                    <span>{video.title}</span>
                                    <img className={style.pfimg} src="https://pbs.twimg.com/profile_images/1546458449390739457/yBCOrrIR_400x400.jpg" alt="" />
                                    <span>Pong_Blog</span>
                                </div>
                            </div>
                        )
                    }
                )}
            </section>
        </div>

    )
}
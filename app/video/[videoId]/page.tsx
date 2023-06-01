import prisma from '@lib/prismadb'

interface Props {
    params: {
        videoId: string;
    }
}

export default async function VideoPlayer({params}: Props) {
    
    const foundVideo: any = await prisma.video.findUnique({ where: { id: params.videoId } });

    const video: Video = foundVideo;
    return (
        <div>
            {video.title}
        </div>
    )
}
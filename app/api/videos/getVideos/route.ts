import prisma from '@lib/prismadb';


export async function GET(request: Request) {

      const videos: any = await prisma.video.findMany({
        // where: { 

        // }
      });

    return new Response(JSON.stringify({videos}));

}
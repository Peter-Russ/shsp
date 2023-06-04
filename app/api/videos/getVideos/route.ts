import prisma from '@lib/prismadb';
import { NextResponse } from 'next/server';


export async function GET(request: Request) {

      const videos: any = await prisma.video.findMany({
        take: 8
      });

    return NextResponse.json(videos);

}
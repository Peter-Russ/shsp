import prisma from "@lib/prismadb";
import * as bcrypt from "bcrypt";

interface RequestBody {
    title: string | null;
    description: string | null;
    tags: string[];
    userId: string;
    image: string | null;
}

// upload nur mit access token ... noch einfügen

export async function POST(request: Request) {

    const body: RequestBody = await request.json();

    const video = await prisma.video.create({
        data: {
            title: body.title,
            description: body.description,
            tags: body.tags,
            userId: body.userId,
            image: body.image,

        }
    });

    return new Response(JSON.stringify(video));


    // create user and sign in implementieren
}
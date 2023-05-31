import prisma from "@lib/prismadb";
import * as bcrypt from "bcrypt";

interface RequestBody {
    userName: string;
    email: string;
    password: string;
}

export async function POST(request: Request) {

    const body: RequestBody = await request.json();

    const user = await prisma.user.create({
        data: {
            userName: body.userName,
            email: body.email,
            password: await bcrypt.hash(body.password, 10)
        }
    });

    const {password, ...rest} = user;
    return new Response(JSON.stringify(rest));


    // create user and sign in implementieren
}
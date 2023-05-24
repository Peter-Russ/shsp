import prisma from "@lib/prismadb"
import * as bcrypt from "bcrypt"

interface RequestBody {
    name: string;
    email: string;
    password: string;
}

export async function Post(request: Request) {

    const body: RequestBody = await request.json();

    const user = await prisma.user.findUnique({
        where: {
            email: body.email
        }
    });

    if (user && (await bcrypt.compare(body.password, user.password))) {
        return {
            status: 200,
            body: {
                user: user
            }
        }
    }
} 

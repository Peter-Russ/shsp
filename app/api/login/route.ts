import prisma from "@lib/prismadb"
import * as bcrypt from "bcrypt"

interface RequestBody {
    email: string;
    password: string;
}

export async function POST(request: Request) {

    const body: RequestBody = await request.json();

    const user = await prisma.user.findUnique({
        where: {
            email: body.email
        }
    });

    if (user && (await bcrypt.compare(body.password, user.password!))) {
       
        const {password, ...userWithoutPassword} = user;
        return new Response(JSON.stringify(userWithoutPassword));

    } else {
        return new Response(JSON.stringify({error: "User or password incorrect"}));
    }
    
} 

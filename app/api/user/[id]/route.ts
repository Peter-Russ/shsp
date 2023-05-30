// import { verifyJwtAccessToken } from "@lib/jwt";
// import prisma from "@lib/prismadb";

// export async function GET(request: Request, {params}:{params:{id:string}}) {

//     const accessToken = request.headers.get("accessToken");

//     if (!accessToken || !verifyJwtAccessToken(accessToken as string)) {
//         return new Response(JSON.stringify({
//             error: "unauthorized"
//         }),{
//             status: 401,
//         })
//     }


//     // const userPosts = await prisma.post.findMany({
//     //     where: { authorId: +params.id },
//     //     include: {
//     //       author: {
//     //         select: {
//     //           email: true,
//     //           name: true,
//     //         },
//     //       },
//     //     },
//     //   });

//     return new Response(JSON.stringify({hello:"world"}));
// }

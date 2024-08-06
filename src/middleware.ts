import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
import { NextRequest } from "next/server";
export default withAuth(
    async function middleware(req: any) {
        // console.log("look at me", req.kindeAuth);
    },
    {
        isReturnToCurrentPage: true,
    }
);

export const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico).*)",
        "/dashboard",
        "/room/:id",
    ]
};

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";
import { dbPostgres } from "../../../../../prisma";

export async function GET(request: Request,
    { params }: { params: { id: string } }) {
    try {
        const user = await (getKindeServerSession())?.getUser();
        if (!user) throw new Error("User not found");

        const { id } = params;
        if (!id) throw new Error("Missing id");
        const project = await dbPostgres.project.findUnique({
            where: {
                id: parseInt(id)
            }
        });
        return NextResponse.json(project);
    } catch (error) {
        console.error(error)
        const errorMessage = (error as Error)?.message || "Server Error";
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}

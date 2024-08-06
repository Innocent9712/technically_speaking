import { NextResponse } from "next/server";
import { dbPostgres } from "../../../../../prisma";

export async function GET(request: Request) {
    const users = await dbPostgres.user.findMany();
    return NextResponse.json(users);
}

export async function POST(request: Request) {
    const { first_name, last_name, id, email } = await request.json();
    const user = await dbPostgres.user.create({
        data: {
            id,
            first_name,
            last_name,
            email,
        },
    });
    return NextResponse.json(user, { status: 201 });
}

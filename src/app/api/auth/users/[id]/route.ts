// src/app/api/auth/users/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { dbPostgres } from "../../../../../../prisma";

export async function GET(request: Request,
    { params }: { params: { id: string } }) {
    const { id } = params;
    if (!id) {
        return NextResponse.json({ error: "Missing id" }, { status: 400 });
    }

    const user = await dbPostgres.user.findUnique({
        where: {
            id,
        },
    });

    if (!user) {
        return NextResponse.json({ error: "User not found" });
    }

    return NextResponse.json(user);
}

export async function PUT(request: Request,
    { params }: { params: { id: string } }) {
    const { id } = params;
    if (!id) {
        return NextResponse.json({ error: "Missing id" }, { status: 400 });
    }

    const { first_name, last_name, email } = await request.json();

    const user = await dbPostgres.user.update({
        where: {
            id
        },
        data: {
            first_name,
            last_name,
            email,
        },
    });

    return NextResponse.json(user);
}

export async function DELETE(request: Request,
    { params }: { params: { id: string } }) {
    const { id } = params;
    if (!id) {
        return NextResponse.json({ error: "Missing id" }, { status: 400 });
    }

    const user = await dbPostgres.user.delete({
        where: {
            id
        },
    });

    return NextResponse.json(user);
}

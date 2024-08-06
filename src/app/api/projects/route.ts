import { NextResponse } from "next/server";
import { dbPostgres, dbMongo } from "../../../../prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function GET(request: Request) {
    const user = await (getKindeServerSession())?.getUser();
    if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

    const projects = await dbPostgres.project.findMany({
        where: {
            OR: [
                {
                    ownerId: user.id
                },
                {
                    members: { some: { userId: user.id } }
                }
            ]
        }
    });
    return NextResponse.json(projects);
}

export async function POST(request: Request) {
    try {
        const user = await (getKindeServerSession())?.getUser();

        if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });
        const { title, description, start_date, content_agreement_date, event_date } = await request.json();
        const project = await dbPostgres.project.create({
            data: {
                title,
                description,
                proposedStartDate: new Date(start_date).toISOString(),
                contentDueDate: new Date(content_agreement_date).toISOString(),
                eventDate: new Date(event_date).toISOString(),
                ownerId: user.id,
            },
        });
        let userExtras = await dbMongo.userExtras.findUnique(
            { where: { userId: user.id } }
        );
        if (userExtras) {
            await dbMongo.userExtras.update({
                where: {
                    userId: user.id
                },
                data: {
                    currentProject: project.id
                }
            });
        } else {
            await dbMongo.userExtras.create({
                data: {
                    userId: user.id,
                    currentProject: project.id
                }
            });
        }

        return NextResponse.json(project, { status: 201 });
    } catch (error) {
        console.error(error)
        const errorMessage = (error as Error)?.message || "Server Error";
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}

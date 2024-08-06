import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import { dbMongo, dbPostgres } from "../../../../prisma";
import { CreateCampaignPrompt } from "@/components/CreateCampaignPrompt";
import { DashboardContent } from "@/components/DashboardContent";

export default async function Dashboard() {
  const {getUser} = getKindeServerSession();
  const user = await getUser();
  let userExtra;

  if (user) {
    const dbUser = await dbPostgres.user.findUnique({
      where: {
        id: user?.id
      }
    })

    if (!dbUser) {
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/users`, {
        method: "POST",
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify({
          first_name: user?.given_name,
          last_name: user?.family_name,
          email: user?.email,
          id: user?.id
        })
      })
    } else {
      userExtra = await dbMongo.userExtras.findFirst({
        where: {
          userId: user?.id
        }
      })
    }
  }

  return (
    <>
      {
        userExtra?.currentProject ? <DashboardContent project={userExtra.currentProject} /> : <CreateCampaignPrompt />
      }
    </>
  );
}

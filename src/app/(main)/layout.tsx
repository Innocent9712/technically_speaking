import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import Image from "next/image";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {getUser} = getKindeServerSession();
  const user = await getUser();
  return (
    <html lang="en">
      <body>
        <header className="flex items-center justify-between p-4 bg-[#E5E5E569]">
          <div className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Technically Speaking Logo"
              width={100}
              height={80}
            />
          </div>
          <div className="flex items-center space-x-4">
            <Profile user={user} />
            {
              user &&
              <LogoutLink>
                <button className="text-[#707070] rounded-lg px-4 py-2 border border-[#707070] hover:bg-[#b1b1b169]">Logout</button>
              </LogoutLink>
            }
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}

function Profile({ user }: { user: KindeUser | null | undefined }) {
  return (
    <div className="flex items-center space-x-2">
      {
        user && user.picture ? (
          <Image
            className="w-8 h-8 rounded-full"
            src={user.picture} 
            alt="User Profile Picture"
            width={24}
            height={24}
            priority
          />
          
        ) : (
          <div className="w-8 h-8 rounded-full bg-gray-500">
            <p className="w-full h-full flex items-center justify-center text-white font-bold text-lg">{user?.given_name?.charAt(0).toUpperCase()}{user?.family_name?.charAt(0).toUpperCase()}</p>
          </div>
        )
      }
      <div className="flex flex-col">
        <span className="text-sm font-medium text-[#707070]">{user?.given_name} {user?.family_name}</span>
        <span className="text-xs font-small text-[#707070]">{user?.email}</span>
      </div>
    </div>
  );
}

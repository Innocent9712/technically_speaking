import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import Image from "next/image";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="flex items-center justify-between p-4 bg-gray-800">
          <div className="flex items-center">
            <h1 className="text-white font-bold text-2xl">Technically Speaking</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Profile />
            <LogoutLink>Log out</LogoutLink>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}

function Profile() {
  return (
    <div className="flex items-center space-x-2">
      <Image
        className="w-8 h-8 rounded-full"
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
        width={24}
        height={24}
        priority
      />
      <div className="flex flex-col">
        <span className="text-sm font-medium text-white">Tom Cook</span>
        <span className="text-xs font-medium text-gray-300">tom@example.com</span>
      </div>
    </div>
  );
}

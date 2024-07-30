import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Welcome to our website!</h1>
        <p className="mt-4 text-lg">
          Please sign in or sign up to start exploring our amazing content.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-2 gap-4 min-h-[70%]">
        <div className="rounded-lg shadow-md p-8">
          <LoginLink>Sign in</LoginLink>
        </div>
        <div className="rounded-lg shadow-md p-8">
          <RegisterLink>Sign up</RegisterLink>
        </div>
      </div>
    </main>
  );
}

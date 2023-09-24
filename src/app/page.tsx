import { Button } from "@/components/ui/button";
import { UserButton, auth } from "@clerk/nextjs";

export default async function Home() {
  const {userId} = await auth()
  const isAuth = !!userId

  return (
    <div className="w-screen min-h-screen bg-gradient-to-r from-rose-100 to teal-100">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center">
            <h1 className="mr-3 text-5x1 font-semibold">resume chat</h1>
            <UserButton afterSignOutUrl="/" />
          </div>

          <div className="flex mt-2">
            {isAuth && <Button>Go to chats</Button>}
          </div>
          <p className="max-w-xl mt-1 text-lg text-slate-600">
            Join thousands of job seekers to instantly revamp your resume and get the job you deserved.
          </p>
        </div>
      </div>
    </div>
  );
}
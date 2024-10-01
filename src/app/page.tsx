import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, LogIn } from "lucide-react";
import FileUpload from "@/components/FileUpload";

export const metadata: Metadata = {
  title: "CarePlusPlus - Resources",
};

export default async function Home() {
  const { userId } = auth();

  console.log(`user id is : ${userId}`);

  // if (!userId) throw Error("userId undefined");

  const isAuth = !!userId;

  return (
    <div className="w-screen min-h-screen">
    {/* <div className="w-screen min-h-screen bg-gradient-to-r from-rose-100 to-teal-100"> */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center">
            <Image
              src={logo}
              alt="CarePlusPlus logo"
              width={150}
              height={150}
            />
            <h1 className="mx-3 text-5xl font-semibold">CarePlusPlus</h1>
            <UserButton />
          </div>
          {/* <div className="flex mt-2">
            {isAuth && (
              <Button className="my-4">
                Go to Chats <ArrowRight className="ml-2" />
              </Button>
            )}
          </div> */}
          <p className="max-w-prose text-center mt-6">
            {/* <p className="max-w-xl mt-1 text-lg text-slate-600" > */}
            CarePlusPlus is a people-centered healthcare SuperApp toolbox for
            health literacy and education and promoting relationship between
            physical health, nutrition and mental well-being for optimal overall
            health.
            <br /> <br />
            We are currently starting with two apps in CarePlusPlus SuperApp,
            namely CarePlus and Moodl apps.
            <br /> <br />
            With CarePlus, people will be able to easily access health
            information provided by organizations.
            <br /> <br />
            With Moodl, track your mood and stress level manually and
            automatically using wearables, IoT with AI analytics, discover mood
            and stress relief activity recommendations, including connecting
            with experts or therapists in the field
          </p>

          <div className="w-full mt-4">
            {isAuth ? (
              // <FileUpload />
              <Button size="lg" asChild className="mt-4">
                <Link href="/dashboard">Open</Link>
              </Button>
            ) : (
              <Link href="/sign-in">
                <Button>
                  Login to get Started!
                  <LogIn className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

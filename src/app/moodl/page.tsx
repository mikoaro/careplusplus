import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import pickupgames from "@/assets/pickupgames.jpeg";
import walkbuddy from "@/assets/walkbuddy.jpeg";
import therapists from "@/assets/therapists.jpeg";
import gym from "@/assets/gym.jpeg";
import { Button } from "@/components/ui/button";
import { LayoutDashboardIcon } from "lucide-react";

export default function MoodlPage() {
  return (
    <div className="container mx-auto p-6 pt-20">
      <div className="flex justify-between">
        <h1 className="text-black mt-4 text-3xl">
          <b>Recommended activities to relief stress</b>
        </h1>
        <Button asChild>
          <Link href={"/dashboard"}>
            <LayoutDashboardIcon className="mr-2 size-4" />
            Applications
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-stretch mt-6">
        <Link href="/futuristic-metropolis" className="block group">
          <Card className="overflow-hidden transition-shadow hover:shadow-lg w-80 h-full">
            <Image
              src={pickupgames}
              alt="Pickup Games"
              width={400}
              height={200}
              className="w-full h-48 object-center transition-transform group-hover:scale-105"
            />
            <CardHeader>
              <CardTitle className="group-hover:text-primary transition-colors">
                Pickup Games
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Join local pickup games and connect with other athletes.
              </CardDescription>
            </CardContent>
          </Card>
        </Link>

        <Link href="/tranquil-oasis" className="block group">
          <Card className="overflow-hidden transition-shadow hover:shadow-lg w-80 h-full">
            <Image
              src={walkbuddy}
              alt="Serene nature scene"
              width={200}
              height={200}
              className="w-full h-48 object-center transition-transform group-hover:scale-105"
            />
            <CardHeader>
              <CardTitle className="group-hover:text-primary transition-colors">
                Walking Buddy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Get a walking buddy near me like meetup.
              </CardDescription>
            </CardContent>
          </Card>
        </Link>

        <Link href="/therapists" className="block group">
          <Card className="overflow-hidden transition-shadow hover:shadow-lg w-80 h-full">
            <Image
              src={therapists}
              alt="Serene nature scene"
              width={400}
              height={200}
              className="w-full h-48 object-center transition-transform group-hover:scale-105"
            />
            <CardHeader>
              <CardTitle className="group-hover:text-primary transition-colors">
                Therapists
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Connect with licensed therapists, pyschologists or counselors
                and experience the most convenient, affordable way to improve
                your mental health
              </CardDescription>
            </CardContent>
          </Card>
        </Link>

        <Link href="/tranquil-oasis" className="block group">
          <Card className="overflow-hidden transition-shadow hover:shadow-lg w-80 h-full">
            <Image
              src={gym}
              alt="Serene nature scene"
              width={400}
              height={200}
              className="w-full h-48 object-center transition-transform group-hover:scale-105"
            />
            <CardHeader>
              <CardTitle className="group-hover:text-primary transition-colors">
                Gym
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Gym connect.</CardDescription>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
}

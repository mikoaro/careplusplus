import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import careplus from "@/assets/careplus.jpeg";
import moodle from "@/assets/moodl.jpeg";

const DashboardIndexPage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-black my-4 text-3xl">
          <b>Applications</b>
        </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Link href="/chat/14" className="block group">
          <Card className="overflow-hidden h-full">
            <Image
              src={careplus}
              alt="Careplus"
              width={200}
              height={600}
              className="w-full h-60 object-center"
            />
            <CardHeader>
              <CardTitle>CarePlus</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Health literacy application for people to easily access health
                information provided by organizations.
              </CardDescription>
            </CardContent>
          </Card>
        </Link>

        <Link href="/moodl" className="block group">
          <Card className="overflow-hidden h-full">
            <Image
              src={moodle}
              alt="Moodl"
              width={400}
              height={200}
              className="w-full h-60 object-center"
            />
            <CardHeader>
              <CardTitle>Moodl</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Track your mood and stress level manually and automatically
                using wearables, IoT with AI analytics, discover mood and stress
                relief activity recommendations, including connecting with
                experts or therapists in the field.
              </CardDescription>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default DashboardIndexPage;

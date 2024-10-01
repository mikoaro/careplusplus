import { Button } from "@/components/ui/button";
import { FileIcon, PlusCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

const ApplicationsRoute = () => {
  return (
    <>
      <div className="flex w-full justify-end">
        <Button asChild>
          <Link href={"/dashboard/applications/new"}>
            <PlusCircle className="mr-2 size-4" />
            Create App
          </Link>
        </Button>
      </div>
      <div className="flex flex-col items-center justify-center rounded-md border border-dashed p-8 text-center animate-in fade-in-50">
        <div className="flex size-20 items-center justify-center rounded-full bg-primary/10">
          <FileIcon className="size-10 text-primary" />
        </div>
        <h2 className="mt-6 text-xl font-semibold">
          You don't have any Apps added
        </h2>
        <p className="mb-8 mt-2 text-center text-sm leading-tight text-muted-foreground max-w-sm mx-auto">
          You currently don't have any Apps. Please add some so that you can see
          them right here!
        </p>
        <Button asChild>
          <Link href={"/dashboard/applications/new"}>
            <PlusCircle className="mr-2 size-4" />
            Create App
          </Link>
        </Button>
      </div>
    </>
  );
};

export default ApplicationsRoute;

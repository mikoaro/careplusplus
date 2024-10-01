import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const NewApplicationRoute = () => {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <Card className="max-w-[450px]">
        <CardHeader>
          <CardTitle>Create App</CardTitle>
          <CardDescription>
            Create your App here. Click the button below once you're done...
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-y-6">
            <div className="grid gap-2">
              <Label>App Name</Label>
              <Input placeholder="App Name" />
            </div>
            <div className="grid gap-2">
              <Label>Subdirectory</Label>
              <Input placeholder="Subdirectory" />
            </div>
            <div className="grid gap-2">
              <Label>Description</Label>
              <Textarea placeholder="Small Description for your App" />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button>
            Submit
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default NewApplicationRoute;

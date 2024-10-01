import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ResourcesPage() {
  return (
    <div className="p-10">
      <h1>Hello World</h1>
      <Button size="lg" asChild>
        <Link href="/">Home</Link>
      </Button>
    </div>
  );
}
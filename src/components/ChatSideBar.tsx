"use client";
import { DrizzleChat } from "@/lib/db/schema";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import {
  HomeIcon,
  LayoutDashboardIcon,
  MessageCircle,
  PlusCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import axios from "axios";
import SubscriptionButton from "./SubscriptionButton";
import FileUpload from "./FileUpload";

type Props = {
  chats: DrizzleChat[];
  chatId: number;
  isPro: boolean;
};

const ChatSideBar = ({ chats, chatId, isPro }: Props) => {
  const [loading, setLoading] = React.useState(false);

  return (
    <div className="w-full max-h-screen overflow-scroll soff p-4 text-gray-200 bg-slate-300">
      <Link href="/dashboard">
        <Button className="w-full border-dashed border-white border bg-cyan-500">
          <LayoutDashboardIcon className="mr-2 w-4 h-4" />
          Applications
        </Button>
      </Link>

      <div className="flex max-h-screen  pb-20 flex-col gap-2 mt-4 bg-slate-300">
        {chats.map((chat) => (
          <Link key={chat.id} href={`/chat/${chat.id}`}>
            <div
              className={cn("rounded-lg p-3 text-slate-300 flex items-center ", {
                "bg-cyan-500 text-white": chat.id === chatId,
                "hover:text-white": chat.id !== chatId,
              })}
            >
              <MessageCircle className="mr-2" />
              <p className="w-full overflow-hidden text-sm truncate whitespace-nowrap text-ellipsis">
                {chat.pdfName}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ChatSideBar;

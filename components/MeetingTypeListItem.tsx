import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ItemsProps {
  img: string;
  title: string;
  description: string;
  handleClick: () => void;
  className: string;
}

export default function MeetingTypeListItem({
  img,
  title,
  description,
  handleClick,
  className,
}: ItemsProps) {
  return (
    <div
      className={cn(
        "px-4 py-6 flex flex-col justify-between w-full xk-max-w[270px] min-h-[260px] rounded-[14px] cursor-pointer",
        className
      )}
      onClick={handleClick}
    >
      <div className="flex-center glassmorphism size-12 rounded-xl cursor-pointer">
        <Image src={img} width={27} height={27} alt="meeting" />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-lg font-normla">{description}</p>
      </div>
    </div>
  );
}

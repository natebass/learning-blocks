import React from 'react';
import { Accessibility } from "@/feature/tabler-icons/icon/Accessibility";
import { Dot, World } from "@/feature/tabler-icons/icon";
import Image from 'next/image'
import { HelpCircle } from "@/feature/tabler-icons/icon/HelpCircle";
import { UserCircle } from "@/feature/tabler-icons/icon/UserCircle";

const TopNavbar = () => {
  return (
    <div className="bg-[#8A0505] text-white ">
      <div className="container mx-auto  py-2 px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/opensac_logo_icon.svg" alt="Logo" width={124} height={40}/>
          <button className="text-white flex items-center">
            <span className="text-[#FFFCF5]"><Dot className="mx-4"/></span>
            <span className="font-bold">Northstop Unified School District</span></button>
        </div>
        <div className="flex items-center gap-5">
          <button className="">
            <Accessibility/>
          </button>
          <button className="">
            <World/>
          </button>
          <button className="">
            <HelpCircle/>
          </button>
          <div className="flex items-center">
            <button className="rounded-full px-3 text-sm font-medium">
              <UserCircle height={44} width={44}/>
            </button>
            <span className="mr-2">John Smith</span>
            <button className="">
              Parent
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;

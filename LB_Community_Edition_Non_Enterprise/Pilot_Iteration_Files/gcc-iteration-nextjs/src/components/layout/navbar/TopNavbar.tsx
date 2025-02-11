import React from 'react';
import { Accessibility } from "@/feature/tabler-icons/icon/Accessibility";
import { ChevronDown, Dot, World } from "@/feature/tabler-icons/icon";
import { HelpCircle } from "@/feature/tabler-icons/icon/HelpCircle";
import { UserCircle } from "@/feature/tabler-icons/icon/UserCircle";
import { Settings } from "@/feature/tabler-icons/icon/Settings";
import Link from 'next/link';

const TopNavbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <div className="navbar-left">
          <Link href="/">
          <img src="/opensac_logo_icon.svg" alt="Logo" width="124" height="40"/>

          </Link>
          <button className="district-info">
            <Dot className="inline mx-4 text-nowrap"/>
            <span className="district-name">Northstop Unified School District</span>
            <ChevronDown
              className="district-button"/>
          </button>
        </div>
        <div className="navbar-middle">
          <button>
            <Accessibility/>
          </button>
          <button>
            <World/>
          </button>
          <button>
            <HelpCircle/>
          </button>
        </div>
        <div className="navbar-middle-mobile">
          <button><Settings/></button>
        </div>
        <div className="navbar-right">
          <button className="user-icon">
            <UserCircle height={44} width={44}/>
          </button>
          <div className="user-details">
            <span className="user-name">John Smith</span>
            <button className="user-role">
              Parent
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;

import React, { FC } from "react";
import { NavLink, Link } from "react-router-dom";
import { RiHomeFill } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";

import { IUser } from "../types/data";

import logo from "../assets/logo.png";
import { RoutePath } from "../routes";

interface ISidebarProps {
  user: IUser | undefined;
  closeToggle?: () => void;
}

const isActiveStyle =
  "flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize";
const isNotActiveStyle =
  "flex items-center px-5 gap-3 font-extrabold border-r-2 border-black transition-all duration-200 ease-in-out capitalize";

const Sidebar: FC<ISidebarProps> = (props) => {
  const handleCloseSidebar = () => {
    if (props.closeToggle) props.closeToggle();
  };

  return (
    <div className="flex flex-col justify-between bg-white h-full overflow-y-scroll min-w-210 hide-scrollbar">
      <div className="flex flex-col">
        <Link
          to={RoutePath.HOME}
          className="flex px-5 gap-2 my-6 pt-1 w-190 items-center"
          onClick={handleCloseSidebar}
        >
          <img src={logo} alt="logo" className="w-full" />
        </Link>
        <div className="flex flex-col gap-5">
          <NavLink
            to={RoutePath.HOME}
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
          >
            <RiHomeFill /> Home
          </NavLink>
          <h3 className="mt-3 px-5 text-base 2xl:text-xl">
            Discover categories
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

import { useState } from "react";
import logo from "./../assets/Images/logo.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
  HiPlus,
  HiDotsVertical,
} from "react-icons/hi";
import HeaderItem from "./HeaderItem";

function Header() {
  const [toggle, setToggle] = useState(false);

  const menuItems = [
    { name: "HOME", icon: HiHome },
    { name: "SEARCH", icon: HiMagnifyingGlass },
    { name: "WATCH LIST", icon: HiPlus },
    { name: "ORIGINALS", icon: HiStar },
    { name: "MOVIES", icon: HiPlayCircle },
    { name: "SERIES", icon: HiTv },
  ];

  const renderMenuItems = (items) => items.map((item, index) => (
    <HeaderItem key={index} name={item.name} Icon={item.icon} />
  ));

  return (
    <header className="flex items-center justify-between p-5">
      <div className="flex items-center gap-8">
        <img src={logo} alt="Logo" className="w-[80px] md:w-[115px] object-cover" />
        <nav className="hidden gap-8 md:flex">
          {renderMenuItems(menuItems)}
        </nav>
        <div className="flex gap-5 md:hidden">
          {renderMenuItems(menuItems.slice(0, 3))}
          <div onClick={() => setToggle(!toggle)}>
            <HeaderItem name={""} Icon={HiDotsVertical} />
            {toggle && (
              <div className="absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4">
                {renderMenuItems(menuItems.slice(3))}
              </div>
            )}
          </div>
        </div>
      </div>
      <img
        src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
        alt="User Avatar"
        className="w-[40px] rounded-full"
      />
    </header>
  );
}

export default Header;

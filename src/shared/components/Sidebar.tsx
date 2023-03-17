import { useEffect } from "react";
import { menu } from "../utility/menu";
import { Menu, UnFoldMore } from "./AllSVG";
import Menubar from "./Menubar";

import AOS from "aos";
import "aos/dist/aos.css";

const Sidebar = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out-back",
    });
  }, []);

  return (
    <div
      data-aos="fade-right"
      data-aos-delay="300"
      className="w-[302px] border-r border-brdColor lg:block hidden"
    >
      <div className="h-[88px] flex flex-row justify-between items-center py-[30px] px-[32px] border-b border-brdColor">
        <h4 className="font-bold text-xl text-textColor">Dashboard</h4>
        <Menu />
      </div>
      <div className="flex flex-col items-start p-8 gap-9">
        <div className="flex flex-row justify-between pb-8 gap-[53px] border-b border-brdColor">
          <div className="flex flex-row items-start p-0 gap-6">
            <img
              src={require("../../assests/images/Profile.png")}
              loading="lazy"
              alt="Avtar"
            />
            <div className="flex flex-col items-start gap-1">
              <h5 className="font-bold text-xs text-textColor">
                Nancy Martino
              </h5>
              <p className="font-bold text-[11px] text-textSecondary">
                Designer
              </p>
            </div>
          </div>
          <UnFoldMore />
        </div>
        {Array.isArray(menu) &&
          menu.map((menuItem: any, index: number) => (
            <Menubar menu={menuItem} key={index} />
          ))}
      </div>
    </div>
  );
};

export default Sidebar;

import { useEffect } from "react";
import { Folder, Notification, Search, Vector, Voice } from "./AllSVG";
import AOS from "aos";
import "aos/dist/aos.css";

const HeadContent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out-back",
    });
  }, []);

  return (
    <div
      data-aos="fade-right"
      data-aos-delay="1200"
      className="hidden h-[88px] w-full xl:flex justify-between items-center py-[20px] px-9 border-b border-brdColor"
    >
      <div className="flex items-center gap-8 w-[320px] h-[48px]">
        <div className="flex flex-col items-start gap-[12px] rounded-lg">
          <div className="flex items-center justify-between h-[48px] px-4 bg-[#ffffff] shadow-[0px,1px3px,rgba(96,108,128,0.05)] rounded-lg">
            <div className="flex items-center gap-[10px]">
              <Search />
              <input
                className="text-xs pt-[3px] text-[#98A2B3] font-bold outline-none"
                type="text"
                placeholder="Search Tasks"
              />
            </div>
            <Vector />
          </div>
        </div>
        <Voice />
      </div>

      <ul className="flex items-start gap-8 font-bold text-[11px] text-[#7A8699]">
        <li className="text-[#323C4D]">Dashboard</li>
        <li>My Tasks</li>
        <li>My Tasks</li>
        <li>Reporting</li>
        <li>Portfolios</li>
        <li>Goals</li>
      </ul>

      <div className="flex items-center gap-4">
        <Folder />
        <Notification />
        <img
          src={require("../../assests/images/Avatar (16).png")}
          loading="lazy"
          alt="Avatar"
        />
      </div>
    </div>
  );
};

export default HeadContent;

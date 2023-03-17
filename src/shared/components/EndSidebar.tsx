import { useEffect } from "react";
import { users } from "../utility/users";
import { Close, RightArrow } from "./AllSVG";
import AOS from "aos";
import "aos/dist/aos.css";

const EndSidebar = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out-back",
    });
  }, []);

  return (
    <div
      data-aos="fade-left"
      data-aos-delay="800"
      className="hidden lg:flex justify-end"
    >
      <div className="w-full flex flex-col justify-between items-center gap-[168px] border-l border-brdColor">
        <div className="w-[88px] h-[87px] flex flex-row justify-center items-center gap-[10px] border-b border-brdColor">
          <Close />
        </div>

        <div className="flex flex-col items-start gap-4">
          {Array.isArray(users) &&
            users.map((i: any, index: number) => (
              <img key={index} src={i} loading="lazy" alt="users" />
            ))}
        </div>

        <div className="w-[88px] h-[87px] flex flex-row justify-center items-center gap-[10px] border-t border-brdColor">
          <RightArrow />
        </div>
      </div>
    </div>
  );
};

export default EndSidebar;

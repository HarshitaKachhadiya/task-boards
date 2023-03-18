import { Menu } from "./AllSVG";
import BoardHeadContent from "./BoardHeadContent";
import Boards from "./Boards";
import HeadContent from "./HeadContent";
import { useState } from "react";
import MenuOptions from "./MenuOptions";

const Content = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      data-aos="fade-right"
      data-aos-delay="500"
      className="w-full flex flex-col items-start lg:whitespace-nowrap"
    >
      <div className="flex flex-col w-full lg:hidden">
        <div className="h-[88px] flex justify-between items-center py-[30px] px-[32px] border-b border-brdColor">
          <h4 className="font-bold text-xl text-textColor">Dashboard</h4>
          <div onClick={() => setIsOpen(!isOpen)}>
            <Menu />
          </div>
        </div>
        {isOpen && <MenuOptions />}
      </div>

      {!isOpen && (
        <div className="w-full">
          {/* HeadContent */}
          <HeadContent />

          {/* Board Content */}
          <div className="lg:p-9 p-4  flex flex-col gap-[44px] w-full">
            <BoardHeadContent />

            {/* Boards List */}
            <Boards />
          </div>
        </div>
      )}
    </div>
  );
};

export default Content;

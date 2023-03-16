import { Inbox, Menu, MenuOpen, UnFoldMore } from "./AllSVG";

const Sidebar = () => {
  return (
    // Sidebar

    <div className="w-[302px] h-[100vh] border-r border-brdColor">

        {/* Head */}

        <div className="flex flex-row justify-between items-center py-[30px] px-[32px] border-b border-brdColor">
            <h4 className="font-bold text-xl text-textColor">Dashboard</h4>
            <Menu />
        </div>

        {/* Content */}
        
        <div className="flex flex-col items-start p-8 gap-9">

            {/* User */}

            <div className="flex flex-row justify-between pb-8 gap-[53px] border-b border-brdColor">
              <div className="flex flex-row items-start p-0 gap-6">
                 <img src={require("../../assests/images/Avatar.png")} loading="lazy" alt="Avtar" />
                 <div className="flex flex-col items-start gap-1">
                   <h5 className="font-bold text-xs text-textColor">Nancy Martino</h5>
                   <p className="font-bold text-[11px] text-textSecondary">Designer</p>
                 </div>
              </div>
              <UnFoldMore />
            </div>

            {/* Menu */}

            <div className="flex flex-col items-start pb-8 gap-7 border-b border-brdColor">
               <div className="flex flex-row justify-between items-center gap-[130px] ">
                  <h5 className="text-xs font-bold text-[#98A2B3]">DASHBOARDS</h5>
                  <MenuOpen />
               </div>

               <div className="flex flex-col gap-6">
                  <div className="flex flex-row justify-between w-full gap-9">
                     <div className="flex flex-row items-center gap-4">
                        <Inbox />
                        <h5 className="font-semibold text-xs text-textColor">Inbox</h5>
                     </div>
                     <div className="flex flex-row items-center justify-center py-[5px] px-[8.5px] gap-[10px] bg-[#3b82f61a] rounded-2xl">
                        <p className="font-extrabold text-[10px] text-[#2563EB]">4</p>
                     </div>
                  </div>
               </div>
            </div>

        </div>
    </div>
  );
};

export default Sidebar;
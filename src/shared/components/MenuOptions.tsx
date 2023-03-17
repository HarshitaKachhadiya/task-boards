import {useEffect} from 'react';
import { menu } from "../utility/menu";
import AOS from 'aos';
import 'aos/dist/aos.css';

const MenuOptions = () => {
    useEffect(() => {
        AOS.init({
          duration: 1200,
          easing: 'ease-in-out-back'
        });
      }, [])
  return (
    <>
      {Array.isArray(menu) &&
        menu.map((menuItem: any, index: number) => (
            <div
            data-aos="fade-right" data-aos-delay='50'
            key={index}
            className="flex flex-col pb-8 gap-7 border-b border-brdColor px-8 py-[30px]"
          >
            <div className="flex flex-row justify-between items-center gap-[130px]">
              <h5 className="text-xs font-bold text-[#98A2B3]">
                {menuItem?.title}
              </h5>
              {<menuItem.icon />}
            </div>

            {Array.isArray(menuItem?.item) &&
              menuItem?.item.map((i: any, idx: number) => (
                <div className="flex flex-col gap-6" key={idx}>
                  <div className="flex flex-row justify-between gap-9">
                    <div className="flex flex-row items-center gap-4">
                      {<i.icon />}
                      <h5 className="font-semibold text-xs text-textColor">
                        {i?.name}
                      </h5>
                    </div>
                    {i?.count && (
                      <div className="flex flex-row items-center justify-center py-[5px] px-[8.5px] gap-[10px] bg-[#3b82f61a] rounded-2xl">
                        <p className="font-extrabold text-[10px] text-[#2563EB]">
                          {i?.count}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
          </div>
        ))}
    </>
  );
};

export default MenuOptions;

const Menubar = ({ menu }: any) => {
  return (
    <div className="flex flex-col pb-8 gap-7 border-b border-brdColor">
      <div className="flex justify-between items-center gap-[85px] ">
        <h5 className="text-xs font-bold text-[#98A2B3]">{menu?.title}</h5>
        {<menu.icon />}
      </div>

      {Array.isArray(menu?.item) &&
        menu?.item.map((i: any, index: number) => (
          <div className="flex flex-col gap-6" key={index}>
            <div className="flex justify-between gap-9">
              <div className="flex items-center gap-4">
                {<i.icon />}
                <h5 className="font-semibold text-xs text-textColor">
                  {i?.name}
                </h5>
              </div>
              {i?.count && (
                <div className="flex items-center justify-center py-[5px] px-[8.5px] gap-[10px] bg-[#3b82f61a] rounded-2xl">
                  <p className="font-extrabold text-[10px] text-[#2563EB]">
                    {i?.count}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Menubar;

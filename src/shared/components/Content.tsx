
import BoardHeadContent from "./BoardHeadContent";
import HeadContent from "./HeadContent";

const Content = () => {
  return (
    // Content

    <div className="w-[1296px] flex flex-col items-start">
      {/* Top */}

      <HeadContent />

      {/* Content */}

      <BoardHeadContent />

      {/* Boards */}

      <div className="grid grid-rows-4 grid-flow-col gap-6">
        <div className="flex flex-col items-start gap-8">
          <div className="flex flex-row justify-between items-center gap-4 self-stretch">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;

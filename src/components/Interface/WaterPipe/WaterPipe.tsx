type Props = {
  classname?: string;
  right?: boolean;
};

export const WaterPipeVertical = ({ classname }: Props) => {
  return (
    <div className={`overflow-hidden flex flex-col pt-5 justify-around items-center ${classname}  w-[100%] h-[100%]`}>
      <hr className="w-[30%] h-[1px] rotate-90 border-1 border-blue-500" />
      <div className="h-0 w-0 border-x-8 mt-[-20px] md:mt-[-55px] border-x-transparent border-t-[12px] border-t-blue-500 cursor-pointer" />
    </div>
  );
};

export const WaterPipeHorizontal = ({ classname, right }: Props) => {
  return (
    <div className={`overflow-hidden flex pt-5 justify-center items-center ${classname}  w-[100%] h-[100%]`}>
      <hr className="w-[60%] h-[1px] border-1 border-blue-500" />
      <div
        className={`h-0 w-0 border-y-8 border-y-transparent ${
          right ? 'border-l-[12px] border-l-blue-500' : 'border-r-[12px] border-r-blue-500'
        } cursor-pointer`}
      />
    </div>
  );
};

export const WaterPipeDiagonal = ({ classname, right }: Props) => {
  return (
    <div
      className={`overflow-hidden flex flex-row-reverse pt-5 justify-end items-center   ${classname}  w-[100%] h-[100%]`}
    >
      <div
        className={`h-0 w-0 border-y-8 border-y-transparent self-end ${
          right ? 'border-l-[12px] border-l-blue-500' : 'border-r-[12px] border-r-blue-500'
        } cursor-pointer rotate-[-65deg]`}
      >
        <hr className="w-[100px] h-[1px] self-center border-1 border-blue-500" />
      </div>
    </div>
  );
};

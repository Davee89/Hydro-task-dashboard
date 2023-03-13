type Props = {
  text: string;
  classname?: string;
};

const WaterObject = ({ text, classname }: Props) => {
  return (
    <button
      className={`border w-fit h-fit p-[20px] md:p-14  rounded-full hover:bg-indigo-300 hover:text-gray-700 font-bold text-[20px] ${classname}`}
    >
      {text}
    </button>
  );
};

export default WaterObject;

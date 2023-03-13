type Props = {
  text: string;
  classname: string;
};

const Object = ({ text, classname }: Props) => {
  return (
    <button className={`border w-[100px] h-[100px] rounded-full hover:bg-slate-300 hover:text-white ${classname}`}>
      {text}
    </button>
  );
};

export default Object;

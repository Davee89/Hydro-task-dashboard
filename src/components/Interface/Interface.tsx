import Object from '../Object/Object';

const Interface = () => {
  return (
    <div className="grid grid-cols-5 grid-rows-3 items-center justify-items-center my-10">
      <Object text="O" classname="col-[1/2] row-[1/2]" />
      <Object text="S" classname="col-[3/4] row-[1/2]" />
      <Object text="O" classname="col-[5/6] row-[1/2]" />
      <Object text="Ź" classname="col-[1/2] row-[3/4]" />
      <Object text="Ź" classname="col-[5/6] row-[3/4]" />
      <hr className="w-[50%] h-[2px] bg-gray-900 border-0 dark:bg-gray-700 row-[1/2] col-[2/3]" />
      <div className="row-[1/2] col-[4/5] w-full h-full flex flex-col justify-around items-center">
        <hr className="w-[50%] h-[2px] bg-gray-900 border-0 dark:bg-gray-700 " />
        <hr className="w-[50%] h-[2px] bg-gray-900 border-0 dark:bg-gray-700 " />
      </div>
      <hr className="rotate-90 w-[50%] h-[2px] bg-gray-900 border-0 dark:bg-gray-700 row-[2/3] col-[1/2] " />
      <hr className="rotate-[150deg] w-[50%] h-[2px] bg-gray-900 border-0 dark:bg-gray-700 row-[2/3] col-[2/3]" />
      <hr className="rotate-90 w-[50%] h-[2px] bg-gray-900 border-0 dark:bg-gray-700 row-[2/3] col-[5/6]" />
    </div>
  );
};

export default Interface;

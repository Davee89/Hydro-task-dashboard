import WaterObject from './WaterObject/WaterObject';
import { WaterPipeDiagonal, WaterPipeHorizontal, WaterPipeVertical } from './WaterPipe/WaterPipe';

const Interface = () => {
  return (
    <div className="grid grid-cols-[minmax(0,_1fr)_minmax(10,_1fr)_minmax(0,_1fr)_minmax(10,_1fr)_minmax(0,_1fr)] grid-rows-[minmax(0,_1fr)_minmax(10px,_1fr)_minmax(0,_1fr)] items-center justify-items-center my-10  p-2 md:p-5 border-indigo-300">
      <WaterObject text="O" classname="col-[1/2] row-[1/2] bg-green-600" />
      <WaterObject text="S" classname="col-[3/4] row-[1/2] bg-indigo-900" />
      <WaterObject text="O" classname="col-[5/6] row-[1/2] bg-green-600" />
      <WaterObject text="Ź" classname="col-[1/2] row-[3/4] bg-blue-400 border-2 border-red-600" />
      <WaterObject text="Ź" classname="col-[5/6] row-[3/4] bg-blue-400 border-2 border-red-600" />
      <div className="row-[1/2] col-[4/5] w-full h-full flex flex-col justify-around items-center">
        <WaterPipeHorizontal classname="row-[1/2] col-[2/3]" right />
        <WaterPipeHorizontal classname="row-[1/2] col-[2/3] flex-row-reverse" />
      </div>
      <WaterPipeHorizontal classname="row-[1/2] col-[2/3]" right />
      <WaterPipeVertical classname="row-[2/3] col-[5/6]" />
      <WaterPipeVertical classname="row-[2/3] col-[1/2]" />
      <WaterPipeDiagonal classname="row-[2/3] col-[2/3]" />
    </div>
  );
};

export default Interface;

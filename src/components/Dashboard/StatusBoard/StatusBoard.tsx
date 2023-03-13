import 'react-circular-progressbar/dist/styles.css';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';

type Props = {
  objectsAmount: number;
  activeObjectsAmount: number;
};

const StatusBoard = ({ objectsAmount, activeObjectsAmount }: Props) => {
  return (
    <div className="flex justify-center items-center flex-wrap">
      <div className="w-[240px] h-[240px] p-[70px] border border-indigo-300 ">
        <p className="text-center uppercase text-sm tracking-widest">Obiekty w sieci:</p>
        <p className="text-[40px] text-blue-600 font-bold text-center">5</p>
      </div>
      <div className="w-[240px] h-[240px] p-[70px] border border-indigo-300">
        <p className="text-center uppercase text-sm tracking-widest">Aktywne obiekty:</p>
        <p className="text-[40px] text-green-500 font-bold text-center">3</p>
      </div>
      <div className="w-[240px] h-[240px] border border-indigo-300">
        <CircularProgressbar
          className="p-5 w-fit"
          text={`${(activeObjectsAmount / objectsAmount) * 100}%`}
          maxValue={objectsAmount}
          value={activeObjectsAmount}
          strokeWidth={50}
          styles={buildStyles({
            strokeLinecap: 'butt',
            textColor: 'white',
            pathColor: 'rgba(26, 161, 26, 0.767)',
            trailColor: 'rgba(139, 27, 27, 0.603)',
            textSize: '15px',
          })}
        />
      </div>
    </div>
  );
};

export default StatusBoard;

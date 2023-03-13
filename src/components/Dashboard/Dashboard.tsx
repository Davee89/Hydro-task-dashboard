import { objects } from '../../assets/data';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Dashboard = () => {
  const objectsAmount = objects.length;
  const activeObjectsAmount = objects.filter(object => object.status).length;
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-center uppercase border">Sieć wodociągów</h1>
      <div className="flex flex-col border">
        <h2 className="self-center">Status Objektów</h2>
        <div className="flex justify-around">
          <p>
            Ilość obiektów:
            {objectsAmount}
          </p>
          {activeObjectsAmount}
          <CircularProgressbar
            className="w-20"
            text={`${(activeObjectsAmount / objectsAmount) * 100}%`}
            maxValue={objectsAmount}
            value={activeObjectsAmount}
            strokeWidth={50}
            styles={buildStyles({
              strokeLinecap: 'butt',
              textColor: 'black',
              pathColor: 'green',
              trailColor: 'red',
              textSize: '20px',
            })}
          />
        </div>
      </div>

      <div className="flex flex-col">
        <label htmlFor="searchBar" className="self-center">
          Wyszukiwarka:
        </label>
        <input type="text" name="searchBar" className="border w-[50%] self-center" />
        <table className="mx-auto shadow-lg px-4 rounded-xl w-[100%]">
          <tr>
            <td className="p-4 font-bold hover:bg-slate-300 cursor-pointer">Nazwa obiektu</td>
            <td className="p-4 font-bold hover:bg-slate-300 cursor-pointer">Rodzaj obiektu</td>
            <td className="p-4 font-bold hover:bg-slate-300 cursor-pointer">Data utworzenia</td>
            <td className="p-4 font-bold hover:bg-slate-300 cursor-pointer">Status</td>
          </tr>
          {objects.map(object => (
            <tr>
              <td className="px-4">{object.objectName}</td>
              <td className="px-4">{object.objectType}</td>
              <td className="px-4">{object.creationDate.toISOString().slice(0, 10)}</td>
              <td className="px-4">{object.status ? 'Ok' : 'Error'}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Dashboard;

import { objects } from '../../assets/data';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Dashboard = () => {
  const objectsAmount = objects.length;
  const activeObjectsAmount = objects.filter(object => object.status).length;
  return (
    <div className="mx-auto flex flex-col gap-10">
      <h1 className="text-center uppercase">Dashboard</h1>
      <div className="flex justify-around items-center">
        <div>
          <h2>Status Urządzeń</h2>
          <p>
            {activeObjectsAmount}
            <span>/{objectsAmount} aktywnych</span>
          </p>
        </div>
        <div>
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
      <table className="mx-auto shadow-lg px-4 rounded-xl">
        <tr>
          <td className="text-center p-4 font-bold">Nazwa obiektu</td>
          <td className="text-center p-4 font-bold">Rodzaj obiektu</td>
          <td className="text-center p-4 font-bold">Data utworzenia</td>
          <td className="text-center p-4 font-bold">Status</td>
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
  );
};

export default Dashboard;

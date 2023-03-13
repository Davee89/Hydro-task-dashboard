import { objects } from '../../assets/data';
import { ChangeEvent, useState } from 'react';
import StatusBoard from './StatusBoard/StatusBoard';

interface Object {
  id: number;
  objectName: string;
  objectType: string;
  creationDate: Date;
  status: boolean;
}

const Dashboard = () => {
  const objectsAmount = objects.length;
  const activeObjectsAmount = objects.filter(object => object.status).length;
  const [filteredData, setFilteredData] = useState<Object[]>(objects);

  const sortFields = (fieldName: keyof Object) => {
    setFilteredData(
      [...filteredData].sort((a, b) => {
        if (a[fieldName] < b[fieldName]) return -1;
        if (a[fieldName] > b[fieldName]) return 1;
        return 0;
      }),
    );
  };

  const filterTable = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFilteredData(
      [...objects].filter(
        ({ objectName, objectType, creationDate, status }) =>
          creationDate.toISOString().slice(0, 10).toLowerCase().includes(value.toLowerCase()) ||
          objectName.toLowerCase().includes(value.toLowerCase()) ||
          objectType.toLowerCase().includes(value.toLowerCase()) ||
          (status ? 'Ok' : 'Error').toLowerCase().includes(value.toLowerCase()),
      ),
    );
  };

  return (
    <div className="flex flex-col gap-10 py-5">
      <h1 className="text-center uppercase tracking-widest font-bold">Sieć wodociągów</h1>
      <StatusBoard objectsAmount={objectsAmount} activeObjectsAmount={activeObjectsAmount} />
      <div className="flex flex-col">
        <label htmlFor="searchBar" className="self-center">
          Wyszukiwarka:
        </label>
        <input type="text" name="searchBar" className="border w-[50%] self-center" onChange={filterTable} />
        <table className="mx-auto shadow-lg px-4 rounded-xl w-[100%] text-[9px] md:text-base">
          <thead>
            <tr>
              <td className="p-4 font-bold hover:bg-slate-300 cursor-pointer" onClick={() => sortFields('objectName')}>
                Nazwa obiektu
              </td>
              <td className="p-4 font-bold hover:bg-slate-300 cursor-pointer" onClick={() => sortFields('objectType')}>
                Rodzaj obiektu
              </td>
              <td
                className="p-4 font-bold hover:bg-slate-300 cursor-pointer"
                onClick={() => sortFields('creationDate')}
              >
                Data utworzenia
              </td>
              <td className="p-4 font-bold hover:bg-slate-300 cursor-pointer" onClick={() => sortFields('status')}>
                Status
              </td>
            </tr>
          </thead>
          <tbody>
            {filteredData.map(({ objectName, objectType, creationDate, status, id }) => (
              <tr key={id}>
                <td className="px-4">{objectName}</td>
                <td className="px-4">{objectType}</td>
                <td className="px-4">{creationDate.toISOString().slice(0, 10)}</td>
                <td className="px-4">{status ? 'Ok' : 'Error'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Dashboard;

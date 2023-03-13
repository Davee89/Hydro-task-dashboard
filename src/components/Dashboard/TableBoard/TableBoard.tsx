import { ChangeEventHandler, MouseEventHandler } from 'react';
import { WaterObject } from '../Dashboard';

type Props = {
  filterTable: ChangeEventHandler;
  sortFields: (field: keyof WaterObject) => void;
  filteredData: WaterObject[];
};

const TableBoard = ({ filterTable, sortFields, filteredData }: Props) => {
  return (
    <div className="flex flex-col border-indigo-900 border-4">
      <div className="flex flex-wrap justify-center gap-x-5 p-5">
        <input
          type="text"
          name="searchBar"
          className="border rounded-2xl w-[60%] self-center text-slate-700 p-2 outline-none text-center tracking-widest"
          onChange={filterTable}
          placeholder="Wyszukaj"
        />
      </div>
      <table className="mx-auto w-[100%] text-[9px] md:text-[14px] ">
        <thead className="">
          <tr>
            <td
              className="py-2 text-center border-2 border-indigo-300 font-bold hover:bg-indigo-300 hover:text-slate-700 cursor-pointer uppercase tracking-wide"
              onClick={e => sortFields('objectName')}
            >
              Nazwa obiektu
            </td>
            <td
              className="py-2 text-center border-2 border-indigo-300 font-bold hover:bg-indigo-300 hover:text-slate-700 cursor-pointer uppercase tracking-wide"
              onClick={e => sortFields('objectType')}
            >
              Rodzaj obiektu
            </td>
            <td
              className="py-2 text-center border-2 border-indigo-300 font-bold hover:bg-indigo-300 hover:text-slate-700 cursor-pointer uppercase tracking-wide"
              onClick={e => sortFields('creationDate')}
            >
              Data utworzenia
            </td>
            <td
              className="py-2 text-center border-2 border-indigo-300 font-bold hover:bg-indigo-300 hover:text-slate-700 cursor-pointer uppercase tracking-wide"
              onClick={e => sortFields('status')}
            >
              Status
            </td>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(({ objectName, objectType, creationDate, status, id }) => (
            <tr key={id}>
              <td className="py-2 border border-indigo-300 text-center">{objectName}</td>
              <td className="py-2 border border-indigo-300 text-center">{objectType}</td>
              <td className="py-2 border border-indigo-300 text-center">{creationDate.toISOString().slice(0, 10)}</td>
              <td className="py-2 border border-indigo-300 text-center">{status ? 'Ok' : 'Error'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableBoard;

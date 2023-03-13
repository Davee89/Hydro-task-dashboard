import { objects } from '../../assets/data';
import { ChangeEvent, useState } from 'react';
import StatusBoard from './StatusBoard/StatusBoard';
import TableBoard from './TableBoard/TableBoard';

export interface WaterObject {
  id: number;
  objectName: string;
  objectType: string;
  creationDate: Date;
  status: boolean;
}

const Dashboard = () => {
  const objectsAmount = objects.length;
  const activeObjectsAmount = objects.filter(object => object.status).length;
  const [filteredData, setFilteredData] = useState<WaterObject[]>(objects);

  const sortFields = (fieldName: keyof WaterObject) => {
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
    <div className="flex flex-col py-5 gap-5">
      <h1 className="text-center uppercase tracking-widest font-bold pb-5 text-[30px]">Sieć wodociągów</h1>
      <StatusBoard objectsAmount={objectsAmount} activeObjectsAmount={activeObjectsAmount} />
      <TableBoard filterTable={filterTable} sortFields={sortFields} filteredData={filteredData} />
    </div>
  );
};
export default Dashboard;

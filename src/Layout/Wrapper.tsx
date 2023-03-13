import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Wrapper = ({ children }: Props) => {
  return <div className="max-w-[800px] mx-auto p-10 bg-gray-800 rounded-[20px] my-10 text-gray-300">{children}</div>;
};

export default Wrapper;

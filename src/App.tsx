import Dashboard from './components/Dashboard/Dashboard';
import Interface from './components/Interface/Interface';

const App = () => {
  return (
    <div className="max-w-[800px] mx-auto px-5 bg-slate-100 rounded-[20px] my-10">
      <Dashboard />
      <Interface />
    </div>
  );
};

export default App;

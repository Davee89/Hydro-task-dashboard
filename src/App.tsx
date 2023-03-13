import Dashboard from './components/Dashboard/Dashboard';
import Interface from './components/Interface/Interface';
import Wrapper from './Layout/Wrapper';

const App = () => {
  return (
    <Wrapper>
      <Dashboard />
      <Interface />
    </Wrapper>
  );
};

export default App;

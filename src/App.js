import './App.scss';
import { MainLayout } from './layouts/MainLayout';
import Routing from './routing/Routing';

function App() {
  return (
    <MainLayout>
      <Routing />
    </MainLayout>
  );
}

export default App;

import './App.scss';
import Profile from './pages/Profile';
import logo from './assets/SocialSnip.svg';
import Onboarding from './pages/Onboarding';
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

import './App.scss';
import Profile from './pages/Profile';
import logo from './assets/SocialSnap.svg';

function App() {
  return (
    <div className='app h-full w-full flex flex-col gap-10 justify-center '>
      <img src={logo} className='h-36' alt='logo' />
      <Profile />
      <h1 className='text-center text-2xl text-violet-900'>Social Snap</h1>
    </div>
  );
}

export default App;

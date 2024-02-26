import './App.css';

import Login from './components/login';
import Logout from './components/logout';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function App() {
  const user = useSelector(selectUser)

  return (
    <div>{ user ? <Logout/> : <Login/> }</div>
  );
}

export default App;

import './App.css';

import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { Route, Routes } from "react-router-dom";

import Login from './components/login';
import Logout from './components/logout';
import SignUp from './components/signup';
import ForgotPassword from './components/forgot';

function App() {
  const user = useSelector(selectUser)

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={user ? <Logout/> : <Login/>  }
      />
      <Route
        exact
        path="/forgot"
        element={<ForgotPassword/>}
      />
      <Route
        exact
        path="/signup"
        element={<SignUp/>}
      />
    </Routes>
  );
}

export default App;

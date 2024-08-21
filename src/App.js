import './App.css';
import { Routes, Route } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import * as authService from './services/authService.js'

// import { AuthContext } from './contexts/AuthContext';
// import useLocalStorage from './hooks/uselocalStorage';
import ErrorBoundary from './components/Common/ErrorBoundary';
import Notification from './components/Common/Notification';

import { AuthProvider } from './contexts/AuthContext';
import { NotificationProvider } from './contexts/NotificationContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from './components/Common/PrivateRoute';
import GuardedRoute from './components/Common/GuardedRoute';

import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Construction from './components/Construction';
import ForAdoption from './components/ForAdoption';
import Information from './components/Information';
import Picking from './components/Picking';
import Caring from './components/Caring';
import Login from './components/Login';
import Register from './components/Register';
import Create from './components/Create';
import Logout from './components/Logout';
import MyPets from './components/MyPets';
import Details from './components/Details';
import Edit from './components/Edit';
import AllPets from './components/AllPets';
import Pagination from './components/Pagination/Pagination';
import MyList from './components/MyList'


// const initialAuthState = {
//   _id: '',
//   email: '',
//   accessToken: ''
// }

function App() {
  // const [user, setUser] = useState({
  //   _id: '',
  //   email: '' ,
  //   accessToken: ''
  // });

  // const [user, setUser] = useLocalStorage('user', initialAuthState);


  // const login = (authData) => {
  //   setUser(authData)
  // };

  // const logout = () => {
  //   setUser(initialAuthState);
  // };

  return (
    <ErrorBoundary>
    {/* // <AuthContext.Provider value={{user, login, logout}}> */}
    <AuthProvider>
      <NotificationProvider>
        <div id='container'>
          <Header/>
          <Notification />
          <main id='site-content'>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard/*" element={<Dashboard />} />
              <Route path="/forAdoption" element={<ForAdoption />} />
              <Route path="/information" element={<Information />} />
              <Route path="/picking" element={<Picking />} />
              <Route path="/caring" element={<Caring />} />
              <Route path="/all-pets" element={<AllPets />} />
              <Route path="/pagination" element={<Pagination />} />

              <Route path="/login" element={<Login/>} />
              <Route path="/logout" element={<Logout/>} />

              <Route path="/register" element={<Register />} />
              <Route path="/my-list" element={<MyList />} />

              
              <Route path="/my-pets" element={<PrivateRoute><MyPets /></PrivateRoute>} />
              <Route path="/details/:petID" element={<Details />} />

              <Route element={<GuardedRoute />}>
                <Route path="/create" element={<Create />} />
                <Route path="/edit/:petID" element={<Edit />} />
              </Route>
            </Routes>
          </main>
        </div>
      </NotificationProvider>
    {/* // </AuthContext.Provider> */}
    </AuthProvider>
    </ErrorBoundary>
    
  );
}

export default App;

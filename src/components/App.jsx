import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage/HomePage';
import UsersPage from 'pages/UsersPage/UsersPage';
import Header from './Header/Header';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/users" element={<UsersPage />}></Route>
        <Route></Route>
      </Routes>
    </>
  );
};

import './App.css';
import { Routes, Route } from "react-router-dom";
import AddUser from './features/users/AddUser';
import UsersList from './features/users/UsersList';
import EditUser from './features/users/EditUser';

function App() {
  return (
    <div>
      <h1> Users Management System </h1>
      <Routes>
        <Route path="/" element={<UsersList />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/edit-user" element={<EditUser />} />
      </Routes>
    </div>
  );
}

export default App;

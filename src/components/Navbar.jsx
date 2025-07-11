import { Link } from 'react-router-dom';
import logo from '../assets/sermig-logo.jpg';

const Navbar = () => {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <img src={logo} alt="Sermig Logo" className="h-12" />
        <h1 className="text-xl font-bold">Sermig Task Manager</h1>
      </div>
      <div className="space-x-4">
        <Link to="/" className="text-blue-500 hover:underline">Home</Link>
        <Link to="/tasks" className="text-blue-500 hover:underline">Tasks</Link>
        <Link to="/dashboard" className="text-blue-500 hover:underline">Dashboard</Link>
        <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;

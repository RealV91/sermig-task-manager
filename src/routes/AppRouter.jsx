import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Tasks from '../pages/Tasks';
import TaskDetail from '../pages/TaskDetail';
import NotFound from '../pages/NotFound';

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/tasks" element={<Tasks />} />
    <Route path="/tasks/:id" element={<TaskDetail />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRouter;

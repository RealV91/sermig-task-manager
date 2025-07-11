import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../redux/tasksSlice';
import { Link } from 'react-router-dom';

const Tasks = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.items);
  const loading = useSelector((state) => state.tasks.loading);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Elenco Task</h2>
      {loading ? <p>Caricamento...</p> : (
        <ul className="space-y-2">
          {tasks.map(task => (
            <li key={task.id} className="border p-4 rounded">
              <Link to={`/tasks/${task.id}`} className="text-blue-500 hover:underline">
                {task.title}
              </Link>
              <p className="text-sm text-gray-500">{task.status}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Tasks;

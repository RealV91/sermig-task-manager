import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const TaskDetail = () => {
  const { id } = useParams();
  const task = useSelector(state => state.tasks.items.find(t => t.id.toString() === id));

  if (!task) return <div className="p-6">Task non trovato.</div>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-2">{task.title}</h2>
      <p className="mb-2">{task.description}</p>
      <p className="text-sm text-gray-500">Stato: {task.status}</p>
    </div>
  );
};

export default TaskDetail;

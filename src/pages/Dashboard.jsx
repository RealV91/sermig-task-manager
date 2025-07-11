import { useSelector } from 'react-redux';

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);
  if (!user || user.role !== 'admin') {
    return <div className="p-6 text-center text-red-500">Accesso riservato agli admin.</div>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Pannello Amministratore</h2>
      <p>Da qui puoi gestire i task dei volontari.</p>
    </div>
  );
};

export default Dashboard;

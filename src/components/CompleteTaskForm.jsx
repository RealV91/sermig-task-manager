const CompleteTaskForm = ({ taskId }) => {
  const handleComplete = async () => {
    await fetch(`http://localhost:5000/tasks/${taskId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: 'completo' }),
    });
    alert('Task completato con successo!');
  };

  return (
    <button onClick={handleComplete} className="bg-blue-500 text-white px-4 py-2">
      Segna come completato
    </button>
  );
};

export default CompleteTaskForm;

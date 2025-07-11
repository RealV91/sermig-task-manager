import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const EditTaskForm = () => {
  const [taskId, setTaskId] = useState('');

  const initialValues = {
    title: '',
    description: '',
    status: 'incompleto',
  };

  const validationSchema = Yup.object({
    title: Yup.string().required('Titolo richiesto'),
    description: Yup.string().required('Descrizione richiesta'),
    status: Yup.string().oneOf(['completo', 'incompleto']),
  });

  const handleSubmit = async (values, { resetForm }) => {
    if (!taskId) {
      alert('Inserisci ID Task da modificare');
      return;
    }
    await fetch(`http://localhost:5000/tasks/${taskId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    });
    resetForm();
    alert(`Task ${taskId} aggiornato con successo`);
  };

  const handleDelete = async () => {
    if (!taskId) {
      alert('Inserisci ID Task da eliminare');
      return;
    }
    await fetch(`http://localhost:5000/tasks/${taskId}`, {
      method: 'DELETE',
    });
    alert(`Task ${taskId} eliminato con successo`);
  };

  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold mb-2">Modifica o elimina un Task</h3>
      <input
        type="text"
        value={taskId}
        onChange={(e) => setTaskId(e.target.value)}
        placeholder="ID del Task"
        className="border p-2 mb-4 w-full"
      />
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        <Form className="space-y-4">
          <div>
            <Field name="title" type="text" placeholder="Nuovo Titolo" className="w-full border p-2" />
            <ErrorMessage name="title" component="div" className="text-red-500 text-sm" />
          </div>
          <div>
            <Field name="description" as="textarea" placeholder="Nuova Descrizione" className="w-full border p-2" />
            <ErrorMessage name="description" component="div" className="text-red-500 text-sm" />
          </div>
          <div>
            <Field as="select" name="status" className="w-full border p-2">
              <option value="incompleto">Incompleto</option>
              <option value="completo">Completo</option>
            </Field>
          </div>
          <button type="submit" className="bg-yellow-500 text-white px-4 py-2">Aggiorna</button>
        </Form>
      </Formik>
      <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 mt-4">Elimina Task</button>
    </div>
  );
};

export default EditTaskForm;

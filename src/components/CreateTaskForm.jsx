import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const CreateTaskForm = () => {
  const initialValues = {
    title: '',
    description: '',
    status: 'incompleto',
  };

  const validationSchema = Yup.object({
    title: Yup.string().required('Titolo richiesto'),
    description: Yup.string().required('Descrizione richiesta'),
  });

  const handleSubmit = async (values, { resetForm }) => {
    await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    });
    resetForm();
    alert('Task creato con successo');
  };

  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-2">Crea un nuovo Task</h3>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        <Form className="space-y-4">
          <div>
            <Field name="title" type="text" placeholder="Titolo" className="w-full border p-2" />
            <ErrorMessage name="title" component="div" className="text-red-500 text-sm" />
          </div>
          <div>
            <Field name="description" as="textarea" placeholder="Descrizione" className="w-full border p-2" />
            <ErrorMessage name="description" component="div" className="text-red-500 text-sm" />
          </div>
          <button type="submit" className="bg-green-500 text-white px-4 py-2">Crea</button>
        </Form>
      </Formik>
    </div>
  );
};

export default CreateTaskForm;

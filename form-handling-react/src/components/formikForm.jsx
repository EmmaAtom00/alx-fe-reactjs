import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const FormikForm = () => {
  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log('Form Submitted (Formik):', values);
    setSubmitting(false);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '20px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Registration Form (Formik)</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="username">Username:</label>
              <Field
                type="text"
                name="username"
                style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
              />
              <ErrorMessage name="username" component="div" style={{ color: 'red' }} />
            </div>

            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="email">Email:</label>
              <Field
                type="email"
                name="email"
                style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
              />
              <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
            </div>

            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="password">Password:</label>
              <Field
                type="password"
                name="password"
                style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
              />
              <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              style={{ width: '100%', padding: '10px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px' }}
            >
              {isSubmitting ? 'Registering...' : 'Register'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;

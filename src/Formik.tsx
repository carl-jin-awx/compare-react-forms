import React, { useState } from 'react';
import { Formik, FastField, Form } from 'formik';
import { TextField } from '@material-ui/core';

import Layout from './Layout';
import { validateRequired, validateEmail } from './validate';

const FormikTextField = ({ field, form, ...rest }: any) => {
  const { touched, errors } = form;
  const error = touched?.[field.name] && !!errors?.[field.name];
  return <TextField {...field} error={error} helperText={error ? errors[field.name] : ''} style={{ marginBottom: 12, width: 230 }} {...rest} />
};

const FormSection = ({idx, errors, touched}: {idx: number; errors: any; touched: any }) => (
  <div style={{
    display: 'flex',
    justifyContent: 'space-around',
  }}>
    <FastField
      name={`name_${idx}`}
      label={`name_${idx}`}
      component={FormikTextField}
      variant="outlined"
      validate={validateRequired}
    />
    <FastField
      name={`gender_${idx}`}
      label={`gender_${idx}`}
      component={FormikTextField}
      variant="outlined"
      validate={validateRequired}
    />
    <FastField
      name={`address_${idx}`}
      label={`address_${idx}`}
      component={FormikTextField}
      variant="outlined"
      validate={validateRequired}
    />
    <FastField
      name={`email_${idx}`}
      label={`email_${idx}`}
      component={FormikTextField}
      variant="outlined"
      validate={validateEmail}
    />
  </div>
);

export default function ReactHookForm() {
  const [length, setLength] = useState(100);

  return (
    <Layout>
      <div style={{ textAlign: 'center', marginBottom: 20 }}>
        <input defaultValue={length} onBlur={(e) => setLength(+e.target.value)} />
      </div>
      <Formik initialValues={{}} onSubmit={(...args: any) => console.log(args)}>
        {({errors, touched}) => {
          return (
            <Form>
              {Array(length).fill(1).map((_, idx) => {
                return (
                  <FormSection key={idx} idx={idx} errors={errors} touched={touched} />
                );
              })}
            </Form>
          )
        }}
      </Formik>
    </Layout>
  )
}

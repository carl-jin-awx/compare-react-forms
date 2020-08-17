import React from 'react';
import { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import { TextField } from '@material-ui/core';

import Layout from './Layout';
import { validateRequired, validateEmail } from './validate';

const ReduxTextField = ({ input, meta, ...rest }: any) => {
  const { touched, invalid, error } = meta;
  return (
    <TextField
      {...input}
      {...rest}
      error={touched && invalid}
      helperText={touched && invalid ? error : ''}
      style={{ marginBottom: 12, width: 230 }}
    />
  );
}


interface Props {
  [key: string]: any;
}

const Form = ({ idx, errors }: { idx: number; errors: any }) => (
  <div style={{
    display: 'flex',
    justifyContent: 'space-around',
  }}>
    <Field
      name={`name_${idx}`}
      label={`name_${idx}`}
      component={ReduxTextField}
      validate={validateRequired}
      variant="outlined"
    />
    <Field
      name={`gender_${idx}`}
      label={`gender_${idx}`}
      component={ReduxTextField}
      validate={validateRequired}
      variant="outlined"
    />
    <Field
      name={`address_${idx}`}
      label={`address_${idx}`}
      component={ReduxTextField}
      validate={validateRequired}
      variant="outlined"
    />
    <Field
      name={`email_${idx}`}
      label={`email_${idx}`}
      component={ReduxTextField}
      validate={validateEmail}
      variant="outlined"
    />
  </div>
);

const ReduxForm = ({ ...rest }: Props) => {
  console.log(rest);
  const [length, setLength] = useState(100)
  return (
    <Layout>
      <div style={{ textAlign: 'center', marginBottom: 20 }}>
        <input defaultValue={length} onBlur={(e) => setLength(+e.target.value)} />
      </div>
      {Array(length).fill(1).map((_, idx) => {
        return (
          <Form key={idx} idx={idx} errors={{}} />
        );
      })}
    </Layout>
  )
}

export default reduxForm<{}, Props>({ form: 'REDUX_FORM', onSubmit: (values: any) => {console.log(values)} })(ReduxForm)

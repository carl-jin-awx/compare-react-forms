import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField } from '@material-ui/core';

import Layout from './Layout';
import { validateRequired, validateEmail } from './validate';

const Form = ({idx, errors, control}: {idx: number; errors: any; control: any}) => (
  <div style={{
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  }}>
    <Controller
      control={control}
      name={`name_${idx}`}
      label={`name_${idx}`}
      as={TextField}
      rules={{ validate: validateRequired }}
      error={!!errors[`name_${idx}`]}
      helperText={errors[`name_${idx}`] ? 'Required' : ''}
      variant="outlined"
      defaultValue=""
      style={{ marginBottom: 12, width: 230 }}
    />
    <Controller
      control={control}
      name={`gender_${idx}`}
      label={`gender_${idx}`}
      as={TextField}
      rules={{ validate: validateRequired }}
      error={!!errors[`gender_${idx}`]}
      helperText={errors[`gender_${idx}`] ? 'Required' : ''}
      variant="outlined"
      defaultValue=""
      style={{ marginBottom: 12, width: 230 }}
    />
    <Controller
      control={control}
      name={`address_${idx}`}
      label={`address_${idx}`}
      as={TextField}
      rules={{ validate: validateRequired }}
      error={!!errors[`address_${idx}`]}
      helperText={errors[`address_${idx}`] ? 'Required' : ''}
      variant="outlined"
      defaultValue=""
      style={{ marginBottom: 12, width: 230 }}
    />
    <Controller
      control={control}
      name={`email_${idx}`}
      label={`email_${idx}`}
      as={TextField}
      rules={{ validate: validateEmail }}
      error={!!errors[`email_${idx}`]}
      helperText={errors[`email_${idx}`] ? 'Please enter correct email address' : ''}
      variant="outlined"
      defaultValue=""
      style={{ marginBottom: 12, width: 230 }}
    />
  </div>
);

export default function ReactHookForm() {
  const [length, setLength] = useState(100);
  const { control, errors } = useForm({ mode: 'all' });

  return (
    <Layout>
      <div style={{ textAlign: 'center', marginBottom: 20 }}>
        <input defaultValue={length} onBlur={(e) => setLength(+e.target.value)} />
      </div>
      {Array(length).fill(1).map((_, idx) => {
        return (
          <Form key={idx} idx={idx} control={control} errors={errors} />
        );
      })}
    </Layout>
  )
}

import React, { ReactNode } from 'react';
import { useHistory } from 'react-router-dom';
import { Tabs, Tab } from '@material-ui/core';

const getActiveTab = () => {
  if (window.location.href.includes('redux-form')) {
    return 'redux-form';
  }
  if (window.location.href.includes('formik')) {
    return 'formik';
  }
  if (window.location.href.includes('react-hook-form')) {
    return 'react-hook-form';
  }
}

export default function Layout({ children }: { children: ReactNode }) {
  const history = useHistory();

  return (
    <div style={{ width: '80vw', margin: '20px auto' }}>
      <Tabs indicatorColor="primary" textColor="primary" value={getActiveTab()} style={{ marginBottom: 20  }}>
        <Tab label="redux-form" value="redux-form" onClick={() => history.push('/redux-form')} />
        <Tab label="formik" value="formik" onClick={() => history.push('/formik')} />
        <Tab label="react-hook-form" value="react-hook-form" onClick={() => history.push('/react-hook-form')} />
      </Tabs>
      {children}
    </div>
  )
}

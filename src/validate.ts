export const validateRequired = (value: any) => {
  // console.log('validate required');
  return value ? undefined : 'Required';
}

export const validateEmail = (value: any) => {
  // console.log('validate email');
  const reg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  return  !reg.test(value || '') ? 'Please enter correct email address' : undefined;
};
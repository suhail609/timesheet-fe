import * as yup from 'yup';

export const noteValidationSchema = yup.object({
  note: yup.string().required('Note is required'),
});

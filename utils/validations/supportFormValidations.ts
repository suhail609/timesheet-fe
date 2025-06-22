import * as yup from 'yup';
import { phoneRegExp } from '../constants';

export const supportFormValidationSchema = yup.object({
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().optional(),
  message: yup.string().required(),
  email: yup.string().email().required('Email is required'),
  phoneNumber: yup
    .string()
    .matches(phoneRegExp, 'Phone number is not valid!')
    .required('Phone number is required!'),
});

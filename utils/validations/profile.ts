import * as yup from 'yup';
import { parsePhoneNumberWithError } from 'libphonenumber-js';

export const personalInfoValidationSchema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup
    .string()
    .email('The email entered is incorrect')
    .required('Email is required'),
  dob: yup.string().required('Date of birth is required'),
});

export const socialValidationSchema = yup
  .object({
    facebook: yup.string().url('Invalid URL').optional(),
    LinkedIn: yup.string().url('Invalid URL').optional(),
    instagram: yup.string().url('Invalid URL').optional(),
    twitter: yup.string().url('Invalid URL').optional(),
    tiktok: yup.string().url('Invalid URL').optional(),
    youtube: yup.string().url('Invalid URL').optional(),
  })
  .test(
    'at-least-one',
    'At least one field must be a valid URL if filled',
    (value: any) => {
      // Check if at least one field is a valid URL
      return Object.keys(value).some(
        (key) => !value[key] || yup.string().url().isValidSync(value[key])
      );
    }
  );

export const parentalControlValidationSchema = yup.object({
  categoriesAllowed: yup
    .array()
    .of(
      yup.object().shape({
        id: yup.string().required(),
        label: yup.string().required(),
      })
    )
    .optional(),
  categoriesRestricted: yup
    .array()
    .of(
      yup.object().shape({
        id: yup.string().required(),
        label: yup.string().required(),
      })
    )
    .optional(),
  initialShopPurchase: yup.boolean(),
  hour: yup
    .object()
    .shape({
      id: yup.string().required('Watch hours is required'),
      label: yup.string().optional(),
    })
    .optional(),
});

export const checkGooglePassword = (value: boolean) => {
  return value
    ? yup.object({
        password: yup.string().required('Password is required'),
        newPassword: yup
          .string()
          .min(8, 'Password must be at least 8 characters')
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d\W]).{8,}$/,
            'Password must contain at least 1 lowercase letter, 1 uppercase letter, and 1 number or special characters'
          )
          .required('New Password is required')
          .test(
            'passwords-match',
            'New password must be different from the old password',
            function (value) {
              return value !== this.parent.password;
            }
          ),
        confirmPassword: yup
          .string()
          .oneOf(
            [yup.ref('newPassword'), undefined],
            'Confirm Password must match with New Password'
          )
          .required('Confirm Password is required'),
        enabled: yup.boolean().optional().default(false),
      })
    : yup.object({
        newPassword: yup
          .string()
          .min(8, 'Password must be at least 8 characters')
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d\W]).{8,}$/,
            'Password must contain at least 1 lowercase letter, 1 uppercase letter, and 1 number or special characters'
          )
          .required('New Password is required')
          .test(
            'passwords-match',
            'New password must be different from the old password',
            function (value) {
              return value !== this.parent.password;
            }
          ),
        confirmPassword: yup
          .string()
          .oneOf(
            [yup.ref('newPassword'), undefined],
            'Confirm Password must match with New Password'
          )
          .required('Confirm Password is required'),
        enabled: yup.boolean().optional().default(false),
      });
};

export const addressValidationSchema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  address1: yup.string().required(),
  address2: yup.string().optional(),
  country: yup.mixed().optional(),
  city: yup.mixed().optional(),
  state: yup.mixed().optional(),
  zipcode: yup.string().optional(),
  countryCode: yup.string().optional(),
  number: yup
    .string()
    .optional()
    .test('is-valid-phone', 'Phone number is not valid', (value, context) => {
      if (!value) return true; // Allow empty value since the field is optional

      const countryCode = context?.parent?.countryCode || '';
      const fullNumber = countryCode + value;

      try {
        const parsedNumber = parsePhoneNumberWithError(fullNumber);

        return parsedNumber.isValid(); // Use libphonenumber-js validation
      } catch (error) {
        console.log('Phone validation error:', error);
        return false;
      }
    }),
});

export const cardValidationSchema = yup.object({
  cardNumber: yup
    .string()
    .matches(/^\d{16}$/, 'Card number must be 16 digits')
    .required('Card number is required'),
  cardName: yup.string().required('Card name is required'),
  expiryDate: yup
    .string()
    .matches(
      /^(0[1-9]|1[0-2])\/?([0-9]{2})$/,
      'Expiry date must be in the format MM/YY'
    )
    .required('Expiry date is required'),
  cvv: yup
    .string()
    .matches(/^\d{3,4}$/, 'CVV must be 3 or 4 digits')
    .required('CVV is required'),
  isDefault: yup.boolean().optional().default(false),
});

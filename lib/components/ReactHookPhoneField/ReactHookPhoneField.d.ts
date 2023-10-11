import { TextFieldProps } from '@mui/material';
export type ReactHookPhoneFieldProps = Omit<TextFieldProps, 'type' | 'inputProps' | 'InputProps'> & {
    testId?: string;
    country?: string;
    optionalDial?: boolean;
    errorInvalid?: string;
    errorRequired?: string;
    asNumericInput?: boolean;
};
/**
 * This component is intended to be used with `<ReactHookForm>` It provides phone-number field-level validation using libphonenumber-js.
 */
export declare const ReactHookPhoneField: ({ required, name, testId, optionalDial, label, errorInvalid, errorRequired, asNumericInput, ...otherProps }: ReactHookPhoneFieldProps) => import("react/jsx-runtime").JSX.Element;
export default ReactHookPhoneField;

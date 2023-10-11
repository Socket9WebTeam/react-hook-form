import { TextFieldProps } from '@mui/material';
export type ReactHookEmailFieldProps = Omit<TextFieldProps, 'type' | 'inputProps' | 'InputProps'> & {
    testId?: string;
};
/**
 * This component is intended to be used with `<ReactHookForm>`. It provides email field-level validation.
 */
declare const ReactHookEmailField: ({ required, name, testId, label, ...otherProps }: ReactHookEmailFieldProps) => import("react/jsx-runtime").JSX.Element;
export default ReactHookEmailField;

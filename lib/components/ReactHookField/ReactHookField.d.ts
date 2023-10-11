import { TextFieldProps } from '@mui/material';
export type ReactHookFieldProps = TextFieldProps & {
    testId?: string;
};
/**
 * This component is intended to be used with `<ReactHookForm>`. It provides any field-level validation.
 */
declare const ReactHookField: ({ required, name, testId, label, ...otherProps }: ReactHookFieldProps) => import("react/jsx-runtime").JSX.Element;
export default ReactHookField;

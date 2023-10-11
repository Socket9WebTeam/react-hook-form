import { TextFieldProps } from '@mui/material';
import { CountryProps } from './FlagSelect/utils/countries';
export type ReactHookPhoneCountryFieldProps = Omit<TextFieldProps, 'type' | 'inputProps' | 'InputProps' | 'margin'> & {
    hasAutocomplete?: boolean;
    testId?: string;
    country?: string;
    dialname?: string;
    containerClass?: string;
    onChangeDial?: (e: CountryProps) => void;
    errorInvalid?: string;
    errorRequired?: string;
    countryLabel?: string;
    asNumericInput?: boolean;
};
/**
 * This component is intended to be used with `<ReactHookForm>` It provides phone-number field-level validation using libphonenumber-js.
 */
declare const ReactHookPhoneCountryField: ({ hasAutocomplete, country, countryLabel, onChangeDial, containerClass, ...props }: ReactHookPhoneCountryFieldProps) => import("react/jsx-runtime").JSX.Element;
export default ReactHookPhoneCountryField;

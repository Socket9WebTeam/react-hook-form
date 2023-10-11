import { ChangeEvent } from 'react';
export interface PhoneNumberProps {
    name: string;
    country: string;
    required: boolean;
    label: string;
    optionalDial: boolean;
    errorInvalid: string;
    errorRequired?: string;
    asNumericInput?: boolean;
}
export declare const addCountryCodeToNumber: (value: string, countryCode: string) => string;
declare const usePhoneNumber: ({ country, name, required, label, optionalDial, errorInvalid, errorRequired, asNumericInput, }: PhoneNumberProps) => {
    countryCode: string;
    handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
    inputValue: any;
    phoneField: import("react-hook-form").ControllerRenderProps<import("react-hook-form").FieldValues, string>;
};
export default usePhoneNumber;

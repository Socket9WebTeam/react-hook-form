import { SelectProps } from '@mui/material';
import React from 'react';
import { CountryProps } from './utils/countries';
export type ReactHookFlagSelectFieldProps = Omit<SelectProps, 'type' | 'inputProps' | 'InputProps'> & {
    hasAutocomplete: boolean;
    testId?: string;
    dialname?: string;
    country?: string;
    onChangeDial?: (value: CountryProps) => void;
    containerClass?: string;
    hiddenLabel?: boolean;
    countryLabel?: string;
};
declare const FlagSelect: React.FC<ReactHookFlagSelectFieldProps>;
export default FlagSelect;

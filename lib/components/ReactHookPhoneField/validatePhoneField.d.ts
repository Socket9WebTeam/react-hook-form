interface ValidatePhoneFieldProps {
    value: string;
    country?: string;
    optionalDial?: boolean;
    errorInvalid: string;
}
export declare function verifyNumberOptionalDial({ value, country, optionalDial, }: ValidatePhoneFieldProps): boolean | undefined;
export declare function verifyNumber({ value, country, optionalDial, }: ValidatePhoneFieldProps): boolean | undefined;
export declare function allowedCharactersInNumber(value?: string): boolean;
export declare function validatePhoneField(props: ValidatePhoneFieldProps): string | undefined;
export {};

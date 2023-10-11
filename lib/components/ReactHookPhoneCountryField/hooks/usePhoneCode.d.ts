/// <reference types="react" />
export declare const getCountryCodeFromValue: (value: string) => string;
declare const usePhoneCode: (name: string, country: string) => {
    phoneCode: string;
    setPhoneCode: import("react").Dispatch<import("react").SetStateAction<string>>;
};
export default usePhoneCode;

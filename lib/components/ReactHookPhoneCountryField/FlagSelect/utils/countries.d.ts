export type CountryProps = {
    label: string;
    code: string;
    phone: string;
};
export declare const findCountryInfo: (countryValue: string) => {
    code: string;
    label: string;
    phone: string;
} | null;
export declare const getCountries: {
    code: string;
    label: string;
    phone: string;
}[];

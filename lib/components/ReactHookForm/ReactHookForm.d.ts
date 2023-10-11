import { ReactNode } from 'react';
import { FieldValues, useFieldArray, useForm } from 'react-hook-form';
export type ReactHookFormProps = {
    children: ReactNode;
    onSubmit: (data: FieldValues) => void;
    formProps?: Parameters<typeof useForm>[0];
    className?: string;
};
export declare const useHookForm: <TFieldValues extends FieldValues, TContext = any, TransformedValues extends FieldValues | undefined = undefined>() => import("react-hook-form").UseFormReturn<TFieldValues, TContext, TransformedValues>;
export declare const useHookArray: typeof useFieldArray;
/**
 *  This component includes `<FormProvider>` from `react-hook-form` together with form.
 *  You can use `useHookForm` hook to access `react-hook-form` methods from children components.
 *
 * @param props ReactHookFormProps
 * @returns JSX.Element
 */
declare const ReactHookForm: ({ children, onSubmit, formProps, className }: ReactHookFormProps) => import("react/jsx-runtime").JSX.Element;
export default ReactHookForm;

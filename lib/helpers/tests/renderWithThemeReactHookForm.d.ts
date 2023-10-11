import { RenderOptions } from '@testing-library/react';
import { ReactNode } from 'react';
import { ReactHookFormProps } from '@/components/ReactHookForm';
type Options = {
    renderOptions?: Omit<RenderOptions, 'queries'>;
    hookFormProps?: Omit<ReactHookFormProps, 'children'>;
};
declare const renderWithThemeReactHookForm: (ui: ReactNode, { renderOptions, hookFormProps }?: Options | undefined) => import("@testing-library/react").RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement, HTMLElement>;
export default renderWithThemeReactHookForm;

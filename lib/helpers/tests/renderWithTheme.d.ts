import { RenderOptions, RenderResult } from '@testing-library/react';
import { ReactElement } from 'react';
declare const renderWithTheme: (ui: ReactElement, options?: Omit<RenderOptions, 'queries'>) => RenderResult;
export default renderWithTheme;

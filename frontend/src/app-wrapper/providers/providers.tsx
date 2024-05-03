import { FC } from 'react';
import { ThemeProvider } from '@/entities/theme-controller';
import { Provider } from 'react-redux';

interface IProviders {
  readonly children: JSX.Element;
}

export const Providers: FC<IProviders> = ({ children }) => {
  return (
    // <Provider store={}>
    <ThemeProvider>{children}</ThemeProvider>
    // </Provider>
  );
};

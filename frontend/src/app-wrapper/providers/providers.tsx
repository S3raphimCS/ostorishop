import { FC } from 'react';
import { Provider } from 'react-redux';

interface IProviders {
  readonly children: JSX.Element;
}

export const Providers: FC<IProviders> = ({ children }) => {
  return (
    // <Provider store={}>
    { children }
    // </Provider>
  );
};

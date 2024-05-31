'use client';
import { FC } from 'react';
import store, { persistor } from '../store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

interface IProviders {
  readonly children: JSX.Element;
}

export const Providers: FC<IProviders> = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

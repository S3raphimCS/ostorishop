import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// const rootRecucer = combineReducers({
//     Здесь все reducer
// })

// const persistConfig = {
//     key: 'root',
//     storage,
//     Вайтлист для сохранения нужной части данных приложения в сессионном localstorage
//     whitelist: ['cart'],
// }

// const persistedReducer = persistReducer(persistConfig, rootRecucer)

// const store = configureStore({
//     reducer: persistedReducer,
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({
//             serializableCheck: {
//                 ignoredActions: [
//                     FLUSH,
//                     REHYDRATE,
//                     PAUSE,
//                     PERSIST,
//                     PURGE,
//                     REGISTER,
//                 ],
//             },
//         }),
// })

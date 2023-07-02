import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { podcastsApi } from '@/features/podcasts';
import { podcastDetailApi } from '@/features/detailPodcast';

const persistConfig = {
  key: 'root',
  storage,
};

export const rootReducers = combineReducers({
  [podcastsApi.reducerPath]: podcastsApi.reducer,
  [podcastDetailApi.reducerPath]: podcastDetailApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([podcastsApi.middleware, podcastDetailApi.middleware]),
});

export type RootState = ReturnType<typeof rootReducers>;

export const persistor = persistStore(store);
export default store;

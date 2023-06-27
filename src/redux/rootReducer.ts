//import { combineReducers, configureStore } from '@reduxjs/toolkit';
//import { Reducer } from 'redux';

import { podcastsApi } from '@/features/podcasts';

export const rootReducer = {
  [podcastsApi.reducerPath]: podcastsApi.reducer,
};

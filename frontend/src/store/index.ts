import { configureStore } from '@reduxjs/toolkit';
import dicomReducer from './dicomSlice';

const store = configureStore({
  reducer: {
    dicom: dicomReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
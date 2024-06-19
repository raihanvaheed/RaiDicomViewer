import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DicomState {
  fileUrl: string | null;
}

const initialState: DicomState = {
  fileUrl: null,
};

const dicomSlice = createSlice({
  name: 'dicom',
  initialState,
  reducers: {
    setFileUrl: (state, action: PayloadAction<string>) => {
      state.fileUrl = action.payload;
    },
    clearFile: (state) => {
      state.fileUrl = null;
    },
  },
});

export const { setFileUrl, clearFile } = dicomSlice.actions;
export default dicomSlice.reducer;

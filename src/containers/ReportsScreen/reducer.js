import { createSlice } from '@reduxjs/toolkit'

const reportSlice = createSlice({
  name: 'reports',
  initialState: {
    loading: false,
    list: [],
  },
  reducers: {
    getReports(state) {
      state.loading = true;
    },
    getReportsSuccess(state, action) {
      state.loading = false;
      state.list = action.payload;
    },
    getReportsFailure(state, action) {
      state.loading = false;
    },
  }
})

export const { getReports, getReportsSuccess, getReportsFailure } = reportSlice.actions;

export default reportSlice.reducer;
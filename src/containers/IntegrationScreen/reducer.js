import { createSlice } from '@reduxjs/toolkit'

const integrationSlice = createSlice({
  name: 'integration',
  initialState: {
    loading: false,
  },
  reducers: {
    cardClicked(state) {
      state.loading = true;
    },
    cardClickedSuccess(state) {
      state.loading = false;
    },
    cardClickedFailure(state) {
      state.loading = false;
    }
  }
})

export const { cardClicked, cardClickedSuccess, cardClickedFailure } = integrationSlice.actions

export default integrationSlice.reducer
import { createSlice } from '@reduxjs/toolkit';

export const authenticatedUserSlice = createSlice({
  name: 'authenticatedUser',
  initialState: {
    data: null,
    status: 'idle',
  },
  reducers: {
    setAuthenticatedUser(state, action) {
      state.data = action.payload;
      state.status = 'succeeded';
    },
    clearAuthenticatedUser(state) {
      state.data = null;
      state.status = 'idle';
    },
  },
});

export const { setAuthenticatedUser, clearAuthenticatedUser } = authenticatedUserSlice.actions;

export default authenticatedUserSlice.reducer;

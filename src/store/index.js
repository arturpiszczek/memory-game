import { createSlice, configureStore } from '@reduxjs/toolkit';

const timeSlice = createSlice({
  name: 'time',
  initialState: { minutes: 0, seconds: 0 },
  reducers: {
    addTime(state, action) {
      state.minutes = action.payload.minutes;
      state.seconds = action.payload.seconds;
    },
  }
});

const statusSlice = createSlice({
  name: 'status',
  initialState: { isFinished: false },
  reducers: {
    setAsFinished(state) {
      state.isFinished = true;
    },
  }
});

const store = configureStore({
  reducer: { time: timeSlice.reducer, status: statusSlice.reducer },
});

export const timeActions = timeSlice.actions;
export const statusActions = statusSlice.actions;

export default store;

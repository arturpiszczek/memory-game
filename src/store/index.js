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

const usernameSlice = createSlice({
  name: 'username',
  initialState: { username: '' },
  reducers: {
    addName(state, action) {
      state.username = action.payload;
    },
  }
});

const store = configureStore({
  reducer: { time: timeSlice.reducer, status: statusSlice.reducer, username: usernameSlice.reducer },
});

export const timeActions = timeSlice.actions;
export const statusActions = statusSlice.actions;
export const usernameActions = usernameSlice.actions;

export default store;

import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    channelId: null, //chanhhel id at the beginig
    channelName: null,
  },
  reducers: {
    setChannelInfo: (state, action) => {
      //state.app += action.payload;
      state.channelId = action.payload.channelId;
      state.channelName = action.payload.channelName;
    },
  },
});

export const { setChannelInfo } = appSlice.actions;
//store is the state //app is the layer//and get the channel id
export const selectChannelId = (state) => state.app.channelId;
export const selectChannelName = (state) => state.app.channelName;

export default appSlice.reducer;

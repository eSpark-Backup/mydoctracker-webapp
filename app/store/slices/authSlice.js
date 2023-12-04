import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'userInfo',
  initialState: {
    user: null,
    message: '',
    profileImageData: null,
    isUploadingProfilePicture: false
  },
  reducers: {
    
  },
});

export default slice.reducer;

// Actions

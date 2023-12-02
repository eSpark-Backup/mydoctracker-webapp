import { createSlice } from '@reduxjs/toolkit';
import api from '../../services';
import { KOINGAPI } from '../../services/apiConstant';
import {
  API_RESPONSE,
  ProfilePicFolder,
  TOAST_TYPES,
} from '../../utils/appConstant';
import secureLocalStorage from 'react-secure-storage';
import { toastService } from '@/services/toast.service';

const slice = createSlice({
  name: 'userInfo',
  initialState: {
    user: null,
    message: '',
    profileImageData: null,
    isUploadingProfilePicture: false
  },
  reducers: {
    // profileSuccess: (state, action) => {
    //   state.user = action.payload.data;
    // },
    // profileFailed: (state, action) => {
    //   state.message = action.payload;
    // },
    // profilePicRequest: (state) => {
    //   state.isUploadingProfilePicture = true
    // },
    // profilePicFailed: (state, action) => {
    //   state.isUploadingProfilePicture = false
    //   state.message = action.payload;
    // },
    // profilePicSuccess: (state, action) => {
    //   state.isUploadingProfilePicture = false
    //   state.profileImageData = action.payload;
    //   // state.user = { ...state?.user, }
    // },
    // profilePicDeleteRequest: (state) => {
    //   state.isUploadingProfilePicture = true
    // },
    // profilePicDeleteFailed: (state, action) => {
    //   state.isUploadingProfilePicture = false
    //   state.message = action.payload;
    // },
    // profilePicDeleteSuccess: (state, action) => {
    //   state.isUploadingProfilePicture = false
    //   state.profileImageData = null;
    //   state.user = {
    //     ...state.user,
    //     profileImage: "",
    //   };
    // },
    // buyChatAppSuccess: (state, action) => {
    //   state.user = {
    //     ...state.user,
    //     userWallet: {
    //       ...state.user.userWallet,
    //       freeCredit: state.user.userWallet.freeCredit - 1000
    //     }
    //   }
    // },

  },
});

export default slice.reducer;

// Actions

export const profileInfo = () => async (dispatch) => {
  api
    .get(`${KOINGAPI.profile}`)
    .then((response) => {
      let result = response.data;
      if (result.status) {
        secureLocalStorage.setItem(
          process.env.NEXT_PUBLIC_USER_LOCAL_STORAGE_HASH_KEY,
          JSON.stringify(result.data)
        );
        dispatch(profileSuccess(response.data));
      } else {
        dispatch(profileFailed(result.error));
      }
    })
    .catch(() => {
      dispatch(profileFailed('failed'));
    });
};

export const updateProfile = (requestParams) => async (dispatch) => {
  api
    .post(KOINGAPI.updateProfile, requestParams)
    .then((response) => {
      let result = response.data;
      if (result.status) {
        secureLocalStorage.setItem(
          process.env.NEXT_PUBLIC_USER_LOCAL_STORAGE_HASH_KEY,
          JSON.stringify(result.data)
        );
        (!requestParams?.userLocation &&
          toastService.show(
            "success",
            "Profile Updated Successfully.",
            TOAST_TYPES.success
          ));
        // alert('Profile Updated Successfully.');
        // dispatch(profileSuccess(response.data));
      } else {
        dispatch(profileFailed(result.error));
      }
    })
    .catch(() => {
      dispatch(profileFailed("failed"));
    });
};

export const uploadProfilePic = (requestParams) => async (dispatch) => {
  dispatch(profilePicRequest())
  api
    .post(`${KOINGAPI.uploadProfileImage}`, requestParams, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      let result = response.data;
      if (result.status) {
        dispatch(profilePicSuccess(result.data));
      } else {
        dispatch(profilePicFailed(API_RESPONSE.CATCH_ERROR));
        toastService.show("Error", result.data, TOAST_TYPES.error);
      }
    })
    .catch(() => {
      dispatch(profilePicFailed(API_RESPONSE.CATCH_ERROR));
      dispatch(profileFailed(API_RESPONSE.CATCH_ERROR));
    });
};
export const deleteProfilePic = () => async (dispatch) => {
  dispatch(profilePicDeleteRequest())
  api
    .delete(`${KOINGAPI.deleteProfilePic}`)
    .then((response) => {
      let result = response.data;
      if (result.status) {
        dispatch(profilePicDeleteSuccess());
      } else {
        dispatch(profilePicDeleteFailed(API_RESPONSE.CATCH_ERROR));
        toastService.show("Error", result.data, TOAST_TYPES.error);
      }
    })
    .catch(() => {
      dispatch(profilePicDeleteFailed(API_RESPONSE.CATCH_ERROR));
    });
};

export const buyCurrentApp = () => async (dispatch) => {
  dispatch(buyChatAppSuccess())
}

const { profileSuccess, profileFailed, profilePicSuccess, buyChatAppSuccess, profilePicRequest, profilePicFailed, profilePicDeleteSuccess, profilePicDeleteFailed, profilePicDeleteRequest } = slice.actions;

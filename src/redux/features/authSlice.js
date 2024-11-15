import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  _id: "",
  username: "",
  photoUrl: "",
  email: "",
  role: "",
  token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    data: initialState,
  },
  reducers: {
    addAuth: (state, action) => {
      state.data = action.payload;
      localStorage.setItem("customer_GenKiKoi", JSON.stringify(action.payload));
    },
    removeAuth: (state, action) => {
      state.data = initialState;
      localStorage.setItem("customer_GenKiKoi", JSON.stringify({}));
    },
    updateAuth: (state, action) => {
      state.data = {
        ...action.payload,
        role: state.data.role,
        token: state.data.token,
      };
    },
  },
});

export const authReducer = authSlice.reducer;
export const { addAuth, removeAuth, updateAuth } = authSlice.actions;

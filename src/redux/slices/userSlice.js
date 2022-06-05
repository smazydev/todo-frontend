import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import userAPI from "../../services/authService";

export const signIn = createAsyncThunk("user/loginStatus", async (payload) => {
  const response = await userAPI.signin(payload);
  console.log(response.data)
  return response.data;
});

const initialState = {
  userDetails: {},
  isAuthenticated: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: () => {},
    register: () => {},
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(signIn.fulfilled, (state, action) => {
      // Add user to the state array
      console.log(action.payload)
      state.userDetails = action.payload;
      localStorage.setItem("token",action.payload.access_token)
      state.isAuthenticated = true
    });
  },
});

// Action creators are generated for each case reducer function
export const { login, register } = userSlice.actions;

export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";



const userSlice = createSlice({
  name : "userinfo",
  initialState : {
    data : {name : "", password : ""}
  },
  reducers : {
    loginUser : (state, action)=>{
      state.data = action.payload
    }
  }
});
export const {loginUser} = userSlice.actions;
export default userSlice.reducer;
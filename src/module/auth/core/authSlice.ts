import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
    name: "auth",
    initialState:{
        profile:null
    },
    reducers: {
        setProfile: (state, action) => {
            state.profile = action.payload
        }
    }
});

export const { setProfile } = AuthSlice.actions;
export default AuthSlice.reducer;
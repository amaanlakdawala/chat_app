import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        allUsers:null,
    },
    reducers: {
        setAuthUser:(state,action)=>{
            state.user = action.payload
        },
        setAllUsers:(state,action)=>{
             state.allUsers = action.payload
        }
}})
export const {
    setAuthUser,
    setAllUsers

} = authSlice.actions

export default authSlice.reducer
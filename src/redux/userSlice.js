import { createSlice } from "@reduxjs/toolkit";

const initalState = {
    users: []
}

const usersSlice = createSlice({
    name: 'users',
    initialState: initalState,
    reducers: {
        setUser: (state, action) => {
            state.users = action.payload
        }
    }
})

export const { setUser } = usersSlice.actions

export const selectUsersState = (state) => state.usersGlobalState.users

export default usersSlice.reducer
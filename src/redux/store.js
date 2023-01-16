import { configureStore } from '@reduxjs/toolkit'
import userReducers from './userSlice'

export const userStore = configureStore({
    reducer: {
        usersGlobalState: userReducers
    }
})
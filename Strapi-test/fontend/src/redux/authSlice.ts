import { createSlice } from "@reduxjs/toolkit";

interface User {
    login: {
        currentUser: {
            currentUser: {
                id: number,
                username: string,
                email: string,
                provider: string,
                confirmed : boolean,
                blocked : boolean,
                createdAt: string,
                updateAt: string
            },
            jwt: string
        },
        isFetching: boolean,
        error: boolean
    },
    logout: {
        currentUser: {
            currentUser: {
                id: number,
                username: string,
                email: string,
                provider: string,
                confirmed : boolean,
                blocked : boolean,
                createdAt: string,
                updateAt: string
            },
            jwt: string
        },
        isFetching: boolean,
    }
}

const initialState: User = {
    login: {
        currentUser: {
            currentUser: {
                id: 0,
                username: '',
                email: '',
                provider: '',
                confirmed : false,
                blocked : false,
                createdAt: '',
                updateAt: ''
            },
            jwt: ''
        },
        isFetching: false,
        error: false,
    },
    logout: {
        currentUser: {
            currentUser: {
                id: 0,
                username: '',
                email: '',
                provider: '',
                confirmed : false,
                blocked : false,
                createdAt: '',
                updateAt: ''
            },
            jwt: ''
        },
        isFetching: false,
    }
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginStart: (state) => {
            state.login.isFetching = true
        },
        loginSuccess: (state, action) => {
            state.login.isFetching = false,
            state.login.currentUser = action.payload
            state.login.error = false
        },
        loginFailed: (state) => {
            state.login.isFetching = false,
            state.login.error = true
        },
        logoutStart: (state) => {
            state.logout.isFetching = true
        },
        logoutSuccess: (state) => {
            state.login.currentUser = state.logout.currentUser
        }
    }
})

export const {
    loginStart,
    loginSuccess,
    loginFailed,
    logoutStart,
    logoutSuccess
} = authSlice.actions;

export default authSlice.reducer;
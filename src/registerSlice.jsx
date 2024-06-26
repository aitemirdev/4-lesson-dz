import { createSlice } from '@reduxjs/toolkit';

const registerSlice = createSlice({
    name: 'register',
    initialState: {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        errors: {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
    },
    reducers: {
        setUsername: (state, action) => {
            state.username = action.payload;
            state.errors.username = '';
        },
        setEmail: (state, action) => {
            state.email = action.payload;
            state.errors.email = '';
        },
        setPassword: (state, action) => {
            state.password = action.payload;
            state.errors.password = '';
        },
        setConfirmPassword: (state, action) => {
            state.confirmPassword = action.payload;
            state.errors.confirmPassword = '';
        },
        setErrors: (state, action) => {
            state.errors = action.payload;
        },
    },
});

export const { setUsername, setEmail, setPassword, setConfirmPassword, setErrors } =
    registerSlice.actions;
export default registerSlice.reducer;

export class handleRegisterSubmit {
}
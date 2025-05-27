import axios from './axios.js'

export const loginRequest = (data) => axios.post('/login', data)

export const registerRequest = (data) => axios.post('/register', data)

export const logoutRequest = () => axios.post('/logout')

export const updateLevelRequest = () => axios.put('/update-level')

export const verifyTokenRequest = () => axios.get('/verify-token')

export const getUserRequest = () => axios.get('/get-user')
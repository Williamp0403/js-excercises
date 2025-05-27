import axios from './axios.js'

export const getResponsesRequest = () => axios.get('/responses')

export const saveResponseRequest = (data) => axios.post('/save-response', data)
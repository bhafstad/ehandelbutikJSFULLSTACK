import http from '../E_COMMERC_API'

const getAllUsers = () => {
    return http.get('/user')
}

export default {
    getAllUsers
}
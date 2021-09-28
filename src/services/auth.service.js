import axios from 'axios'

class AuthService {

    constructor() {
        this.app = axios.create({
            baseURL: 'https://prueba-deploy-back.herokuapp.com/sv/',
            withCredentials: true
        })
        this.axios = axios
    }

    // recoverPassword = (email) => this.app.post(`/pass/recover/${email}`)

    // updatePassword = (token, password) => this.app.post(`/pass/update`, { token, password })
    loggeduser = () => this.app.get('/auth/logged-user')

    login = (username, password) => this.app.post('/auth/login', { username, password })

    signup = (username, password) => this.app.post('/auth/signup', { username, password })

    // logout = () => this.app.get('/logout')


}

export default AuthService
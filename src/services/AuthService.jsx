import api from "../http";

export default class AuthService {
    static async login(email, password) {
        return api.post('/login', {email, password})
    }

    static async registertation(firstName, lastName, years, email, password){
        return api.post('/register', {firstName, email, password})
    }

    static async logout() {
        return api.post('/logout')
    }
}
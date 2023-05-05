import api from "../http";

export default class AuthService {
    static async login(email, password) {
        return new Promise (() => {
            return api.post('/login', {email, password})
        })
    } 

    static async registertation(email, password) {
        return new Promise (() => {
            return api.post('/register', {email, password})
        })
    } 

    static async logout() {
        return new Promise(() => {
            return api.post('/logout')
        })
    }
}
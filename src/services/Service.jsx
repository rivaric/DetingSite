import api from "../http";

export default class Service {
    static async login(email, password) {
        return api.post('/login', {email, password})
    }

    static async registration(lastName, firstName, email, password) {
        const username = firstName + ' ' + lastName; 
        return api.post('/register', {username, email, password})
    }

    static async logout() {
        return api.post('/logout')
    }
}
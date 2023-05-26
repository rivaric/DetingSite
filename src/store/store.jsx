import { makeAutoObservable } from "mobx";
import Service from "../services/Service";
import axios from "axios";
import { API_URL } from "../http";

export default class Store {
    user = {};
    isAuth = false;

    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool) {
        this.isAuth = bool;
    }

    setUser(user) {
        this.user = user;
    }

    async login(email, password) {
        try {
            const response = await Service.login(email, password);
            console.log(response);
            localStorage.setItem('token', response.data.access_token);
            localStorage.setItem('token_ref', response.data['refresh token']);
            this.setAuth(true);
            this.setUser(response.data)
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async registration(firstName, lastName, email, password) {
        try {
            const response = await Service.registration(firstName, lastName, email, password);
            console.log(response);
            localStorage.setItem('token', response.data.access_token);
            localStorage.setItem('token_ref', response.data['refresh token']);
            this.setAuth(true);
            this.setUser(response.data.user)
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async logout() {
        try {
            // const response = await AuthService.logout();
            // console.log(response);
            localStorage.removeItem('token');
            localStorage.removeItem('token_ref')
            this.setAuth(false);
            this.setUser({})
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async checkAuth() {
        try {
            const token_ref = localStorage.getItem('token_ref')
            const response = await axios.post(`${API_URL}/refresh`, {token_ref});
            localStorage.setItem('token', response.data.access_token);
            localStorage.setItem('token_ref', response.data['refresh token']);
            this.setAuth(true);
            this.setUser(response.data.user)
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }
}
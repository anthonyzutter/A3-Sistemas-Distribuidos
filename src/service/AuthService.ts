import axios from "axios"
import http from "../http-common"

const API_URL = "http://localhost:3333"

class AuthService {
    login(email: string, password: string) {
        return axios
            .post(API_URL + "signin", {
                email,
                password
            })
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data))
                }

                return response.data;
            })
    }

    logout() {
        localStorage.removeItem("user")
    }

    // register(username: string, email: string, password: string) {
    //     return axios.post(API_URL + "signup", {
    //         username,
    //         email,
    //         password
    //     })
    // }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user')!)
    }
}

export default new AuthService()
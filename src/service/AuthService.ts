import axios from "axios"

const API_URL = "http://localhost:5501/api/users"

class AuthService {
    login(email: string, password: string) {
        return axios
            .post(API_URL + "/signin", {
                email,
                password
            })
            .then(response => {
                console.log(response);
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
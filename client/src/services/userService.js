
import http from "./httpService";
import auth from "./authService";

const apiEndPoint = "/users";

export async function register(user) {
    try {
        return await http.post(apiEndPoint, {
            email: user.email, 
            password: user.password,
            name: user.name,
            age: user.age,
        });
    } catch (error) {
        console.error(error);
    }
}

export async function changePassword(user, newPassword) {
    try {
        const token = auth.getJwt();
        return await http.patch(apiEndPoint + `/${user._id}`, {
            password: newPassword
        }, {
            headers: {
              "x-auth-token": token
            }
          })
    } catch (error) {
        console.error(error);
    }
}
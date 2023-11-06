import instance from "./axiosCustomize";
import { loginStart,loginSuccess,loginFailed,logoutStart,logoutSuccess } from "../redux/authSlice";

const userLogin = async (user:any, dispatch:any, navigate:any) => {
    dispatch(loginStart());
    try {
        const res = await instance.post('auth/local', user);
        const currentUser = res.data.user;
        const jwt = res.data.jwt;
        const userAndJwt = {currentUser,jwt};
        dispatch(loginSuccess(userAndJwt));
        navigate("/");
    }catch (err) {
        dispatch(loginFailed());
        window.alert("Wrong UserName or Password!");
    }
}

const userLogout = (dispatch:any,navigate:any) => {
    dispatch(logoutStart());
    dispatch(logoutSuccess());
    navigate("/login");
}

export { userLogin, userLogout }
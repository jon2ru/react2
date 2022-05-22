import { ApiResponceType, instance,ResultCodeEnum, ResultCodeforCaptchaEnum } from "./api";

type LoginResponceDataType = {
        userid: number
    }

type MeResponceDataType = {
        id: number,
        email: string,
        login: string
    }
export const loginApi = {
    me() {
        return instance.get<ApiResponceType<MeResponceDataType>>(`auth/me`).then(res => res.data)//107 15:25
    },
    login(email: string, password: string, rememberMe: boolean = false /*если не будет rememberMe*/
        , captcha: null | string = null) {
        return instance.post<ApiResponceType<LoginResponceDataType, ResultCodeEnum | ResultCodeforCaptchaEnum>>(`auth/login`, { email, password, rememberMe, captcha })
        .then(res => res.data)
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}
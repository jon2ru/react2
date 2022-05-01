import axios, { AxiosResponse } from "axios";
import { profileType } from "../types/types";
// * as убрал

const instance = axios.create({
  withCredentials: true,/* передать куку*/
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: { "API-KEY": "66060485-250e-40e6-994f-36765b804827" },
});
//instance- задал параметры
export const usersApi = {
  getUsera(currentPage = 1, pageSize = 10) {
    return (
      instance
        .get(`users?page=${currentPage}&count=${pageSize}`)
        //запрос в userApiContainer
        //currentPage- выделен жирным номер страницы
        //pageSize: 10, -сколько показывать юзеров

        .then((response) => {
          return response.data;
        })
    );
  },

  followApi(userId: number) {
    return instance.delete(
      `follow/${userId}`
    );
  },
  unfollowApi(userId: number) {
    return instance.post(
      `follow/${userId}`
    );
  },
  getProfileApi(userIdd: number) {
    console.warn('Obsolete method. Please profileApi object.');
    return profileApi.getProfileApi(userIdd)
  }
};
// *******************************
export const profileApi = {
  getProfileApi(userIdd: number) {
    return instance.get(`profile/` + userIdd)
  },
  //получил : ищу работу... фото и др.
  getUserStatus(userIdd: number) {
    return instance.get(`profile/status/` + userIdd)
  },
  updateStatus(status: string) {
    return instance.put(`profile/status/`, { status: status })
  },
  // отправляю на сервер объект -> status:status
  savePhoto(photoFile: any) {
    let formData = new FormData();
    formData.append("image", photoFile);
    return instance.put(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  },
  saveProfile(profile: profileType) {
    return instance.put(`profile`, profile)
  },
};
// *****************************
export enum ResultCodeEnum{
  Success=0,
  Error=1
}
export enum ResultCodeforCaptcha{
  CaptchaIsRequired=10
}
type MeResponceType = {
  data: {
    id: number
    email: string
    login: string
  }
  resultCode:ResultCodeEnum
  messages:Array<string>
}
type LoginResponceType = {
  data: {
    userid: number
  }
  resultCode:ResultCodeEnum|ResultCodeforCaptcha
  messages:Array<string>
}
export const loginApi = {
  me() {
    return instance.get<MeResponceType>(`auth/me`).then(res=>res.data)//107 15:25
  },
  login(email: string, password: string, rememberMe: boolean = false /*если не будет rememberMe*/
    , captcha: null | string = null) {
    return instance.post<LoginResponceType>(`auth/login`, { email, password, rememberMe, captcha })
    .then(res=>res.data)
  },
  logout() {
    return instance.delete(`auth/login`);
  }
}
// *************************
export const securityApi = {
  getCaptchaUrl() {
    return instance.get(`security/get-captcha-url`)
  }
};
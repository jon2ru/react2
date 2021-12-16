import * as axios from "axios";

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

  followApi(userId) {
    return instance.delete(
      `follow/${userId}`
    );
  },
  unfollowApi(userId) {
    return instance.post(
      `follow/${userId}`
    );
  },
  getProfileApi(userIdd){
    console.warn('Obsolete method. Please profileApi object.');
    return profileApi.getProfileApi(userIdd)
  }
};

export const profileApi = {
  getProfileApi(userIdd){
    return instance.get(`profile/`+userIdd)
  },
  //получил : ищу работу... фото и др.
  getUserStatus(userIdd){
    return instance.get(`profile/status/`+userIdd)
  },
  updateStatus(status){
    return instance.put(`status/`,{status:status})
  }
  // отправляю на сервер объект -> status:status
  };
export const loginApi={
  me(){
    return instance.get(`auth/me`)
  }
}
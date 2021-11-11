import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
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
      `https://social-network.samuraijs.com/api/1.0/follow/${userId}`
    );
  },
  unfollowApi(userId) {
    return instance.post(
      `https://social-network.samuraijs.com/api/1.0/follow/${userId}`
    );
  },
};
